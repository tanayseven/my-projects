from pathlib import Path
from pydantic import BaseModel, Field
import yaml


class Tool(BaseModel):
    id: str
    name: str
    icon: str
    color: str
    icon_color: str | None = Field(None, alias="icon-color")


class Tools(BaseModel):
    tools: list[Tool] = []

    class Config:
        populate_by_name = True

class Project(BaseModel):
    name: str
    date: str | None = None
    description: str
    tools: list[str] = []  # Now contains tool IDs instead of names
    project_link: str | None = Field(None, alias="project-link")
    github_link: str | None = Field(None, alias="github-link")
    image: str | None = None

    class Config:
        populate_by_name = True


class Projects(BaseModel):
    projects: list[Project] = []

    @classmethod
    def load(cls, yaml_path: Path):
        data = yaml_path.read_text()
        parsed_data = yaml.safe_load(data)
        return cls.model_validate(parsed_data)


class ProjectView(Project):
    tools: list[Tool] = []

    class Config:
        populate_by_name = True


class ProjectsView(BaseModel):
    projects: list[ProjectView] = []

    @classmethod
    def load(cls, yaml_path: Path, tools_yaml_path: Path):
        # Load projects and tools data
        projects = Projects.load(yaml_path)
        tools_data = yaml.safe_load(tools_yaml_path.read_text())
        tools_dict = {tool["id"]: Tool(**tool) for tool in tools_data["tools"]}

        # Create ProjectsView
        projects_view = cls()
        for project in projects.projects:
            # Convert tool IDs to Tool objects
            project_tools = []
            for tool_id in project.tools:
                if tool_id in tools_dict:
                    project_tools.append(tools_dict[tool_id])

            # Create ProjectView with Tool objects
            projects_view.projects.append(
                ProjectView(
                    name=project.name,
                    date=project.date,
                    description=project.description,
                    tools=project_tools,
                    project_link=project.project_link,
                    github_link=project.github_link,
                    image=project.image,
                )
            )

        return projects_view

    def validate(self, data: str) -> bool:
        try:
            parsed_data = yaml.safe_load(data)
            self.model_validate(parsed_data)
            return True
        except Exception as e:
            raise ValueError(f"Validation error: {str(e)}")
