from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

class boundingBox(BaseModel):
    x0: float
    y0: float
    x1: float
    y1: float
