import os
#All of the functions concerning the labelmap for YOLO

def add_to_label_map(label, labels):
    """Adds to the labelmap file that maps the numbers to labels.
    Enables the user to figure out which number belongs to which class.
    
    Args: 
        label: str (The label to be added to the file)

    Returns:
        None
    """
    if(correct_label_map(labels)):
        with open("labelmap.txt", 'a') as f:
            text = f"{len(labels) - 1} {label} \n"
            f.write(text)
    else: 
        delete_label_map()
        i = 0
        for label in labels:
            with open("labelmap.txt", 'a') as f:
                text = f"{i} {label} \n"
                f.write(text)
                i += 1


def correct_label_map(labels):
    """Function to ensure that the labels list and labelmap file match.

    Args:
        labels: list (contains all of the labels selected by the user)
    
    Returns:
        None
    """
    with open("labelmap.txt", 'r') as f:
        lines = f.readlines()
    if(len(labels) != len(lines)):
        return False
    return True

def delete_label_from_label_map(label, labels):
    """Deletes a specific label from a labelmap
    Enables the user to figure out which number belongs to which class.
    
    Args: 
        label: str (The label to be added to the file)

    Returns:
        None
    """
    with open("labelmap.txt", 'r') as f:
        lines = f.readlines()
    
    i = 0
    while i < len(lines):
        if(label in lines[i]):
            lines[i].pop() #this is done to avoid popping a list in a for loop
        else:
            i+=1
            words = lines[i].split()
            words[0] = str((int(words[0]) - 1)) #all numbers decremented by 1
            lines[i] = words[0] + " " + words[1] + "\n"

    with open("labelmap.txt", 'w') as f:
        f.writelines(lines)

def delete_label_map():
    """Delete the labelmap file.
    
    Args: 
        None

    Returns:
        None
    """
    if os.path.exists("labelmap.txt"):
        os.remove("labelmap.txt")
    else:
        print("The file does not exist")
