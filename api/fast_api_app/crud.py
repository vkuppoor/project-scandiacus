from . import functions, labelmap

def write_to_output_YOLO(file_path: str, annotations: list):
    #doesn't work with a relative path
    labelmap_text = ""
    output_text = ""
    i = 0
    for annotation in annotations:
        cx, cy, w, h = functions.convert_coordinates_to_YOLO(file_path, 
            annotation.coord)
        output_text += f"{i} {cx} {cy} {w} {h} \n"
        labelmap_text += f"{i} {annotation.label} \n"
        i += 1

    output_text = output_text.strip("\n") #gets rid of the trailing backlash
    labelmap_text = labelmap_text.strip("\n")
    labelmap.add_to_labelmap(file_path, labelmap_text)

    with open(file_path + ".txt", 'w') as f:
        f.write(output_text)

