from typing import List

from fastapi import Depends, FastAPI


from . import crud, schemas

app = FastAPI()

@app.post("/write-to-output/{output_format}", tags = ["output_format"],
    response_model = list)
def write_to_output(output_format: str, 
    output: List[schemas.output]):
    """Writes to a specified output type with all of the users annotations.
    
    Args:
        file_path: str (path to an img file)
        output_format: str (the format of the output file)
        annotations: List(JSON) (the labels and coordinates of all of the 
            annotations made by the user)
    Returns:
        None
    """
    output_format = output_format.upper()
    if(output_format == "YOLO"):
        return crud.write_to_output_YOLO(output = output)

