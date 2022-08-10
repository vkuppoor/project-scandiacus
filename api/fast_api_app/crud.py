from pathlib import Path
from . import schemas
import json


def write_to_output_createML(file_path: Path, image_info: list[schemas.ImageInfo]):

    output = []
    for images in image_info:
        output.append(
            {
                "image": images.image_name,
                "annotations": [
                    {"label": i.label, "coords": {"x": i.coord[0], "y": i.coord[1]}}  # does not take decimal though
                    for i in images.annotations
                ],
            }
        )

    output_as_str = json.dumps(output, cls=schemas.DecimalEncoder)
    print(output_as_str)

    file_path = file_path.joinpath("createML.json")
    with file_path.open("w", encoding="utf-8") as f:
        json.dump(output, f, cls=schemas.DecimalEncoder, indent=4)
