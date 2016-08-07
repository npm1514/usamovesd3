angular.module("usamovesd3", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("landing",{
      url:"/landing",
      templateUrl: "templates/landing.html"
    })
    .state("obesity",{
      url:"/obesity",
      templateUrl: "templates/obesity.html",
      controller: "obesityCtrl"
    })
    .state("fitness",{
      url:"/fitness",
      templateUrl: "templates/fitness.html"
    })
    .state("education",{
      url:"/education",
      templateUrl: "templates/education.html"
    })
    .state("results",{
      url:"/results",
      templateUrl: "templates/results.html"
    });

    $urlRouterProvider.otherwise("/obesity");

});
