from __future__ import annotations
from decimal import Decimal
from typing import Union, Tuple, List, Optional
import json

from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl
from datetime import datetime


class annotation(BaseModel):
    coord: Tuple[float, float, float, float]
    label: str


class datasetMetadata(BaseModel):
    year: Optional[int]
    version: Optional[str]
    description: Optional[str]
    contributer: Optional[str]
    url: Optional[HttpUrl]
    data_created: Optional[datetime]


class license(BaseModel):
    url: HttpUrl
    name: str


class ImageInfo(BaseModel):
    """Defines the annotation information related to the image."""

    image_name: str
    image_size: int
    annotations: list[annotation] | None = None


class DatasetInfo(BaseModel):
    "Defines the informatuon related to COCO dataset"

    info: Optional[datasetMetadata]
    licenses: Optional[list[license]]
    dataset: list[ImageInfo]
