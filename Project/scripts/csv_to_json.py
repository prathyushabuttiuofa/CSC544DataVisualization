#!/usr/bin/python

import sys, getopt
import csv
import json

###############################################################################################################
#                
#  This script takes in the raw CSV files and converts them into JSON format for easier manipulation.
#  In essence this is a CSV to JSON converter.
#  
#  This script is invoked using command: python csv_to_json.py -i <path to inputfile> -f <dump/pretty>
#  
###############################################################################################################


#Get Command Line Arguments
def main(argv):
    input_file = ''
    output_file = 'out.json'
    format = ''
    try:
        opts, args = getopt.getopt(argv,"hi:o:f:",["ifile=","format="])
    except getopt.GetoptError:
        print 'csv_to_json.py -i <path to inputfile> -f <dump/pretty>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'csv_to_json.py -i <path to inputfile> -f <dump/pretty>'
            sys.exit()
        elif opt in ("-i", "--ifile"):
            input_file = arg
        elif opt in ("-f", "--format"):
            format = arg
    read_csv(input_file, output_file, format)

#Read CSV File
def read_csv(file, json_file, format):
    csv_rows = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        title = reader.fieldnames
        for row in reader:
            csv_rows.extend([{title[i]:row[title[i]] for i in range(len(title))}])
        write_json(csv_rows, json_file, format)

#Convert csv data into json and write it
def write_json(data, json_file, format):
    with open(json_file, "w") as f:
        if format == "pretty":
            f.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))
        else:
            f.write(json.dumps(data))

if __name__ == "__main__":
   main(sys.argv[1:])
