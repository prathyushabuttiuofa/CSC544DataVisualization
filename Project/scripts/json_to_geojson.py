import json

###############################################################################################################
#                
#  This script reformats the JSON files converted by csv_to_json.py into GeoJSON formats.
#  The basic format for one of the use-cases is:
#  
#  Type: Location             
#  Geometry: {Type: Point, Coordinate: (Start_Latitude, Start_Longitude)}
#  Properties: All data items except for Start_Latitude and Start_Longitude
#
#  Example of GeoJSON format:
#  {
#    "type": "Feature",
#    "geometry": {
#      "type": "Point",
#      "coordinates": [125.6, 10.1]
#    },
#    "properties": {
#      "name": "Dinagat Islands"
#    }
#  }
#
#################################################################################################################

if __name__ == "__main__":
	
	geoData = []
	
	# Re-structure the data
	with open('out.json') as fileHandler:
		dataDict = fileHandler.read()
		dataJSON = json.loads(dataDict)
		for item in dataJSON:
			geo_data = {}
			geo_data["type"] = "Location"
			geo_data["geometry"] = {"type": "Point", "coordinate": [item["start_lat"],item["start_lon"]]}
			geo_data["properties"] = {}
			for key in item:
				if (key == 'start_lon') or (key == 'start_lat'):
					continue
				geo_data["properties"][key] = item[key]
			geoData.append(geo_data)
	
	# Write the geoData to a JSON file
	with open('geo_out.json', 'w') as f:
		f.write(json.dumps(geoData, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))