var pm = {
	mapDraw: null,
	barDraw: null,
	quarter: {
				"q1": ["1","2","3"],
				"q2": ["4","5","6"],
				"q3": ["7","8","9"],
				"q4": ["10","11","12"]
			}		
}

window.addEventListener('load', function () {
    pm.mapDraw = createMap('map');
    pm.barDraw = createBarChart('bar');
    pm.mapDraw.update('2016/7');	
});


var totalHistCount= [];
var totalMapCount = [];

var year18=[], num18=[], year17=[], num17=[], year16=[], num16=[], count18=[], count17=[], count16=[];
year18[0]='2018/1',year18[1]='2018/2' ,year18[2]='2018/3',year18[3]='2018/4',year18[4]='2018/5',year18[5]='2018/6', year18[6]='2018/7';
year18[7]='2018/8',year18[8]='2018/9';

year17[0]='2017/1',year17[1]='2017/2' ,year17[2]='2017/3',year17[3]='2017/4',year17[4]='2017/5',year17[5]='2017/6',year17[6]='2017/7';
year17[7]='2017/8',year17[8]='2017/9' ,year17[9]='2017/10',year17[10]='2017/11',year17[11]='2017/12';

year16[6]='2016/7';
year16[7]='2016/8',year16[8]='2016/9' ,year16[9]='2016/10',year16[10]='2016/11',year16[11]='2016/12';

num18=[0,0,0,0,0,0,0,0,0,0,0,0];
num17=[0,0,0,0,0,0,0,0,0,0,0,0];
num16=[0,0,0,0,0,0,0,0,0,0,0,0];


    for (var i=0; i < q12018.length ; i++){   
        q12018[i].start_time = new Date (q12018[i].start_time);
        switch(q12018[i].start_time.getMonth()){
                case 0: num18[0]+=1;count18[0]=1;break;
                case 1: num18[1]+=1;count18[1]=1;break;
                case 2: num18[2]+=1;count18[2]=1;break;
        }
    }
    for (var i=0; i < q22018.length ; i++){   
        q22018[i].start_time = new Date (q22018[i].start_time);
        switch(q22018[i].start_time.getMonth()){
                case 3: num18[3]+=1;count18[3]=1;break;
                case 4: num18[4]+=1;count18[4]=1;break;
                case 5: num18[5]+=1;count18[5]=1;break;
        }
    }
    for (var i=0; i < q32018.length ; i++){   
        q32018[i].start_time = new Date (q32018[i].start_time);
        switch(q32018[i].start_time.getMonth()){
                case 6: num18[6]+=1;count18[6]=1;break;
                case 7: num18[7]+=1;count18[7]=1;break;
                case 8: num18[8]+=1;count18[8]=1;break;
                
            }
        
    }
    for (var i=0; i < q12017.length ; i++){   
        q12017[i].start_time = new Date (q12017[i].start_time);
        switch(q12017[i].start_time.getMonth()){
                case 0: num17[0]+=1;count17[0]=1;break;
                case 1: num17[1]+=1;count17[1]=1;break;
                case 2: num17[2]+=1;count17[2]=1;break;
        }
    }
    
    for (var i=0; i < q22017.length ; i++){   
        q22017[i].start_time = new Date (q22017[i].start_time);
        switch(q22017[i].start_time.getMonth()){
                case 3: num17[3]+=1;count17[3]=1;break;
                case 4: num17[4]+=1;count17[4]=1;break;
                case 5: num17[5]+=1;count17[5]=1;break;
        }
    }
    for (var i=0; i < q32017.length ; i++){   
        q32017[i].start_time = new Date (q32017[i].start_time);
        switch(q32017[i].start_time.getMonth()){
                case 6: num17[6]+=1;count17[6]=1;break;
                case 7: num17[7]+=1;count17[7]=1;break;
                case 8: num17[8]+=1;count17[8]=1;break;
                
            }
        
    }
    for (var i=0; i < q42017.length ; i++){   
        q42017[i].start_time = new Date (q42017[i].start_time);
        switch(q42017[i].start_time.getMonth()){
            case 9: num17[9]+=1;count17[9]=1;break;
            case 10: num17[10]+=1;count17[10]=1;break;
            case 11: num17[11]+=1;count17[11]=1;break;
        }
    }
    for (var i=0; i < q32016.length ; i++){   
        q32016[i].start_time = new Date (q32016[i].start_time);
        switch(q32016[i].start_time.getMonth()){
                case 6: num16[6]+=1;count16[6]=1;break;
                case 7: num16[7]+=1;count16[7]=1;break;
                case 8: num16[8]+=1;count16[8]=1;break;
                
            }
        
    }
    for (var i=0; i < q42016.length ; i++){   
        q42016[i].start_time = new Date (q42016[i].start_time);
        switch(q42016[i].start_time.getMonth()){
            case 9: num16[9]+=1;count16[9]=1;break;
            case 10: num16[10]+=1;count16[10]=1;break;
            case 11: num16[11]+=1;count16[11]=1;break;
        }
    }
    
    for(var i=6; i<year16.length;i++){
        totalHistCount.push({Date:year16[i], sights:num16[i]})
    }
    
    for(var i=0; i<year17.length;i++){
        totalHistCount.push({Date:year17[i], sights:num17[i]})
    }

    for(var i=0; i<year18.length;i++){
        totalHistCount.push({Date:year18[i], sights:num18[i]})
    }


var createMap = function(elm) {
	// Set a starting viewpoint for the map to load. The zoom here is 12 
	var map = L.map(elm).setView([34.0000, -118.300], 12);

	// Linking the OpenStreetMap API to gather the underlying map information               
	mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

	L.tileLayer(
	    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; ' + mapLink + ' Contributors',
	    maxZoom: 18,
	    }).addTo(map);
				
	// Initializing the SVG layer
	map._initPathRoot()    

	// The SVG can be picked from the map object
	var svg = d3.select("#"+elm).select("svg"),
	g = svg.append("g");
	
	var t = d3.transition().duration(500);

	function _update(mapDate){
	
	dateList = mapDate.split("/");
	month = dateList[1];
	for (var key in pm.quarter) {
		if (pm.quarter[key].includes(month)) {
			mapMonth = key;
		}
	}

	var fileName = 'startCount_' + dateList[0] + '_' + mapMonth;
	var count_list = [];
	var data_list = [];

	fileName = eval(fileName);
	// For every element in the dictionary, set a LatLng point to plot on the map

	// startCount.forEach(function(d) {
		// d.LatLng = new L.LatLng(d.coordinate[0], d.coordinate[1]);
		// count_list.push(d.count)});

	for (var i = 0; i < fileName.length; i++) {
		fileName[i].LatLng = new L.LatLng(fileName[i].coordinate[0], fileName[i].coordinate[1]);
		
		if (fileName[i].date == mapDate) {
			data_list.push(fileName[i]);
			count_list.push(fileName[i].count);
		}
	}

	// Creating a div for the tooltip
	var div = d3.select("body").append("div")	
	   			.attr("class", "tooltip")				
	   			.style("opacity", 0);

	// Selecting a linear scale for the circle radius to vary them according to count value (range: 5 to 30)
	var circleRadius = d3.scaleLinear()
						.domain(d3.extent(count_list))
						.range([5,30]);

	var feature = g.selectAll("circle")
					.data(data_list)

	// Drawing the circle and adding the click event to it
			feature.enter().append("circle")
					.attr("class", "maps")
					.style("stroke", "black")  
					.style("opacity", .6) 
					.style("fill", "red")
					.attr("r", function(d) {return circleRadius(d["count"])}) // Call to the circleRadius scale
    	    		.attr("transform", 
						function(d) { 
							return "translate("+ 
								map.latLngToLayerPoint(d.LatLng).x +","+ 
								map.latLngToLayerPoint(d.LatLng).y +")";
								}
							)					
					.on("mouseover", function(d) {		                          // Handling the click event
	          				d3.select(this).style("fill", "blue")             // Changing the color and stroke of the circle on click
	          					.style("stroke-width", "3px")
	                		})
    	    		.on("mouseout", function(d) {	
    	    				d3.select(this).style("fill", "red")
    	        				.style("stroke-width", "1px");
		        				})
    	    		.append("svg:title").text(function(d){ count = "Total Count: "+d.count; return count;});

	map.on("viewreset", update);

	feature.exit()
		.attr("class", "maps")
		.transition(t)
		.attr('r', 0)
		.remove();

	update();


	function update() {
		feature.attr("transform", 
		function(d) { 
			return "translate("+ 
				map.latLngToLayerPoint(d.LatLng).x +","+ 
				map.latLngToLayerPoint(d.LatLng).y +")";
			}
		)
	}


	// _update('2016/7')
}
	return {
	        update: function(mapDate) {
	            _update(mapDate);
	        }};
}

var createBarChart = function(elem) {
    var _svg = d3.select('#'+elem); 
    
    // var _barWidth = (1450)/27;
    var _barWidth = 1450/27;
    
    var mouseClick = function(d, i){

    	d3.selectAll('rect')
    		.style('fill', 'grey')
    		.style('opacity', 1);
    	d3.select(this)
    		.style('fill', 'blue')
    		.style('opacity', .6);
    	pm.mapDraw.update(d.Date);

    }

    
    var sightArray=[];
    for (var i = 0; i < totalHistCount.length; i++){  
		sightArray[i]= totalHistCount[i].sights;
    }

    var dateList = ["2016/7", "2016/8", "2016/9", "2016/10", "2016/11", "2016/12", "2017/1", "2017/2", "2017/3", "2017/4", "2017/5", "2017/6", "2017/7", "2017/8", "2017/9", "2017/10", "2017/11", "2017/12", "2018/1", "2017/2", "2017/3", "2017/4", "2017/5", "2017/6", "2017/7", "2017/8", "2017/9"];

    var _yScale = d3.scaleLinear()
            .domain([d3.max(sightArray), 0])
            .range([20, 150]);

    var _xScale = d3.scaleBand()
            .domain([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])
            .range([50, 1500]); 
    
    var _xAxis = d3.axisBottom()
                   .scale(_xScale);

    var _yAxis= d3.axisLeft()
                  .scale(_yScale);

    _svg.append("g")
        .attr("transform", "translate(0, 150)")
        .call(_xAxis);

    _svg.append("g")
        .attr("transform", "translate(50, 0)")
        .call(_yAxis);

    var _createBar =_svg.selectAll('rect')
            .data(totalHistCount)
            .enter()
            .append('rect')
            .attr('y',d => {return _yScale(d.sights);})
            .attr('height',d => {return 150-_yScale(d.sights);})
            .attr('width', (_barWidth-.1))
            .attr('fill','grey')
            .attr("transform", function (d, i) {
                var translate = 50+_barWidth*i;
                return "translate("+ translate +")";
            })
            .on('click', mouseClick)
            .append('title')
            .text(function(d,i){
                var setTitle="Date: "+d.Date+", Total Count: "+ d.sights;
                return setTitle;
            });
}

