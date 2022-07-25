import os
from collections import defaultdict
from typing import List

from fastapi import Depends, FastAPI, HTTPException


from . import crud, models, schemas, functions

app = FastAPI()

@app.get("/output/YOLO", tags = ["testing"],)
def output_YOLO(path: str, label: str, coords: tuple) -> dict:
    """Outputs a txt file based of YOLO annotation principles.
    
    Args:
        path: str (path to an img file)
        label: str (label chosen by the user for the bbox)
        coords: tuples (coordinates of the bbox given by (x0, y0, x1, y1))

    Returns:
        None
    """
    #WOULD FE BE PLANNING TO HOLD ALL OF THE ANNOTATIONS OR CALL THIS FUNCTION EACH ANNOTATION?
    #BOTH WORK I JUST NEED TO KNOW WHICH
    #ALSO SHOULD WE MAKE A .txt file for all the images or only the opened ones?
    
    #NEED TO MAKE A VIRTUAL ENV!

    #PSEUDOCODE
    #write the annotation/s to the the text file THIS IS THE HARD PART

    annotation = crud.ouput_YOLO(path = path, label = label, coords = coords)
    return annotation
