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

def lintJson(filename):
    print("Checking file " + filename)
    with open(filename) as file:
        try: json.load(file)
        except Exception as e:
            print("Error while parsing " + filename)
            traceback.print_tb(e)
    return False

if __name__ == "__main__":
    jsonFiles = getJsonFiles()
    failed = False
    for file in jsonFiles:
        if lintJson(file) == True:
            failed = True

    if failed:
        sys.exit(1)

