# My Projects

A personal portfolio website that showcases my various projects and creative endeavors. This application allows me to maintain and display both current and archived projects in an organized and visually appealing way.

[![Python](https://img.shields.io/badge/Python-FFD43B?logo=python&logoColor=blue)](https://www.python.org/) <br>
[![Python Version from PEP 621 TOML](https://img.shields.io/python/required-version-toml?tomlFilePath=https%3A%2F%2Fraw.githubusercontent.com%2Ftanayseven%2Fmy-projects%2Frefs%2Fheads%2Fmain%2Fpyproject.toml)](https://www.python.org/downloads/) <br>
[![GitHub License](https://img.shields.io/github/license/tanayseven/my-projects)](https://github.com/tanayseven/my-projects/blob/main/LICENSE) <br>
[![Python CI](https://github.com/tanayseven/my-projects/actions/workflows/py.yml/badge.svg)](https://github.com/tanayseven/my-projects/actions/workflows/py.yml) <br>
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fprojects.tanay.tech&up_message=online&down_message=offline)](https://projects.tanay.tech) <br>

## About

This project is a static site generator that creates a portfolio website from project data stored in YAML files. It uses Python with Flask and Frozen-Flask to generate a static website that can be easily deployed to any web hosting service. The website features a responsive design with both light and dark mode options.

## Project Structure

```
my-projects/
├── .github/                # GitHub configuration files
├── static/                 # Static assets
│   ├── css/                # CSS stylesheets
│   │   └── styles.css      # Main stylesheet
│   └── js/                 # JavaScript files
│       ├── main.js         # Main JavaScript functionality
│       └── projects.js     # Project-specific JavaScript
├── templates/              # HTML templates
│   ├── index.html          # Main page template
│   └── project.html        # Project detail template
├── .gitignore              # Git ignore file
├── .python-version         # Python version specification
├── archived-projects.yaml  # YAML file for archived projects
├── cli.py                  # Command-line interface
├── models.py               # Data models
├── projects.yaml           # YAML file for current projects
├── pyproject.toml          # Python project configuration
├── README.md               # Project documentation
└── uv.lock                 # Dependency lock file
```

## Setup Instructions

### Prerequisites

- Python 3.12 or higher
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-projects.git
   cd my-projects
   ```

2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -e .
   ```

### Usage

You can run the commands using either the CLI directly or using the configured scripts.

#### Using Scripts

```bash
# Validate YAML Files
uv run python -m cli validate

# Serve a Live Preview
uv run python -m cli serve

# Build Static Site
uv run python -m cli build
```

The serve command will start a local development server, typically at http://127.0.0.1:3000, and watch for changes to your YAML files.

The build command will generate a static site in the `build` directory that can be deployed to any web hosting service.

## Adding Projects

Projects are defined in YAML files:

- `projects.yaml` - For current/ongoing projects
- `archived-projects.yaml` - For completed/archived projects

Each project entry follows this format:

```yaml
- name: Project Name
  description: >
    A detailed description of the project.
  date: Month YYYY
  tools:
    - Tool1
    - Tool2
  project-link: https://example.com/project
  github-link: https://github.com/username/project
  image: https://example.com/images/project.png  # Optional
```

## License

MIT License

Copyright (c) 2026 Tanay PrabhuDesai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
