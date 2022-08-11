import os
from collections import defaultdict
from typing import List
from pathlib import Path
from enum import Enum

from fastapi import Depends, FastAPI, HTTPException


from . import crud, models, schemas


class OutputFormats(str, Enum):
    yolo = ("YOLO",)
    coco = ("COCO",)
    createML = ("createML",)
    pascalVOC = ("pascalVOC",)


app = FastAPI()


@app.get(
    "/test",
    tags=["testing"],
)
def test() -> dict:
    """Tests the api to make sure it is running.

    Args:
        None

    Returns:
        "Hello World"
    """
    return "Hello World"


@app.post("/write-to-output/{file_path}/{output_format}", tags=["Output"])
async def write_to_output(file_path: Path, output_format: OutputFormats, image_info: List[schemas.ImageInfo]):

    """Writes to a specified output type with all of the users annotations.

    Args:
        file_path: Path (path to an img file)
        output_format: str (the format of the output file)
        annotations: List(JSON) (the labels and coordinates of all of the
            annotations made by the user)

    Returns:
        None
    """

    if output_format == OutputFormats.createML:
        crud.write_to_output_createML(file_path=file_path, image_info=image_info)
