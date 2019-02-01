//months - This array holds 1-12 values representing months in a year
//monthCounts -  This array holds the values of total sightings in a particular month across three years
//byMonth - This array holds the normalizing value of each month. Example, there is no sighting in Jan in 2016 so the value would be 2
//sightingsByMonth2018,sightingsByMonth2017, sightingsByMonth2016 - This array holds the sightings occured each month in each year
var ha1b = {
    svgNS: 'http://www.w3.org/2000/svg',
    dataExtents: {},
    months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    monthCounts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    byMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sightingsInYears : [],
    sightingsByMonth2018 : [{"Date":"1/2018", "sightings" : 0}, {"Date":"2/2018", "sightings" : 0}, 
	{"Date":"3/2018", "sightings" : 0}, {"Date":"4/2018", "sightings" : 0}, {"Date":"5/2018", "sightings" : 0},
	{"Date":"6/2018", "sightings" : 0}, {"Date":"7/2018", "sightings" : 0}, {"Date":"8/2018", "sightings" : 0}, 
	{"Date":"9/2018", "sightings" : 0}, {"Date":"10/2018", "sightings" : 0},{"Date":"11/2018", "sightings" : 0},{"Date":"12/2018", "sightings" : 0}],
	sightingsByMonth2017 : [{"Date":"1/2017", "sightings" : 0}, {"Date":"2/2017", "sightings" : 0}, 
	{"Date":"3/2017", "sightings" : 0}, {"Date":"4/2017", "sightings" : 0}, {"Date":"5/2017", "sightings" : 0},
	{"Date":"6/2017", "sightings" : 0}, {"Date":"7/2017", "sightings" : 0}, {"Date":"8/2017", "sightings" : 0}, 
	{"Date":"9/2017", "sightings" : 0}, {"Date":"10/2017", "sightings" : 0},{"Date":"11/2017", "sightings" : 0},{"Date":"12/2017", "sightings" : 0}],
	sightingsByMonth2016 : [{"Date":"1/2016", "sightings" : 0}, {"Date":"2/2016", "sightings" : 0}, 
	{"Date":"3/2016", "sightings" : 0}, {"Date":"4/2016", "sightings" : 0}, {"Date":"5/2016", "sightings" : 0},
	{"Date":"6/2016", "sightings" : 0}, {"Date":"7/2016", "sightings" : 0}, {"Date":"8/2016", "sightings" : 0}, 
	{"Date":"9/2016", "sightings" : 0}, {"Date":"10/2016", "sightings" : 0},{"Date":"11/2016", "sightings" : 0},{"Date":"12/2016", "sightings" : 0}] 
	
};

window.addEventListener('load', function () {

    processUfoData(ufos);
    createBarChart('bar1');
    createLineChart('line1');
    createScatter('scatter1','sugars','protein', 'calories', 'fat');
    createScatter('scatter2','sugars','fibre', 'carbo', 'carbo');
    createScatter('scatter3','carbo','calories', 'fat', 'protein');

});

//processUfoData - used to process the UFO Data to draw the bar and line chart
var processUfoData = function(ufos){
	//variables needed for data processing
	var jan18 = 0, feb18=0 , mar18 = 0, april18 = 0, may18 = 0;
	var june18=0, july18=0,aug18=0,sep18=0,oct18=0,nov18=0,dec18=0;
	var jan17 = 0, feb17=0 , mar17 = 0,april17 = 0,may17 = 0;
	var june17 =0,july17=0,aug17=0,sep17=0,oct17=0,nov17=0,dec17=0;
	var jan16 = 0,feb16=0 ,mar16 = 0,april16 = 0,may16 = 0;
	var june16 =0,july16=0,aug16=0,sep16=0,oct16=0,nov16=0,dec16=0;
	// noOfSightings variables is used to count the total number of sightings for that year
	var noOfSightingsIn2016 = 0, noOfSightingsIn2017 = 0, noOfSightingsIn2018 = 0;
	//normalize variables is used to check if there was a sighting in that month and would be 1 if there was a sighting
	var normalize2018 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var normalize2017 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var normalize2016 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (var _index1=0; _index1 < ufos.length ; _index1++){
		//converting date value to Date Object so that we can extract the year and month
		ufos[_index1].Date = new Date (ufos[_index1].Date);
		// The logic implemented is that we check for the year if it's 2018 it gets into the below loop and calculates 
		// total sightings for that year and stores it in noOfSightingsIn2018 variable
		// based on the month a switch case is written to calculate the sightings in each month 
		if(ufos[_index1].Date.getFullYear() === 2018){
			noOfSightingsIn2018+=1;
			switch(ufos[_index1].Date.getMonth()){
				case 0 : jan18+=1;ha1b.sightingsByMonth2018[0].sightings=jan18 ; normalize2018[0] = 1; break;
				case 1 : feb18+=1;ha1b.sightingsByMonth2018[1].sightings=feb18 ; normalize2018[1] = 1;break;
				case 2 : mar18+=1;ha1b.sightingsByMonth2018[2].sightings=mar18 ; normalize2018[2] = 1;break;
				case 3 : april18+=1;ha1b.sightingsByMonth2018[3].sightings=april18 ; normalize2018[3] = 1;break;
				case 4 : may18+=1;ha1b.sightingsByMonth2018[4].sightings=may18; normalize2018[4] = 1;break;
				case 5 : june18+=1;ha1b.sightingsByMonth2018[5].sightings=june18; normalize2018[5] = 1;break;
				case 6 : july18+=1;ha1b.sightingsByMonth2018[6].sightings=july18; normalize2018[6] = 1;break;
				case 7 : aug18+=1;ha1b.sightingsByMonth2018[7].sightings= aug18; normalize2018[7] = 1;break;
				case 8 : sep18+=1;ha1b.sightingsByMonth2018[8].sightings=sep18 ; normalize2018[8] = 1;break;
				case 9 : oct18+=1;ha1b.sightingsByMonth2018[9].sightings= oct18 ; normalize2018[9] = 1;break;
				case 10 : nov18+=1;ha1b.sightingsByMonth2018[10].sightings=nov18 ; normalize2018[10] = 1;break;
				case 11 : dec18+=1;ha1b.sightingsByMonth2018[11].sightings=dec18 ; normalize2018[11] = 1;break;
			};
		}
		
		if(ufos[_index1].Date.getFullYear() === 2017){
			noOfSightingsIn2017+=1;
			switch(ufos[_index1].Date.getMonth()){
				case 0 : jan17+=1;ha1b.sightingsByMonth2017[0].sightings=jan17 ; normalize2017[0] = 1; break;
				case 1 : feb17+=1;ha1b.sightingsByMonth2017[1].sightings=feb17; normalize2017[1] = 1;break;
				case 2 : mar17+=1;ha1b.sightingsByMonth2017[2].sightings=mar17; normalize2017[2] = 1;break;
				case 3 : april17+=1;ha1b.sightingsByMonth2017[3].sightings=april17; normalize2017[3] = 1;break;
				case 4 : may17+=1;ha1b.sightingsByMonth2017[4].sightings=may17; normalize2017[4] = 1;break;
				case 5 : june17+=1;ha1b.sightingsByMonth2017[5].sightings=june17; normalize2017[5] = 1;break;
				case 6 : july17+=1;ha1b.sightingsByMonth2017[6].sightings=july17; normalize2017[6] = 1;break;
				case 7 : aug17+=1;ha1b.sightingsByMonth2017[7].sightings= aug17 ; normalize2017[7] = 1;break;
				case 8 : sep17+=1;ha1b.sightingsByMonth2017[8].sightings=sep17 ; normalize2017[8] = 1;break;
				case 9 : oct17+=1;ha1b.sightingsByMonth2017[9].sightings= oct17 ; normalize2017[9] = 1;break;
				case 10 : nov17+=1;ha1b.sightingsByMonth2017[10].sightings=nov17 ; normalize2017[10] = 1;break;
				case 11 : dec17+=1;ha1b.sightingsByMonth2017[11].sightings=dec17 ; normalize2017[11] = 1;break;
			};
		}
		if(ufos[_index1].Date.getFullYear() === 2016){
			noOfSightingsIn2016+=1;
			switch(ufos[_index1].Date.getMonth()){
				case 0 : jan16+=1;ha1b.sightingsByMonth2016[0].sightings=jan16; normalize2016[0] = 1; break;
				case 1 : feb16+=1;ha1b.sightingsByMonth2016[1].sightings=feb16 ; normalize2016[1] = 1;break;
				case 2 : mar16+=1;ha1b.sightingsByMonth2016[2].sightings= mar16 ; normalize2016[2] = 1;break;
				case 3 : april16+=1;ha1b.sightingsByMonth2016[3].sightings=april16 ; normalize2016[3] = 1;break;
				case 4 : may16+=1;ha1b.sightingsByMonth2016[4].sightings=may16; normalize2016[4] = 1;break;
				case 5 : june16+=1;ha1b.sightingsByMonth2016[5].sightings=june16; normalize2016[5] = 1;break;
				case 6 : july16+=1;ha1b.sightingsByMonth2016[6].sightings=july16; normalize2016[6] = 1;break;
				case 7 : aug16+=1;ha1b.sightingsByMonth2016[7].sightings= aug16; normalize2016[7] = 1;break;
				case 8 : sep16+=1;ha1b.sightingsByMonth2016[8].sightings=sep16; normalize2016[8] = 1;break;
				case 9 : oct16+=1;ha1b.sightingsByMonth2016[9].sightings=oct16 ; normalize2016[9] = 1;break;
				case 10 : nov16+=1;ha1b.sightingsByMonth2016[10].sightings=nov16 ; normalize2016[10] = 1;break;
				case 11 : dec16+=1;ha1b.sightingsByMonth2016[11].sightings=dec16 ; normalize2016[11] = 1;break;
			};
		}	
	}

	//ha1b.months - This array holds 1-12 values representing months in a year
	for (var monthIndex = 0; monthIndex < 12; monthIndex++){
		ha1b.months[monthIndex] = monthIndex+1;
	}

	//monthCounts -  This array holds the values of total sightings in a particular month across three years
	//byMonth - This array holds the normalizing value of each month. Example, there is no sighting in Jan in 2016 so the value would be 2

	for (var totalIndex = 0; totalIndex < 12; totalIndex ++){
		ha1b.byMonth[totalIndex] = normalize2018[totalIndex]+normalize2017[totalIndex]+normalize2016[totalIndex];
		ha1b.monthCounts[totalIndex] = ha1b.sightingsByMonth2016[totalIndex].sightings+ha1b.sightingsByMonth2017[totalIndex].sightings+ha1b.sightingsByMonth2018[totalIndex].sightings;
	}


}

//to splice an array
var spliceFunction = function (arr) {
	for(var i=0; i< arr.length ;i++){
		if(arr[i].sightings === 0){
			arr.splice(i,1);
		}
	}
	return arr;
}

var createLineChart = function(elem) {
	var svgWidth = 600, svgHeight = 600;
	var sightingsInYears = ha1b.sightingsByMonth2016.concat(ha1b.sightingsByMonth2017,ha1b.sightingsByMonth2018);

	for(var index=0; index < sightingsInYears.length ; index++){
		spliceFunction(sightingsInYears); // removes any values with 0 sightings
	}

	var arrayOfDates = [];
	for(var dateIndex = 0; dateIndex < sightingsInYears.length; dateIndex++){
		arrayOfDates[dateIndex]= sightingsInYears[dateIndex].Date;
	}

	var arrayOfSight = [];
	for(var sightIndex = 0; sightIndex < sightingsInYears.length; sightIndex++){
		arrayOfSight[sightIndex]=sightingsInYears[sightIndex].sightings;
	}

	var svg = d3.select('#'+ elem)
    			.attr("width", svgWidth)
    			.attr("height", svgHeight);
    
	var xAxis = d3.scaleTime()
				  .domain([new Date("February 1, 2016 00:00:00"), new Date("June 30, 2018 00:00:00")])
    			  .range([50, 550]);

	var yAxis = d3.scaleLinear()
    			  .domain([d3.max(arrayOfSight),0])
    			  .range([50, 550]);

	var xAxisLine = d3.axisBottom().scale(xAxis);
	var yAxisLine = d3.axisLeft().scale(yAxis);

	svg.append("g").attr("transform", "translate(50,0)")
  				.call(yAxisLine);

  	svg.append("g").attr("transform", "translate(0,550)")
  				.call(xAxisLine);

	var line = d3.line()
    .x(function(d, i) { return 50+(i*18);})
    .y(function(d) { return yAxis(d.sightings);})
    
    var lineChart = svg.append("path")
    					.attr("d", line(sightingsInYears))
    					.attr("stroke", "#999999")
    					.attr("stroke-width", 1)
    					.attr("fill", "none");

    var scatterPlot = svg.selectAll('circle')
  						  .data(sightingsInYears)
  						  .enter()
  						  .append('circle')
  						  .attr('cx', function(d,i){ return 50+(i*18); })
  						  .attr('cy', function(d,i){ return yAxis(d.sightings); })
  						  .attr('fill', '#999999')
  						  .attr('r', 5)
  						  .append("svg:title").text(function(d){
  						  	return d.Date + " - " + d.sightings + " sightings";
  						  });

}

// generic function to normalize the values based on min and max range of the array with the range specified (Reference : StackOverflow)
// val - value we are considering to normalize within the range specified
// range 1 is [min,max] of the array of values given
// range 2 is [0,13] for radius or [0,200] for color 
var normalize = function(val, range1, range2){
	return (( val - range1[ 0 ] ) * ( range2[ 1 ] - range2[ 0 ] ) / ( range1[ 1 ] - range1[ 0 ] ) + range2[ 0 ]);
};

var createBarChart = function(elem) {

	var svgWidth = 550;
	var svgHeight = 550;
	var barWidth = ((svgWidth-50)/ha1b.monthCounts.length);

	var normalizedByMonth = [];
  	for(var normIndex = 0; normIndex < ha1b.monthCounts.length; normIndex++){
  		normalizedByMonth[normIndex] = Math.floor(ha1b.monthCounts[normIndex]/ha1b.byMonth[normIndex]);
  	}; 

	var svg = d3.select('#'+ elem)
				.attr("width", svgWidth)
				.attr("height",svgHeight)
				.append('g');

	var xAxis = d3.scaleLinear()
  					.domain([0, normalizedByMonth.length])
  					.range([50,550]);

  	var xAxisLine = d3.axisBottom().scale(xAxis);

  	var yAxis = d3.scaleLinear()
  				  .domain([d3.max(normalizedByMonth), 0])
  				  .range([50,550]);

  	var yAxisLine = d3.axisLeft().scale(yAxis);
  	
  	svg.append("g").attr("transform", "translate(50,0)")
  				.call(yAxisLine);

  	svg.append("g").attr("transform", "translate(0,550)")
  				.call(xAxisLine);

	var barChart =  svg.selectAll("rect")
						.data(normalizedByMonth)
						.enter()
						.append("rect")
						.attr("y", function(d, i){
							return (yAxis(d)); })
						.attr("height", function(d, i){
							return (550 - yAxis(d)) })
						.attr("width", (barWidth- (0.1*barWidth)))
						.attr("transform", function(d,i){
							var translate = (barWidth) *i + 70 ;
							return "translate("+translate+")"})
						.attr("fill", "#999999")
						.append("svg:title")
          					.text(function(d, i) { return "Month "+ (i+1)+" : "+ Math.floor(d) +" sightings on average"; });

}; 


var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return ("#" + red + green + blue );
};

var mapAttributes = function(d, column, minBound, maxBound, value){
	if(column === 'calories'){
		var caloriesArray = [];
		for (var i=0; i<cereals.length;i++){
			caloriesArray[i] = cereals[i].calories;
		}
		
		return (normalize(d.calories,[d3.min(caloriesArray),d3.max(caloriesArray)],[minBound,maxBound]));
		
	}

	if(column === 'fat'){
		var fatArray = [];
	    for (var i=0; i<cereals.length;i++){
			fatArray[i] = cereals[i].fat;
		}
		
		return (normalize(d.fat,[d3.min(fatArray),d3.max(fatArray)],[minBound,maxBound]));
		
	}

	if(column === 'protein'){
		var proteinArray = [];
	    for (var i=0; i<cereals.length;i++){
			proteinArray[i] = cereals[i].protein;
		}
		
		return (normalize(d.protein,[d3.min(proteinArray),d3.max(proteinArray)],[minBound,maxBound]));
		
	}

	if(column === 'carbo'){
		var carboArray = [];
	    for (var i=0; i<cereals.length;i++){
			carboArray[i] = cereals[i].carbo;
		}
		return (normalize(d.carbo,[d3.min(carboArray),d3.max(carboArray)],[minBound,maxBound]));
		
	}
}


//scatter plot
var createScatter = function(elem, colX, colY, colColor, colSize) {

	var svg = d3.select('#' + elem);
	
	var maxVertArray = [], maxHorArray=[];
	
	for (var i=0; i<cereals.length;i++){
		maxVertArray[i] = cereals[i][colY];
	};

	for (var i=0; i<cereals.length;i++){
		maxHorArray[i] = cereals[i][colX];
	};

	var yAxis = d3.scaleLinear()
				  .domain([d3.max(maxVertArray),0])
				  .range([50,550]);

	var xAxis = d3.scaleLinear()
				  .domain([0, d3.max(maxHorArray)])
				  .range([50,550]);

	var xAxisLine = d3.axisBottom().scale(xAxis);

	var yAxisLine = d3.axisLeft().scale(yAxis);

	svg.append("g").attr("transform", "translate(0,550)")
  				.call(xAxisLine);

  	svg.append("g").attr("transform", "translate(50,0)")
  				.call(yAxisLine);

  	var scatterPlot = svg.selectAll('circle')
  						  .data(cereals)
  						  .enter()
  						  .append('circle')
  						  .attr('cx', function(d,i){ return xAxis(d[colX]);})
  						  .attr('cy', function(d,i){ return yAxis(d[colY]); })
  						  .attr('fill', function(d){
  						  	var color_normalized = (200 - (mapAttributes(d, colColor, 0, 200)));
  						  	//var color_val = d3.scaleLinear().domain([1,color_normalized]).range(["#C8C8FF","#0000FF"]).interpolate(d3.interpolateHcl); - not working
  						  	var color_val = fullColorHex(Math.floor(color_normalized),Math.floor(color_normalized),255);
  						  	return color_val;
  						  })
  						  .attr('r', function(d){
  						  	var size_normalized = mapAttributes(d, colSize,3,13);
  						  	return size_normalized;
  						  })
  						  .append("svg:title").text(function(d){
  						  	return d.name;
  						  });

};

//550 - ((normalize(d,[d3.min(normalizedByMonth),d3.max(normalizedByMonth)],[50,500]))));
//(normalize(d,[d3.min(normalizedByMonth),d3.max(normalizedByMonth)],[50,500])));
//(normalize(d[colX],[0,d3.max(maxHorArray)],[50,550]));
//(normalize(d[colY],[0,d3.max(maxVertArray)],[550,50]))


