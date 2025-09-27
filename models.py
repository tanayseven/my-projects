from pathlib import Path
from typing import List, Optional
from pydantic import BaseModel, Field
import yaml

class Project(BaseModel):
    """Model representing a single project."""
    name: str
    description: str
    technologies: Optional[List[str]] = None
    project_link: Optional[str] = Field(None, alias="project-link")
    github_link: Optional[str] = Field(None, alias="github-link")

    class Config:
        populate_by_name = True


class Projects(BaseModel):
    """Model representing a collection of projects."""
    projects: List[Project]

    @classmethod
    def load(self, yaml_path: Path):
        data = yaml_path.read_text()
        parsed_data = yaml.safe_load(data)
        return self.model_validate(parsed_data)

    @classmethod
    def validate(cls, data: str) -> bool:
        try:
            parsed_data = yaml.safe_load(data)
            cls.model_validate(parsed_data)
            return True
        except Exception as e:
            raise ValueError(f"Validation error: {str(e)}")
