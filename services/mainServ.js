angular.module("usamovesd3")
.service("mainServ", function($http) {

  this.getfitbitinfo = function(){
    return [{
      state: "WA",
      milesRanPerPersonPerYear: 300,
      obesityPercent: 27.3,
      educationRank: 12
    },{
      state: "MT",
      milesRanPerPersonPerYear: 500,
      obesityPercent: 26.4,
      educationRank: 6
    },{
      state: "ID",
      milesRanPerPersonPerYear: 150,
      obesityPercent: 28.9,
      educationRank: 32
    },{
      state: "ND",
      milesRanPerPersonPerYear: 30,
      obesityPercent: 32.2,
      educationRank: 48
    },{
      state: "MN",
      milesRanPerPersonPerYear: 500,
      obesityPercent: 27.6,
      educationRank: 30
    },{
      state: "ME",
      milesRanPerPersonPerYear: 700,
      obesityPercent: 28.2,
      educationRank: 13
    },{
      state: "MI",
      milesRanPerPersonPerYear: 700,
      obesityPercent: 30.7,
      educationRank: 10
    },{
      state: "WI",
      milesRanPerPersonPerYear: 600,
      obesityPercent: 31.2,
      educationRank: 5
    },{
      state: "OR",
      milesRanPerPersonPerYear: 300,
      obesityPercent: 27.9,
      educationRank: 4
    },{
      state: "SD",
      milesRanPerPersonPerYear: 50,
      obesityPercent: 29.8,
      educationRank: 31
    },{
      state: "NH",
      milesRanPerPersonPerYear: 212,
      obesityPercent: 27.4,
      educationRank: 24
    },{
      state: "VT",
      milesRanPerPersonPerYear: 112,
      obesityPercent: 24.8,
      educationRank: 36
    },{
      state: "NY",
      milesRanPerPersonPerYear: 1000,
      obesityPercent: 27.0,
      educationRank: 2
    },{
      state: "WY",
      milesRanPerPersonPerYear: 34,
      obesityPercent: 29.5,
      educationRank: 44
    },{
      state: "IA",
      milesRanPerPersonPerYear: 440,
      obesityPercent: 30.9,
      educationRank: 41
    },{
      state: "NE",
      milesRanPerPersonPerYear: 3000,
      obesityPercent: 30.2,
      educationRank: 1
    },{
      state: "MA",
      milesRanPerPersonPerYear: 600,
      obesityPercent: 23.3,
      educationRank: 7
    },{
      state: "IL",
      milesRanPerPersonPerYear: 77,
      obesityPercent: 29.3,
      educationRank: 47
    },{
      state: "PA",
      milesRanPerPersonPerYear: 300,
      obesityPercent: 30.2,
      educationRank: 32
    },{
      state: "CT",
      milesRanPerPersonPerYear: 32,
      obesityPercent: 26.3,
      educationRank: 33
    },{
      state: "RI",
      milesRanPerPersonPerYear: 32,
      obesityPercent: 27.0,
      educationRank: 33
    },{
      state: "CA",
      milesRanPerPersonPerYear: 32,
      obesityPercent: 24.7,
      educationRank: 33
    },{
      state: "UT",
      milesRanPerPersonPerYear: 5,
      obesityPercent: 25.7,
      educationRank: 50
    },{
      state: "NV",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 27.7,
      educationRank: 49
    },{
      state: "OH",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 32.6,
      educationRank: 49
    },{
      state: "IN",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 32.7,
      educationRank: 49
    },{
      state: "NJ",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 26.9,
      educationRank: 49
    },{
      state: "CO",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 21.3,
      educationRank: 49
    },{
      state: "WV",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 35.7,
      educationRank: 49
    },{
      state: "MO",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 30.2,
      educationRank: 49
    },{
      state: "KS",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 31.3,
      educationRank: 49
    },{
      state: "DE",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 30.7,
      educationRank: 49
    },{
      state: "MD",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.6,
      educationRank: 49
    },{
      state: "VA",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 28.5,
      educationRank: 49
    },{
      state: "KY",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 31.6,
      educationRank: 49
    },{
      state: "DC",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 21.7,
      educationRank: 49
    },{
      state: "AZ",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 28.9,
      educationRank: 49
    },{
      state: "OK",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 33.0,
      educationRank: 49
    },{
      state: "NM",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 28.4,
      educationRank: 49
    },{
      state: "TN",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 31.2,
      educationRank: 49
    },{
      state: "NC",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.7,
      educationRank: 49
    },{
      state: "TX",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 31.9,
      educationRank: 49
    },{
      state: "AR",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 35.9,
      educationRank: 49
    },{
      state: "SC",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.8,
      educationRank: 49
    },{
      state: "AL",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 33.5,
      educationRank: 49
    },{
      state: "GA",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 33.5,
      educationRank: 49
    },{
      state: "MS",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 35.5,
      educationRank: 49
    },{
      state: "LA",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 34.9,
      educationRank: 49
    },{
      state: "FL",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 26.2,
      educationRank: 49
    },{
      state: "HI",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 22.1,
      educationRank: 49
    },{
      state: "AK",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.7,
      educationRank: 49
    },{
      state: "Fake Data",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.7,
      educationRank: 49
    },{
      state: "Fake Data",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.7,
      educationRank: 49
    },{
      state: "Fake Data",
      milesRanPerPersonPerYear: 38,
      obesityPercent: 29.7,
      educationRank: 49
    }];
  }

});
