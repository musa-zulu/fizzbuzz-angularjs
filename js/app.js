var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).   
  when('/fizzbuzz', {
    templateUrl: 'views/fizzbuzz.html',
    controller: 'FizzbuzzController'
  }).
  when('/numbertoword', {
    templateUrl: 'views/numbertoword.html',
    controller: 'NumberToWordController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
