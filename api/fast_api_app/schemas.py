from typing import Union, Tuple, List

from pydantic import BaseModel

class annotation(BaseModel):
    coord: Tuple[int, int, int, int]
    label: str

class output(BaseModel):
    image_name: str
    img_size: dict
    annotations: List[annotation]

