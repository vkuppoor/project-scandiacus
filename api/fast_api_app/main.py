import os
from collections import defaultdict
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from typing import Tuple


from . import crud, models, schemas, functions

app = FastAPI()

@app.post("/output/YOLO", tags = ["testing"],)
def output_YOLO(path: str, label: str, coords: schemas.boundingBox) -> str:
    """Outputs a txt file based of YOLO annotation principles.
    
    Args:
        path: str (path to an img file)
        label: str (label chosen by the user for the bbox)
        coords: tuples (coordinates of the bbox given by a response model 

    Returns:
        None
    """
    #implement no allowance of repeating bounding box
    #get labelmap to work
    #implement a database
    coords = (coords.x0, coords.y0, coords.x1, coords.y1)
    path = path.strip("\"")
    return crud.add_YOLO_annotation(path = path, label = label, coords = coords)

