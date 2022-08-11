from __future__ import annotations
from decimal import Decimal
from typing import Union, Tuple, List
import json

from fastapi import FastAPI
from pydantic import BaseModel


class annotation(BaseModel):
    coord: Tuple[float, float, float, float]
    label: str


class ImageInfo(BaseModel):
    """Defines the annotation information related to the image."""

    annotations: list[annotation] | None = None
    image_name: str
