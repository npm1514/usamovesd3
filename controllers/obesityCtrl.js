angular.module("usamovesd3")
.controller("obesityCtrl", function($scope, mainServ) {

  $scope.getfitbitinfo = function(){
    $scope.data = mainServ.getfitbitinfo();
  };
  $scope.getfitbitinfo();


  var width = 960,
      height = 500;

  var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute");

  var color = d3.scaleLinear()
    .domain([20,25,30,36])
    .range(["rgb(132, 175, 85)","rgb(147, 207, 139)","rgba(249, 47, 77, 0.75)","rgb(240, 16, 40)"]);


  var projection = d3.geoAlbersUsa()
      .scale(1000)
      .translate([width / 2, height / 2]);

  var path = d3.geoPath()
      .projection(projection);

  var svg = d3.select(".map").append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("./data/usa.json", function(error, us) {
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
          console.log($scope.data[i]);
          return color($scope.data[i].obesityPercent);
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", "0.5px")
        .on("mouseover",function(d,i){
          tooltip.html("<h3>" + $scope.data[i].obesityPercent + "%</h3>")
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

        d3.select(".map")
            .selectAll("div")
            .data([0,1,2,3,4,5,6,7])
            .enter()
            .append("div")
            .text(function(d){
              return ((d*2)+20) + "%";
            })
            .attr("class", "colorrange")
            .style("color", "rgba(77, 77, 77, 0.65)")
            .style("position","absolute")
            .style("background-color", function(d){
              return color((d*2) + 20)
            })
            .style("height", "24px")
            .style("width", "max-content")
            .style("left", function(d){
              return 1075 + "px";
            })
            .style("top", function(d){
              return (400 + 24*d) + "px";
            })
            .on("mouseover", function(){
              d3.select(this)
                  .style("color", "#000");
            })
            .on("mouseout",function(){
              d3.select(this)
                  .style("color", "rgba(77, 77, 77, 0.65)");
            });


    // svg.append("g")
    //     .attr("class", "counties")
    //     .selectAll("path")
    //     .data(topojson.feature(us, us.objects.counties).features)
    //     .enter()
    //     .append("path")
    //     .attr("d", path)
    //     .attr("fill", "none")
    //     .attr("stroke", "#fff")
    //     .attr("stroke-width","0.25px");




  });

  // d3.select(self.frameElement).style("height", height + "px");
});
