import os
import time
import http.server
import socketserver
import threading
from getpass import fallback_getpass
from pathlib import Path
from flask_frozen import Freezer

import typer
from flask import Flask, render_template
from typer import colors

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

from models import Projects

app = typer.Typer(help="CLI for managing projects")

DEFAULT_YAML_PATH = Path("projects.yaml")
BUILD_DIR = "build"

flask_app = Flask(__name__, template_folder="templates")


def display_projects(projects: Projects) -> None:
    """Display projects in a formatted way."""
    print(f"Loaded {len(projects.projects)} projects:")
    for i, project in enumerate(projects.projects, 1):
        print(f"\n{i}. {project.name}")
        print(f"   Description: {project.description.strip()}")
        
        if project.technologies:
            tech_list = ", ".join(project.technologies)
            print(f"   Technologies: {tech_list}")
        
        if project.project_link:
            print(f"   Project Link: {project.project_link}")
        
        if project.github_link:
            print(f"   GitHub Link: {project.github_link}")


@app.command(help="Validate the project's YAML file")
def validate(
    yaml_path: Path = typer.Argument(
        DEFAULT_YAML_PATH,
        help="Path to the YAML file containing project data"
    )
) -> None:
    try:
        typer.secho(f"Validating projects from {yaml_path}...", fg=colors.YELLOW)
        projects = Projects.load(yaml_path)
        typer.secho(f"✅ YAML file is valid! Found {len(projects.projects)} projects.", fg=colors.BRIGHT_GREEN)
    except Exception as e:
        typer.secho(f"❌ Error validating YAML file: {str(e)}", fg=colors.BRIGHT_RED, err=True)
        raise typer.Exit(code=1)


class ProjectFileHandler(FileSystemEventHandler):
    def __init__(self, yaml_path: Path):
        self.yaml_path = yaml_path
        self.last_modified = time.time()
    
    def on_modified(self, event):
        if event.src_path == os.path.abspath(self.yaml_path):
            # Debounce to avoid multiple triggers
            if time.time() - self.last_modified > 0.5:
                self.last_modified = time.time()
                typer.secho(f"\n📝 Changes detected in {self.yaml_path}", fg=colors.YELLOW)
                try:
                    projects = Projects.model_validate(self.yaml_path.read_text())
                    typer.secho(f"✅ YAML file is valid! Found {len(projects.projects)} projects.", fg=colors.BRIGHT_GREEN)
                    display_projects(projects)
                except Exception as e:
                    typer.secho(f"❌ Error validating YAML file: {str(e)}", fg=colors.BRIGHT_RED, err=True)


@app.command(help="Serve a live preview of the projects and watch for changes")
def serve(
    yaml_path: Path = typer.Argument(
        DEFAULT_YAML_PATH,
        help="Path to the YAML file containing project data"
    )
) -> None:
    typer.secho(f"Watching {yaml_path} for changes. Press Ctrl+C to stop.", fg=colors.YELLOW)
    
    # Initial validation
    try:
        projects = Projects.load(yaml_path)
        typer.secho(f"✅ YAML file is valid! Found {len(projects.projects)} projects.", fg=colors.BRIGHT_GREEN)
        display_projects(projects)
    except Exception as e:
        typer.secho(f"❌ Error validating YAML file: {str(e)}", fg=colors.BRIGHT_RED, err=True)

    
    # Set up file watcher
    event_handler = ProjectFileHandler(yaml_path)
    observer = Observer()
    observer.schedule(event_handler, path=os.path.dirname(os.path.abspath(yaml_path)) or ".", recursive=False)
    observer.start()
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


@flask_app.route('/')
def index():
    projects = Projects.load(DEFAULT_YAML_PATH)
    return render_template('index.html', projects=projects.projects)


@flask_app.route('/project/<int:project_id>')
def project_detail(project_id):
    projects = Projects.load(DEFAULT_YAML_PATH)
    if 0 <= project_id < len(projects.projects):
        return render_template('project.html', project=projects.projects[project_id])
    return "Project not found", 404


@app.command()
def build(
    yaml_path: Path = typer.Argument(
        DEFAULT_YAML_PATH,
        help="Path to the YAML file containing project data"
    ),
    output_dir: Path = typer.Option(
        BUILD_DIR,
        "--output",
        "-o",
        help="Directory to output the built static site"
    )
) -> None:
    try:
        projects = Projects.load(yaml_path)
        typer.secho(f"✅ YAML file is valid! Found {len(projects.projects)} projects.", fg=colors.BRIGHT_GREEN)
        
        flask_app.config['FREEZER_DESTINATION'] = output_dir
        flask_app.config['FREEZER_RELATIVE_URLS'] = True
        
        freezer = Freezer(flask_app)

        os.makedirs(output_dir, exist_ok=True)

        typer.secho(f"Building static site in {output_dir}...", fg=colors.YELLOW)
        freezer.freeze()
        typer.secho(f"✅ Static site built successfully in {output_dir}!", fg=colors.BRIGHT_GREEN)

    except Exception as e:
        typer.secho(f"❌ Error building static site: {str(e)}", fg=colors.BRIGHT_RED, err=True)
        raise typer.Exit(code=1)


if __name__ == "__main__":
    app()
