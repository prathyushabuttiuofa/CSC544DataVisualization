Usage

Follow the steps in sequential order to start the visualization:

1. To convert the CSV raw data file to JSON file:
	python csv_to_json.py metro-bike-share-trips-2018-q1.csv -f pretty 
	-- input = Raw CSV file
	-- output = out.json

2. To restructure the JSON to GeoJSON
	python json_to_geojson.py
	-- input = out.json
	-- output = geo_out.json

3. To produce the start_count.js file from the GeoJSON
	python geo_to_startcount.py
	-- input = geo_out.json
	-- output = start_count.js

4. Repeat steps 1-3 for all raw data files that are required for the visualization. 

5. Double click the PM4.html file to run the visualization.
   Ensure that PM4.html, PM4.css, PM4.js and all the related .js scripts are in the same directory.

Currently, all intermediate files upto step 4 are present in the directory. Effectively, one should be able to just open the PM4.html file and run the visualization.