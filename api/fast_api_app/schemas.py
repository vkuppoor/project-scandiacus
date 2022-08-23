from typing import Union, Tuple, List

from pydantic import BaseModel

class annotation(BaseModel):
    coord: Tuple[int, int, int, int]
    label: str

class image(BaseModel):
    image_name: str
    img_size: dict
    annotations: List[annotation]
    
class data(BaseModel):
    dataset_info: dict
    lincenses: list
    dataset: List[image]
    

