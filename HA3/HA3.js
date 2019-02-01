/*
For linked plots - https://gist.github.com/kbroman/ded6a0784706a109c3a5
For Brushes - http://bl.ocks.org/feyderm/6bdbc74236c27a843db633981ad22c1b 
For Brushes - https://bl.ocks.org/mbostock/4063663
*/
var ha3 = {
    svgNS: 'http://www.w3.org/2000/svg',
    summary: {},
    selected: [],
    hover: null,
    detailitem: null,
    scatter1: null,
    scatter2: null,
    detailview: null,
    brush: null
};

window.addEventListener('load', function () {
    ha3.scatter1 = createScatter('scatter1', 'sugars', 'carbo', 'shelf'); 
    ha3.scatter2 = createScatter('scatter2', 'potassium', 'sodium', 'shelf');
    ha3.detailview = createDetailView('details');
});


// You may remove the handleHover for one of your own, 
// for example if you wanted a more stringent implementation
// of MVC
var handleHover = function(item, over, clr) {

    if(over){
      var hoveredName = item.name;
        ha3.hover = hoveredName;
      } else {
        ha3.hover = null;
      }

      ha3.scatter1.update(item);
      ha3.scatter2.update(item);
}

var mouseClick = function(item){
        
        var circleClicked = item.name;
        var detail = d3.select('#details');
        if (circleClicked === ha3.detailitem){
            ha3.detailitem = null;
            ha3.detailData = null;
            ha3.scatter1.update(item);
            ha3.scatter2.update(item);
            d3.selectAll(".rowdetail").html('&nbsp;');
            return;
        }
        
        ha3.detailitem = circleClicked;
        
        ha3.scatter1.update(item);
        ha3.scatter2.update(item);

        var keys = Object.keys(item);
        var values = Object.values(item);
        detail.selectAll('div')
                .data(keys)
                .html((d,i) => {
                    return d + ": " + values[i];
                })
}


var createDetailView = function(elm) {
    
   var div = d3.select('#' + elm);
    var keys = Object.keys(cereals[0]);
    div.selectAll('div')
        .data(keys)
        .enter()
        .append('div')
        .attr('class', 'rowdetail')
        .html('&nbsp;');
}

var createScatter = function(elm, rowx, rowy, clr) {
    var svg = d3.select('#' + elm);
    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);    
    var maxVertArray = [], maxHorArray=[];
    
    for (var i=0; i<cereals.length;i++){
        maxVertArray[i] = cereals[i][rowy];
    };

    for (var i=0; i<cereals.length;i++){
        maxHorArray[i] = cereals[i][rowx];
    };


    var yAxis = d3.scaleLinear()
                  .domain([d3.max(maxVertArray),0])
                  .range([50,450]);

    var xAxis = d3.scaleLinear()
                  .domain([0, d3.max(maxHorArray)])
                  .range([50,450]);

    var xAxisLine = d3.axisBottom().scale(xAxis);

    var yAxisLine = d3.axisLeft().scale(yAxis);

    svg.append("g").attr("transform", "translate(0,450)")
                .call(xAxisLine);

    svg.append("g").attr("transform", "translate(50,0)")
                .call(yAxisLine);

    function brushmove() {      
            if (d3.event.selection != null) {
                var brush_tile = (d3.event.selection);
                ha3.selected = cereals.map(function(d,i) {
                  var x0 = brush_tile[0][0],
                      x1 = brush_tile[1][0],
                      y0 = brush_tile[0][1],
                      y1 = brush_tile[1][1];

                  var boolVal = (xAxis(d[rowx]) >= x0 && xAxis(d[rowx]) <= x1 && yAxis(d[rowy]) >= y0 && yAxis(d[rowy]) <= y1);
                  if (boolVal)
                      return d.name;
                });
            ha3.scatter1.update(ha3.selected);
            ha3.scatter2.update(ha3.selected);
        } 
    }

    function brushend(){
        setTimeout(function(){
          ha3.selected = [];
          ha3.scatter1.update(ha3.selected);
          ha3.scatter2.update(ha3.selected);
          return;
        }, 3000);
    }

    //create a brush
    ha3.brush = d3.brush().extent([[0,0],[500,500]])
                    .on("brush", brushmove)
                    .on("end", brushend); 

    var brush = svg.append('g')
                    .attr('class', 'brush')
                    .call(ha3.brush);

    function _update(elm){
      svg.selectAll('circle')
            .attr('fill', function(d,i) {
                if (ha3.detailitem == d.name)
                        return 'red';
                if (ha3.selected.indexOf(d.name) != -1 || d.name === ha3.hover){
                    return 'yellow';
                }
                return colorScale(d[clr]);
            })
            .attr('stroke',function(d,i) {
                if (ha3.selected.indexOf(d.name) != -1 || d.name === ha3.hover || d.name === ha3.detailitem)
                    return 'black'; 
                else 
                  return null;
            })
            .attr('r', function(d,i) {
                if (ha3.selected.indexOf(d.name) != -1 || d.name === ha3.hover || d.name === ha3.detailitem)
                    return 8;
                else
                  return 5;
            })
    }

     var scatterPlot = svg.selectAll('circle')
                          .data(cereals)
                          .enter()
                          .append('circle')
                          .attr('cx', function(d,i){ return xAxis(d[rowx]);})
                          .attr('cy', function(d,i){ return yAxis(d[rowy]); })
                          .attr('fill', function(d,i) { return colorScale(d[clr]); })
                          .attr('r', 5)
                          .on('click', function(d,i) {return mouseClick(d);})
                          .on("mouseover", function(d,i) { return handleHover(d, true, "yellow");})                  
                          .on("mouseout", function(d,i) {return handleHover(d, false, colorScale(d[clr]));})
                          .append("svg:title").text(function(d){
                                return d.name;
                            });

            return {
            	update: function(elm) {
            	    _update(elm);
            	}
            };
};





