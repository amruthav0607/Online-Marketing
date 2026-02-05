import os
import shutil

# Path of Downloads folder
DOWNLOADS_PATH = os.path.join(os.path.expanduser("~"), "Downloads")

# File type folders
FILE_TYPES = {
    "Images": [".jpg", ".jpeg", ".png", ".gif"],
    "Videos": [".mp4", ".mkv", ".avi"],
    "Documents": [".pdf", ".docx", ".txt", ".pptx", ".xlsx"],
    "Music": [".mp3", ".wav"],
    "Archives": [".zip", ".rar"]
}

def organize_files():
    for file in os.listdir(DOWNLOADS_PATH):
        file_path = os.path.join(DOWNLOADS_PATH, file)

        if os.path.isfile(file_path):
            moved = False
            for folder, extensions in FILE_TYPES.items():
                if file.lower().endswith(tuple(extensions)):
                    folder_path = os.path.join(DOWNLOADS_PATH, folder)
                    os.makedirs(folder_path, exist_ok=True)
                    shutil.move(file_path, folder_path)
                    moved = True
                    break

            if not moved:
                other_path = os.path.join(DOWNLOADS_PATH, "Others")
                os.makedirs(other_path, exist_ok=True)
                shutil.move(file_path, other_path)
def organize_files():
    print("Script started successfully ✅")

organize_files()