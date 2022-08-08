import os
from collections import defaultdict
from typing import List, Tuple

from fastapi import Depends, FastAPI, HTTPException


from . import crud, models, schemas, functions

app = FastAPI()

@app.post("/write-to-output/{file_path}/{output_format}", tags = ["testing"],)
def write_to_output(file_path: str, output_format: str, 
    annotations: List[schemas.annotation]):
    """Writes to a specified output type with all of the users annotations.
    
    Args:
        file_path: str (path to an img file)
        output_format: str (the format of the output file)
        annotations: List(JSON) (the labels and coordinates of all of the 
            annotations made by the user)
    Returns:
        None
    """
    #implement a database
    print("BBB")
    output_format = output_format.upper()
    if(output_format == "YOLO"):
        file_path = file_path.strip("\"")
        return crud.write_to_output_YOLO(file_path = file_path, 
            annotations = annotations)

