from PIL import Image

def convert_coordinates_to_YOLO(path, coords):
    img = Image.open(path)

    img_width = img.width
    img_height = img.height
    x0, y0, x1, y1 = coords
    cx = (x0 + x1) / (2.0 * img_width)
    cy = (y0 + y1) / (2.0 * img_height)

    w = (x1 - x0) /  (img_width)
    h = (y1 - y0) / (img_height)

    return (cx, cy, w, h)
