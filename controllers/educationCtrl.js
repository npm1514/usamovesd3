angular.module("usamovesd3")
.controller("educationCtrl", function($scope, mainServ) {
  d3.selectAll(".percentview").remove();
  $scope.selection = "County";
});
