/*I have worked with Pratik Bhandari and Ripan Choudhary closely on the RT algorithm*/

var ha4 = {
    idx: 0,
    vseparation: 70,
    hseparation: 70,
    vpadding: 50,
    hpadding: 50,
    offsetCalc : [] // Based on Prof. Kate's clue which is to return the max value of the offset so I'm maintaining an array of offsets
}

window.addEventListener('load', function () {
    // Creates teh initial graph view with the first test graph
    var view = graphView('graphsvg', tests[0],
    ha4.vseparation, ha4.hseparation, ha4.vpadding, ha4.hpadding);
    
    // Adds a click event so that the graph changes when clicked
    var _svg = d3.select('#graphsvg');
    _svg.on('click', d => { view.update(tests[(++ha4.idx) % tests.length],
    ha4.vseparation, ha4.hseparation, ha4.vpadding, ha4.hpadding); });
});


// Visualizes a graph
// Inputs:
//   elm: The name of the svg element
//    gr: the initial tree to visualize
//    vs: the vertical separation for each depth in the tree
//    hs: the minimum horizontal separation between subtrees per level
//    voffset: the offset from the top of the SVG
//    hoffset: the offset from the bottom of the SVG
// Outputs:
//   An object giving access to the update function
var graphView = function(elm, gr, vs, hs, voffset, hoffset) {
    // Get the SVG
    var _svg = d3.select('#' + elm);

    // Offset whatever we will draw
    var _group = _svg.append('g')
    .attr('transform', 'translate(' + hoffset + ',' + voffset + ')');

    // Create separate groups for the links and nodes so that the links
    // will always appear behind the nodes in the sVG
    var _linkGroup = _group.append('g');
    var _nodeGroup = _group.append('g');

    // Updates the visualization to the given graph with the given
    // layout separation constraints.
    // Inputs:
    //   graph: the tree to be visualized
    //   vsep: the vertical separation for each depth in the tree
    //   hsep: the minimal horizonal separation between subtrees
    // Outputs:
    //   No return value but running the function will cause the SVG
    //   to update with the given graph.
    var _update = function(graph, vsep, hsep) {
    // Calculate the layout. After running this code, there is
    // an array of links in graph.links and each node in graph.nodes
    // has an x and y value.

    var graph = calculateGraphLayout(graph, vsep, hsep);

    var t = d3.transition().duration(500);

    // YOUR CODE HERE: General Update Pattern -- Links  

     /*For transitions
        https://bl.ocks.org/mbostock/5779682
        https://gist.github.com/Petrlds/4045315
        https://github.com/d3/d3-transition#modifying-elements
    */

    var lines = _linkGroup
            .selectAll(".link")
            .data(graph.links);

    //enter
    lines.enter().append("line")
            .attr("class", "link")
            .style("stroke", "black") 
            .transition(t).style("stroke-opacity", 0.2)
            .attr("x1", function (d, i) {
                return graph.nodes[d.source].x;
            })
            .attr("y1", function (d,i) {
                return graph.nodes[d.source].y;
            })
            .attr("x2", function (d,i) {
                return graph.nodes[d.target].x;
            })
            .attr("y2", function (d,i) {
                return graph.nodes[d.target].y;
            })
            .transition(t).style("stroke-opacity", 1);

    //update the link values based on newly calculated ones
    lines.attr("class","link").transition(t)
         .attr("x1", function (d, i) {
            return graph.nodes[d.source].x;
            })
         .attr("y1", function (d,i) {
            return graph.nodes[d.source].y;
            })
         .attr("x2", function (d,i) {
            return graph.nodes[d.target].x;
            })
         .attr("y2", function (d,i) {
            return graph.nodes[d.target].y;
            });
    
    //exit
    lines.exit().attr("class", "link").transition(t).style("stroke-opacity", 0).remove();
    
    // YOUR CODE HERE: General Update Pattern -- Nodes
   
    var node = _nodeGroup
            .selectAll(".node")
            .data(graph.nodes);

    //enter
    node.enter().append("circle")
            .attr("class", "node")
            .attr('cx' , function(d,i){return d.x;})
            .attr('cy', function(d,i){ return d.y;})
            .transition(t).attr("r",0)
            .transition(t).attr("r",8);

    node.append("svg:title").text(function(d,i){return d.id;}); // not working as expected for some reason

    //update the circle x and y based on newly calculated ones
    node.attr("class", "node")
         .transition(t)
         .attr("cx", function(d,i) { return d.x; })
         .attr("cy", function(d,i) { return d.y; })
         .attr("r", 8);
    /* node.select("svg:title").text(function(d,i){return d.id;}); - not working for some reason*/

    //exit 
    node.exit().attr("class","node").transition(t).attr("r",0).remove();
    

    }


    // Draw the initial graph
    _update(gr, vs, hs);

    return {
        update: function(graph, vsep, hsep) {
            return _update(graph, vsep, hsep);
        }
    }
}

// Calculates the Reingold Tilford Tidy Tree Layout for binary trees on
// the given graph. 
// Inputs:
//   graph: a graph object as described by the homework assignment
//   vsep: the vertical separation between tree levels
//   hsep: the horizontal minimum separation between left and right
//   subtrees at any given level
// Output:
//   An altered version of the input graph that now has:
//     * an array of links where each link is described by two node IDs
//     * x and y values for every given node
var calculateGraphLayout = function(graph, vsep, hsep) {
    graph.links = [];

    // The main Reingold Tilford Tidy Tree Layout for binary trees algorithm.
    // Inputs:
    //   node: a node object with id, left, and right
    //   depth: the current depth of the tree
    //
    // Output:
    //   No return value but at the end of the function, the subtree rooted at
    //   node has a valid local layout, its x and y values are set, its
    //   left and right contours are set, and its internal links have
    //   been added to graph.links
    var _RT = function(node, depth) {
    // YOUR CODE HERE

        // Post order traversal and updating the links object as we traverse
        /*https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript*/
        var sourceTargetObj = {};
        if(node.left != null) 
        { 
            _RT(graph.nodes[node.left], depth+1);  
            sourceTargetObj = {"source": node.id, "target" : (node.left)};    
            graph.links.push(sourceTargetObj);               
        }
        if(node.right != null)
        {
            _RT(graph.nodes[node.right], depth+1);
            sourceTargetObj = {"source": node.id, "target" : (node.right)};
            graph.links.push(sourceTargetObj); 
        } 

        graph.nodes[node.id].y = depth * ha4.vseparation;
        graph.nodes[node.id].x = 0;

        var offset = _findSubtreeOffset(node.left, node.right);
        
        _shiftSubtreeXValues(graph.nodes[node.right], offset);
        
        _setContours(node);

        ha4.offsetCalc = []; 
    // YOUR CODE HERE

        // if node has both left and right i.e parent node of two child elements then X = avg(x1+x2)
        if(node.left !== null && node.right !== null){
            graph.nodes[node.id].x = ((graph.nodes[node.left].x + graph.nodes[node.right].x)/2); 
        }

        // if parent has only left child then  x value of parent = x value of child
        if(node.left !== null && node.right === null){
            graph.nodes[node.id].x = graph.nodes[node.left].x;
        } 

        // if parent has only right child then  x value of parent = x value of child
        if(node.left === null && node.right !== null){
            graph.nodes[node.id].x = graph.nodes[node.right].x;
        }
    }

    // Determines the offset by which to move the right subtree of the given
    // node when performing the RT layout
    // Input:
    //   left: the ID of the root of the left subtree to compare
    //   right: the ID of the root of the right subtree to compare 
    //
    // Output:
    //   offset: the number of pixels by which to offset the right subtree of
    //   node from the left subtree of node
    //
    // Note: You will need to check at each level using the contours to make
    // sure nodes don't overlap.
    var _findSubtreeOffset = function(left, right) {
    // YOUR CODE HERE
        //var offset = 0;
        if (left !== null && right !== null) {
           // check at each level using the contours to make sure nodes don't overlap hence recurse through the function - Based on inputs given by Prof. Kate on Nov 1
            if (graph.nodes[left].right_contour && graph.nodes[right].left_contour) {
                _findSubtreeOffset(graph.nodes[left].right_contour, graph.nodes[right].left_contour);
            }
            // offset is the hseparation - (difference in x values) 
            // I have calculated this based on the mathematical computation done by hand
            ha4.offsetCalc.push(ha4.hseparation - (graph.nodes[right].x - graph.nodes[left].x)); 
            return d3.max(ha4.offsetCalc);
        } else { 
            return 0;
        }
    }

    // Shifts the subtree rooted at node by the given offset
    // Input:
    //   node: a node object
    //   offset: the amount by which to shift the x values of the subtree
    // Output:
    //   No return value, but after running this function, the subtree rooted
    //   at node will have been shifted by offset in the x direction.
    var _shiftSubtreeXValues = function(node, offset) {
    // YOUR CODE HERE
        if(node){

            // recursive through the function to shift the x value by offset value - clue given by Pratik
            if(node.left !== null) {
                _shiftSubtreeXValues(graph.nodes[node.left], offset);
            } 
            if(node.right!== null){
                _shiftSubtreeXValues(graph.nodes[node.right], offset);
            }   
            // add the offset to x
            graph.nodes[node.id].x = graph.nodes[node.id].x + offset;
        }        
    }

    // Set the left and right contour at the next level for the given node. In
    // turn, those nodes will have left and right contours as well. The whole
    // chain of a contour can be determined by following these left and right
    // contour pointers.
    // Input:
    //   node: a node object
    // Ouptut:
    //   No return value, but after running this function, the given node has
    //   its left_contour and right_contour set to the appropriate node IDs or
    //   null if none exist.
    //
    // Recall: The left contour is the left-most node in the local layout at
    // every depth. The right contour is the right-most node in the local 
    // layout at every depth.

    
    var _setContours = function(node) {

        //node.left_contour = 
        // YOUR CODE HERE
        // if both are null then contours are null
        if(node.right === null && node.left === null){
            node.left_contour = null;
            node.right_contour = null;
        }

        // if either of them is null then assign same value to both contours - Based on Prof. Kate's Clarification on Nov 1
        if(node.left !== null && node.right === null){
            node.left_contour = node.left;
            node.right_contour = node.left;
        }
        if(node.left === null && node.right !== null){
            node.left_contour = node.right;
            node.right_contour = node.right;
        }
        // if both have some values contours remain as it is
        if(node.left !== null && node.right !== null){
            node.left_contour = node.left;
            node.right_contour = node.right;
        }
        
        //node.right_contour = 
        // YOUR CODE HERE
    }


    // Run RT layout on root note at depth 0
    _RT(graph.nodes[0], 0);

    return graph;
}
