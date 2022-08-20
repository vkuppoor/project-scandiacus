from . import functions
from io import StringIO 
from zipfile import ZipFile

def write_to_output_YOLO(output: dict) -> list:
    labels = set()
    labelmap_text = ""
    output_text = ""
    i = 0
    with ZipFile("annotations", 'w') as zip:
        output_text = ""
        labelmap_text = ""
        for img in output:
            file_path = img.image_name
            for annotation in img.annotations:
                cx, cy, w, h = functions.convert_coordinates_to_YOLO(img.img_size, 
                annotation.coord)
                output_text += f"{i} {cx} {cy} {w} {h} \n"
                if(annotation.label not in labels):
                    labels.add(annotation.label)
                    labelmap_text += f"{i} {annotation.label} \n"
                i += 1
            zip.writestr(img.image_name, output_text)

        zip.writestr("labelmap", labelmap_text)
        zip.extractall("api/annotations")

    return [file_path, "labelmap"]



