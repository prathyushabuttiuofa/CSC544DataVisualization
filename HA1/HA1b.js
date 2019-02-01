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
    createScatter1('scatter1','sugars','proteins', 'calories', 'fat');
    createScatter2('scatter2','sugars','fibre', 'carbo', 'carbo');
    createScatter3('scatter3','carbo','calories', 'fat', 'protein');

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

// creation of line chart
var createLineChart = function(elem) {
	var _svg = document.getElementById(elem);
	// _makeCircle - circles are placed on the plot given
	var _makeCircle = function(x, y, color, text) {

	var _circle = document.createElementNS(ha1b.svgNS, "circle");
	var _title = document.createElementNS(ha1b.svgNS,"title");
		_circle.setAttributeNS(null, "cx", x);
		_circle.setAttributeNS(null, "cy", y);
		_circle.setAttributeNS(null, "r", 5); // radius is fixed to 5 as per the requirement
		_circle.setAttributeNS(null, "class", color);	
		_title.textContent = text;
		_svg.appendChild(_circle);
		_circle.appendChild(_title);
    }

    // _makePolylines - lines attaching circles
    var _makePolylines = function(points, fill, stroke){

		var _poly = document.createElementNS(ha1b.svgNS, "polyline");
        _poly.setAttributeNS(null, 'points', points);
        _poly.setAttributeNS(null, 'fill', fill);
        _poly.setAttributeNS(null, 'stroke',stroke);
		_svg.appendChild(_poly);
	}

	// sightingsInYears - this below variable concats three arrays and holds the entire data for three years month wise
	var sightingsInYears = ha1b.sightingsByMonth2016.concat(ha1b.sightingsByMonth2017,ha1b.sightingsByMonth2018);
	var polyArr = [];	
	for(var _circleIndex=0; _circleIndex < sightingsInYears.length ; _circleIndex++){
		spliceFunction(sightingsInYears); // removes any values with 0 sightings
		// make a circle for each month in each year
		// considering 21.5*_circleIndex on x-axis to maintain the distance between the points
		// considering (600-(sightingsInYears[_circleIndex].sightings*20)) on y-axis as each sighting is equivalent to 20px and subtracting it from 600 as Y-axis should start from 0 
		_makeCircle( (21.5*_circleIndex), (600-(sightingsInYears[_circleIndex].sightings*20)),"gray",sightingsInYears[_circleIndex].Date);
		polyArr[_circleIndex] = ([(21.5*_circleIndex), (600-(sightingsInYears[_circleIndex].sightings*20))]);
	}
	_makePolylines(polyArr, 'none', '#999999');

};


var createBarChart = function(elem) {
	var _svg = document.getElementById(elem); // Get the particular SVG we want

	//_makeRectangle - draws bar diagram for each month
	var _makeRectangle = function(x,y,height,width, text){

		var _rect = document.createElementNS(ha1b.svgNS, "rect");
		var _title = document.createElementNS(ha1b.svgNS,"title");
		_rect.setAttributeNS(null,'class','bar');
        _rect.setAttributeNS(null, 'x', x);
        _rect.setAttributeNS(null, 'y', y);
        _rect.setAttributeNS(null, 'height', height);
        _rect.setAttributeNS(null, 'width', width);
        _rect.setAttributeNS(null, 'fill', '#999999');
        _title.textContent = text;
        _svg.appendChild(_rect);
        _rect.appendChild(_title);
	}


	for(var _barIndex=0; _barIndex < ha1b.monthCounts.length ; _barIndex++){
		// 50*_barIndex on x-axis - to maintain the width of 50
		//(600 - (ha1b.monthCounts[_barIndex]/ha1b.byMonth[_barIndex])*20 - normalizing the total sightings and multiplying by factor of 20 as each sighting is 20px
		//46 - width of bar as the margin should be 2px
		_makeRectangle( (50*_barIndex)+2, (600 - (ha1b.monthCounts[_barIndex]/ha1b.byMonth[_barIndex])*20), (ha1b.monthCounts[_barIndex]/ha1b.byMonth[_barIndex])*20 , 46, _barIndex+1);
	}
	
};

// generic function to normalize the values based on min and max range of the array with the range specified 
// val - value we are considering to normalize within the range specified
// range 1 is [min,max] of the array of values given
// range 2 is [0,13] for radius or [0,200] for color 
var normalize = function(val, range1, range2){
	return (( val - range1[ 0 ] ) * ( range2[ 1 ] - range2[ 0 ] ) / ( range1[ 1 ] - range1[ 0 ] ) + range2[ 0 ]);
}

//scatter plot
var createScatter1 = function(elem, colX, colY, colColor, colSize) {
	var _svg = document.getElementById(elem);

	// to draw circle
	var _makeCircle = function(x, y, radius, color, text) {
		var _circle1 = document.createElementNS(ha1b.svgNS, "circle");
		var _title = document.createElementNS(ha1b.svgNS,"title");
		_circle1.setAttributeNS(null, "cx", x);
		_circle1.setAttributeNS(null, "cy", y);
		_circle1.setAttributeNS(null, "r", radius);
		_circle1.setAttributeNS(null, "fill", "rgb("+color+","+color+",255)");
		_title.textContent = text;
		_svg.appendChild(_circle1);
		_circle1.appendChild(_title);
    }

    //to collect all the values for fat  - radius normalization
    var fatArray = [];
    for (var i=0; i<cereals.length;i++){
		fatArray[i] = cereals[i].fat;
	}

	// to collect all the values for calories - color normalization
	var colorArray = [];
    for (var i=0; i<cereals.length;i++){
		colorArray[i] = cereals[i].calories;
	}
	
	for(var _scatterIndex=0; _scatterIndex < cereals.length; _scatterIndex++){
		var sizeNorm = normalize(cereals[_scatterIndex].fat,[Math.min.apply(null,fatArray),Math.max.apply(null,fatArray)],[3,13]);
    	var colorNorm = normalize(cereals[_scatterIndex].calories,[Math.min.apply(null,colorArray),Math.max.apply(null,colorArray)],[0,200]);
    	// x-axis -  50 is added to maintain the margin 50
    	// y-axis - the value is subtracted from 550 so that we are leaving a margin of 50 
    	// 200-colorNorm - so that the value with higher value is the darkest as per the specification
    	_makeCircle(50+cereals[_scatterIndex].sugars*20, 550-cereals[_scatterIndex].protein*30, sizeNorm, 200-colorNorm, cereals[_scatterIndex].name);
    }
};

var createScatter2 = function(elem, colX, colY, colColor, colSize) {
	var _svg = document.getElementById(elem);

	var _makeCircle = function(x, y, radius, color, text) {
		var _circle1 = document.createElementNS(ha1b.svgNS, "circle");
		var _title = document.createElementNS(ha1b.svgNS,"title");
		_circle1.setAttributeNS(null, "cx", x);
		_circle1.setAttributeNS(null, "cy", y);
		_circle1.setAttributeNS(null, "r", radius);
		_circle1.setAttributeNS(null, "fill", "rgb("+color+","+color+",255)");
		_title.textContent = text;
		_svg.appendChild(_circle1);
		_circle1.appendChild(_title);
    }
    var carboArray = [];
    for (var i=0; i<cereals.length;i++){
		carboArray[i] = cereals[i].carbo;
	}

	for(var _scatterIndex=0; _scatterIndex < cereals.length; _scatterIndex++){
		var carbosizeNorm = normalize(cereals[_scatterIndex].carbo,[Math.min.apply(null,carboArray),Math.max.apply(null,carboArray)],[3,13]);
    	var carboColorNorm = normalize(cereals[_scatterIndex].carbo,[Math.min.apply(null,carboArray),Math.max.apply(null,carboArray)],[0,200]);
    	_makeCircle(50+cereals[_scatterIndex].sugars*20, 550-cereals[_scatterIndex].fibre*10, carbosizeNorm, 200-carboColorNorm,cereals[_scatterIndex].name);
    }
};

var createScatter3 = function(elem, colX, colY, colColor, colSize) {
	var _svg = document.getElementById(elem);

	var _makeCircle = function(x, y, radius, color, text) {
		var _circle1 = document.createElementNS(ha1b.svgNS, "circle");
		var _title = document.createElementNS(ha1b.svgNS,"title");
		_circle1.setAttributeNS(null, "cx", x);
		_circle1.setAttributeNS(null, "cy", y);
		_circle1.setAttributeNS(null, "r", radius);
		_circle1.setAttributeNS(null, "fill", "rgb("+color+","+color+",255)");
		_title.textContent = text;
		_svg.appendChild(_circle1);
		_circle1.appendChild(_title);
    }
    var fatArray = [];
    for (var i=0; i<cereals.length;i++){
		fatArray[i] = cereals[i].fat;
	}

	var proteinArray = [];
    for (var i=0; i<cereals.length;i++){
		proteinArray[i] = cereals[i].protein;
	}

	for(var _scatterIndex=0; _scatterIndex < cereals.length; _scatterIndex++){
    	var colorNorm = normalize(cereals[_scatterIndex].fat,[Math.min.apply(null,fatArray),Math.max.apply(null,fatArray)],[0,200]);
    	var sizeNorm = normalize(cereals[_scatterIndex].protein,[Math.min.apply(null,proteinArray),Math.max.apply(null,proteinArray)],[3,13]);
    	_makeCircle(50+cereals[_scatterIndex].carbo*5, 550-cereals[_scatterIndex].calories, sizeNorm, 200-colorNorm, cereals[_scatterIndex].name );
    }
};


