angular.module("usamovesd3")
.controller("fitnessCtrl", function($scope, mainServ) {

    var width = 960,
        height = 500,
        colors = ["rgba(87, 157, 54, 0.90)","rgba(249, 167, 7, 0.90)","rgba(187, 28, 152, 0.85)"];

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute");

    var countycolor = d3.scaleLinear()
      .domain([91.9,75.25,58.6])
      .range(colors);

    var statecolor = d3.scaleLinear()
      .domain([84.0,75.3,66.6])
      .range(colors);

    var projection = d3.geoAlbersUsa()
        .scale(1000)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath()
        .projection(projection);

    var svg = d3.select(".fitnessmap")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("mouseout", function(){
          tooltip.html("<h3></h3>")
        });

    $scope.state = function(){
        $scope.selection = "State";
        tooltip.html("<h3></h3>");
        d3.queue()
          .defer(d3.json, "./data/usa.json")
          .defer(d3.csv, "./data/LTPIA_PREV_ALL_STATES.csv")
          .await(ready);

        function ready(error, us, fitness) {
          if (error) throw error;

          svg.insert("path", ".graticule")
              .datum(topojson.feature(us, us.objects.land))
              .attr("class", "land")
              .attr("d", path)
              .attr("stroke-width","0px")
              .attr("fill", "none");


          svg.append("g")
              .attr("class", "states")
              .selectAll("path")
              .data(topojson.feature(us, us.objects.states).features)
              .enter()
              .append("path")
              .attr("d", path)
              .attr("fill", function(d,i){
                var total = 0;
                var count = 0;
                for(var j = 0; j < fitness.length; j++){
                  if(d.id == Math.floor(fitness[j].FIPSCodes/1000)){
                    total += (100 - parseInt(fitness[j].percent));
                    count++;
                  }
                }
                return statecolor(total/count);
              })
              .attr("stroke", "#fff")
              .attr("stroke-width", "0.5px")
              .on("mouseover",function(d,i){
                var total = 0;
                var count = 0;
                var state;
                for(var j = 0; j < fitness.length; j++){
                  if(d.id == Math.floor(fitness[j].FIPSCodes/1000)){
                    total += (100 - parseInt(fitness[j].percent));
                    state = fitness[j].State;
                    count++;
                  }
                }
                var percent = (total/count).toFixed(1);
                tooltip.html("<h3>" + state + " - " + percent + "%</h3>")
                    .attr("class","percentview")
                    .style("left", d3.event.pageX + "px")
                    .style("top", d3.event.pageY + "px");

                d3.select(this)
                    .style("opacity","0.75");
              })
              .on("mouseout",function(){
                d3.select(this)
                    .style("opacity","1");
              });

              d3.selectAll(".colorrange").remove();

              d3.select(".fitnessmap")
                  .selectAll("div")
                  .data([0,1,2,3,4,5,6,7])
                  .enter()
                  .append("div")
                  .text(function(d){
                    return (84.0 - (d*2.5)).toFixed(1) + "%";
                  })
                  .attr("class", "colorrange")
                  .style("color", "#000")
                  .style("position","absolute")
                  .style("background-color", function(d){
                    return statecolor(84.0 - (d*2.5));
                  })
                  .style("height", "24px")
                  .style("width", "50px")
                  .style("left", function(d){
                    return 850 + "px";
                  })
                  .style("top", function(d){
                    return (250 + 24*d) + "px";
                  })
                  .on("mouseover", function(){
                    d3.select(this)
                        .style("color", "#fff");
                  })
                  .on("mouseout",function(){
                    d3.select(this)
                        .style("color", "#000");
                  });

        }
    };


    $scope.county = function(){
        $scope.selection = "County";
        tooltip.html("<h3></h3>")
        d3.queue()
          .defer(d3.json, "./data/usa.json")
          .defer(d3.csv, "./data/OB_PREV_ALL_STATES.csv")
          .await(ready);

        function ready(error, us, fitness) {
          if (error) throw error;

          svg.insert("path", ".graticule")
              .datum(topojson.feature(us, us.objects.land))
              .attr("class", "land")
              .attr("d", path)
              .attr("stroke-width","0px")
              .attr("fill", "none");

              d3.selectAll(".colorrange").remove();

              d3.select(".fitnessmap")
                  .selectAll("div")
                  .data([0,1,2,3,4,5,6,7])
                  .enter()
                  .append("div")
                  .text(function(d){
                    return (91.9 - (d*4.75)).toFixed(1) + "%";
                  })
                  .attr("class", "colorrange")
                  .style("color", "#000")
                  .style("position","absolute")
                  .style("background-color", function(d){
                    return countycolor(91.9 - (d*4.75));
                  })
                  .style("height", "24px")
                  .style("width", "50px")
                  .style("left", function(d){
                    return 850 + "px";
                  })
                  .style("top", function(d){
                    return (250 + 24*d) + "px";
                  })
                  .on("mouseover", function(){
                    d3.select(this)
                        .style("color", "#fff");
                  })
                  .on("mouseout",function(){
                    d3.select(this)
                        .style("color", "#000");;
                  });

          svg.append("g")
              .attr("class", "counties")
              .selectAll("path")
              .data(topojson.feature(us, us.objects.counties).features)
              .enter()
              .append("path")
              .attr("d", path)
              .attr("fill",function(d){
                for(var i = 0; i < fitness.length;i++){
                  if(d.id == fitness[i].FIPSCodes){
                    return countycolor(100 - fitness[i].percent);
                  }
                }
              })
              .attr("stroke", "#fff")
              .attr("stroke-width","0.25px")
              .on("mouseover",function(d){
                for(var i = 0; i < fitness.length;i++){
                  if(d.id == fitness[i].FIPSCodes){
                    tooltip.html("<h3>" + fitness[i].County + " - " + (100 - fitness[i].percent) + "%</h3>")
                        .attr("class","percentview")
                        .style("left", d3.event.pageX + "px")
                        .style("top", d3.event.pageY + "px");
                  }
                }
                d3.select(this)
                    .style("opacity","0.75");
              })
              .on("mouseout",function(){
                d3.select(this)
                    .style("opacity","1");
              });

              svg.append("g")
                  .attr("class", "states")
                  .selectAll("path")
                  .data(topojson.feature(us, us.objects.states).features)
                  .enter()
                  .append("path")
                  .attr("d", path)
                  .attr("fill", "none")
                  .attr("stroke", "#8d8d8d")
                  .attr("stroke-width", "0.5px");

        }

    };
    $scope.county();
});
