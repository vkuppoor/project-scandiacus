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

    #What if the person shuts the file, all of the labels are gone, but not the 
    #text file. Might cause some issues with adding new labels.
    #NEED TO CHECK if the length of the txt file is abnormally larger than the
    #list, if it is then I need to match it again to the list
    with open("labelmap.txt", 'a') as f:
        text = f"{len(labels)} {label} \n"
        f.write(text)

def delete_from_label_map(label, labels):
    """Deletes a specific label from a labelmap
    Enables the user to figure out which number belongs to which class.
    
    Args: 
        label: str (The label to be added to the file)

    Returns:
        None
    """

    #What if the person shuts the file, all of the labels are gone, but not the 
    #text file. Might cause some issues with adding new labels.
    #NEED TO CHECK if the length of the txt file is abnormally larger than the
    #list, if it is then I need to match it again to the list
    with open("labelmap.txt", 'r') as f:
        lines = f.readlines()
    
    i = 0
    while i < len(lines):
        if(label in lines[i]):
            lines[i].pop()
        else:
            i+=1
            words = lines[i].split()
            words[0] = str((int(words[0]) - 1)) #all numbers decremented by 1
            lines[i] = words[0] + " " + words[1] + "\n"

    with open("labelmap.txt", 'w') as f:
        f.writelines(lines)


def correct_label_map(labels):
    #make sure that it aligns with labels
    print("IDK WHAT TO DO")

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
