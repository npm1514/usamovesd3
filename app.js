angular.module("usamovesd3", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("landing",{
      url:"/landing",
      templateUrl: "templates/landing.html",
      controller: "mainCtrl"
    })
    .state("obesity",{
      url:"/obesity",
      templateUrl: "templates/obesity.html",
      controller: "obesityCtrl"
    })
    .state("fitness",{
      url:"/fitness",
      templateUrl: "templates/fitness.html",
      controller: "fitnessCtrl"
    })
    .state("education",{
      url:"/education",
      templateUrl: "templates/education.html",
      controller: "educationCtrl"
    })
    .state("results",{
      url:"/results",
      templateUrl: "templates/results.html",
      controller: "resultsCtrl"
    });

    $urlRouterProvider.otherwise("/obesity");

});
