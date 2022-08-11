from email import encoders
from pathlib import Path
from . import schemas, encoders
import json


def write_to_output_createML(file_path: Path, image_info: list[schemas.ImageInfo]):

    output = []
    for images in image_info:
        output.append(
            {
                "image": images.image_name,
                "annotations": [
                    {
                        "label": i.label,
                        "coordinates": {
                            "x": i.coord[0],
                            "y": i.coord[1],
                            "width": round((i.coord[2] - i.coord[0]), 1),
                            "height": round((i.coord[3] - i.coord[1]), 1),
                        },
                    }
                    for i in images.annotations
                ],
            }
        )

    file_path = file_path.joinpath("createML.json")
    with file_path.open("w", encoding="utf-8") as f:
        json.dump(output, f, cls=encoders.DecimalEncoder, indent=4)
