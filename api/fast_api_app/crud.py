import os
from . import functions, labelmap


labels = list()
def add_YOLO_annotation(path: str, label: str, coords: tuple) -> str:
    if(label not in labels):
        labels.add(label)
        labelmap.add_to_label_map(label, labels, path)

    with open(path + ".txt", 'a') as f:
        cx, cy, w, h = functions.convert_coordinates_to_YOLO(path, coords)
        annotation = f"{len(labels) - 1} {cx} {cy} {w} {h} \n"
        f.write(annotation)
    return annotation

