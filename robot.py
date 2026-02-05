import os
import shutil
import google.generativeai as genai

# --- 1. SETUP ---
# Paste your API Key here
GOOGLE_API_KEY = "PASTE_YOUR_KEY_HERE"
genai.configure(api_key=GOOGLE_API_KEY)

def organize_specific_path(desktop_path):
    """
    Scans a specific folder, creates an 'Organized_PDFs' folder there,
    and moves the files. Returns the number of files moved.
    """
    # 1. Check if this path actually exists on the computer
    if not os.path.exists(desktop_path):
        return 0

    print(f"[Scanning] Checking folder: {desktop_path}")

    # 2. Find PDF files
    files = [f for f in os.listdir(desktop_path) if f.lower().endswith('.pdf')]
    
    # 3. If no files, stop here
    if not files:
        return 0

    # 4. Create the destination folder inside this specific desktop
    destination_folder = os.path.join(desktop_path, "Organized_PDFs")
    if not os.path.exists(destination_folder):
        os.makedirs(destination_folder)

    # 5. Move the files
    moved_count = 0
    for file in files:
        try:
            source = os.path.join(desktop_path, file)
            dest = os.path.join(destination_folder, file)
            shutil.move(source, dest)
            moved_count += 1
            print(f"   -> Moved: {file}")
        except Exception as e:
            print(f"   [Error] Could not move {file}: {e}")
            
    return moved_count

def move_pdfs_everywhere():
    user_home = os.path.expanduser("~")
    
    # --- DEFINE BOTH PATHS ---
    path_local = os.path.join(user_home, "Desktop")
    path_onedrive = os.path.join(user_home, "OneDrive", "Desktop")

    total_moved = 0
    
    # --- RUN THE CLEANUP ON BOTH ---
    print("--- Starting Double Sweep ---")
    total_moved += organize_specific_path(path_local)
    total_moved += organize_specific_path(path_onedrive)
    
    # --- RESULT ---
    if total_moved == 0:
        return "No PDFs found in either location (Local or OneDrive)."
    
    # --- GENERATE ROBOT MESSAGE ---
    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        response = model.generate_content(f"I just cleaned up {total_moved} PDFs from two different desktops. Give me a funny robot victory remark.")
        return response.text
    except:
        return f"Operation Complete! Total files moved: {total_moved}"

if __name__ == "__main__":
    print("Robot: Online (Dual-Core Scanning Mode).")
    print("Type 'move' to scan both Desktops.")
    
    while True:
        try:
            u_in = input("\nYou: ").strip().lower()
            if u_in == "move":
                print("Robot is thinking...")
                result = move_pdfs_everywhere()
                print(f"Robot says: {result}")
                break
            elif u_in in ["exit", "quit"]:
                break
        except KeyboardInterrupt:
            break