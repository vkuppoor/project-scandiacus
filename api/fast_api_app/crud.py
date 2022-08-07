import os
from . import functions, labelmap

labels = list()
def write_to_output_YOLO(file_path: str, annotations: list) -> str:
    labelmap_text = ""
    output_text = ""
    for annotation in annotations:
        cx, cy, w, h = functions.convert_coordinates_to_YOLO(file_path, 
            annotation.coords)
        output_text += f"{len(annotations) - 1} {cx} {cy} {w} {h} \n"
        labelmap_text += f"{len(annotations) - 1} {annotation.label} \n"

    output_text = output_text.strip("\n")
    labelmap_text = labelmap_text.strip("\n")
    labelmap.add_to_labelmap(file_path, labelmap_text)
        
    with open(file_path + ".txt", 'w') as f:
        f.write(output_text)

