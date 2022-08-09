from typing import Union, Tuple

from pydantic import BaseModel

class annotation(BaseModel):
    coord: Tuple[int, int, int, int]
    label: str
