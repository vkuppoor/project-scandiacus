import os
from . import functions, labelmap


labels = {}
def add_YOLO_annotation(path: str, label: str, coords: tuple) -> str:
    labels.add(label)
    labelmap.add_to_label_map(label, labels)

    with open(path + ".txt", 'a') as f:
        cx, cy, w, h = functions.convert_coordinates_to_YOLO(path, coords)

        #In YOLO there are 5 numbers, one for the classification. The number is 
        #mapped to 
        annotation = f"{len(labels)} {cx} {cy} {w} {h} \n"
        #class number is determined by the order the labels are made
        #so whenever a user makes a new label the number goes up one
        #not too hard but reinforces my belief that we need a db to store annotations
        print(annotation)
        f.write(annotation)
    return annotation

