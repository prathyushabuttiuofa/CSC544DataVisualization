import json
from datetime import datetime
###############################################################################################################
#                
#  This script takes the general GeoJSON file and produces the Javascript file that lists the frequency of
#  bike pickups in each distinct geographic location.
#  
#  The structure of the outout JS file is:
#  
#  var startCount = [{"coordinate":[34.983, -118.341], "count": 78},
#                    {"coordinate":[34.556, -118.337], "count": 256},
#                    ....
#                    {"coordinate":[34.755, -118.110], "count": 10}]
#  
#  This format is easily ingestible by the visualization script and makes the visualization process much
#  easier.
#  
#  Similar data structures will be created for other use cases keeping the GeoJSON file as the primary
#  source of information.
#  
###############################################################################################################

if __name__ == "__main__":

	tempArray = []
	finalJSON = []

	# Create new JSON file
	with open('geo_out.json', 'r') as fileHandle:
		geoJSON = json.loads(fileHandle.read())
		for location in geoJSON:
			tempDict = {}
			if ((location["geometry"]["coordinate"][0] not in  ["", "0"]) and (location["geometry"]["coordinate"][1] not in  ["", "0"])):
				coordinate = location["geometry"]["coordinate"]
				date = (location["properties"]["start_time"])
				try:
					date_format = datetime.strptime(date, '%Y-%m-%d %H:%M:%S')
				except ValueError:
					date_format = datetime.strptime(date, '%m/%d/%Y %H:%M')
				trip_date = str(date_format.year) + '/' + str(date_format.month)
				coordinate.append(trip_date)
				if coordinate not in tempArray:
					tempDict["coordinate"] = coordinate[:2]
					tempDict["count"] = 1
					tempDict["date"] = trip_date
					finalJSON.append(tempDict)
					tempArray.append(coordinate)
				else:
					for item in finalJSON:
						if item["coordinate"] == coordinate[:2] and item["date"] == trip_date:
							item["count"] += 1

	# Write the resulting JSON into a Javascript file
	with open('start_count.js', 'w') as f:
		f.write("startCount = ")
		f.write(json.dumps(finalJSON, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))	
