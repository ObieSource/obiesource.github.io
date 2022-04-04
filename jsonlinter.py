# python3 lintjson.py
# William Rehwinkel / obiesource, 2022

import sys
import os
import json
import traceback

def getJsonFiles():
    # list all files recursively borrowed from https://pythonexamples.org/python-get-list-of-all-files-in-directory-and-sub-directories/
    filelist = list()
    path = "./"
    
    for root, dirs, files in os.walk(path):
	    for file in files:
            #append the file name to the list
		    filelist.append(os.path.join(root,file))
    
    #print all the file names
    jsonFiles = list()
    
    for name in filelist:
        if name.lower().endswith(".json"):
            jsonFiles.append(name)
    return jsonFiles

REQUIRED_KEYS = (
        "name",
        "pronouns",
        "class",
        "socials",
        "bio",
        "projects"
        )

def lintJson(filename):
    print("Checking file " + filename)
    with open(filename) as file:
        try: js = json.load(file)
        except Exception as e:
            print("Error while parsing " + filename)
            traceback.print_tb(e)
            return True

        failed = False
        if filename.startswith("./members/"):
            # check for required keys
            for k in REQUIRED_KEYS:
                if k not in js:
                    print("Key " + k + " required but not found in members JSON file.")
                    failed = True
            # check for any keys in members 
            for k in js:
                if k not in REQUIRED_KEYS:
                    print("Key " + k + " in members JSON file is not required by website.")
                    failed = True
                

    return failed

if __name__ == "__main__":
    jsonFiles = getJsonFiles()
    failed = False
    for file in jsonFiles:
        if lintJson(file) == True:
            failed = True

    if failed:
        sys.exit(1)

