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

MEMBERS_REQUIRED = {
        "name": "",
        "pronouns": "",
        "class": "",
        "socials": list(),
        "bio": "",
        "projects": list()
        }
PROJECTS_REQUIRED = {
        "name": "",
        "description": "",
        "website": ""
        }

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
            for k in MEMBERS_REQUIRED:
                t = MEMBERS_REQUIRED[k]
                if k not in js:
                    print("Key " + k + " required but not found in members JSON file.")
                    failed = True
                elif type(js[k]) != type(t):
                    print("Key " + k + " has incorrect type " + str(type(js[k])) + ", needs " + str(type(t)))
                    failed=True
            # check for any keys in members 
            for k in js:
                if k not in MEMBERS_REQUIRED:
                    print("Key " + k + " in members JSON file is not required by website.")
                    failed = True
            # check for types in ["socials"]
            l = js["socials"]
            for item in l:
                if type(item) != type(""):
                    print("A value in socials is not a string.", type(item), type(""))
                    failed = True

            # check for correct types of "projects"
            p = js["projects"]
            for item in p:
                for k in PROJECTS_REQUIRED:
                    if k not in item:
                        print("Key " + k + " not in a project dictionary.", item)
                        failed = True
                    elif type(PROJECTS_REQUIRED[k]) != type(item[k]):
                        print("Value for key " + k + " has incorrect type. Got", type(item[k]), "got", type(PROJECTS_REQUIRED[k]))
                        failed = True
                for k in item:
                    if k not in PROJECTS_REQUIRED:
                        print("Key", k, "is included, but not required.")
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

