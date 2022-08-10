from __future__ import annotations
from decimal import Decimal
from typing import Union, Tuple, List
import json

from fastapi import FastAPI
from pydantic import BaseModel


class annotation(BaseModel):
    coord: Tuple[int, Decimal, Decimal, Decimal]
    label: str


class ImageInfo(BaseModel):
    """Defines the annotation information related to the image."""

    annotations: list[annotation] | None = None
    image_name: str


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        # 👇️ if passed in object is instance of Decimal
        # convert it to a string
        if isinstance(obj, Decimal):
            return str(obj)
        # 👇️ otherwise use the default behavior
        return json.JSONEncoder.default(self, obj)


class DecimalDecoder(json.JSONDecoder):
    def __init__(self, *args, **kwargs):
        json.JSONDecoder.__init__(self, object_hook=self.object_hook, *args, **kwargs)

    def object_hook(self, obj):
        if "_type" not in obj:
            return obj
        type = obj["_type"]
        if type == "Decimal":
            return Decimal(obj["value"])
        return obj
