from typing import Union, Tuple

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

class annotation(BaseModel):
    coord: Tuple[int, int, int, int]
    label: str
