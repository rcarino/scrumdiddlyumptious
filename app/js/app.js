'use strict';

/* App Module */

var scrumdiddlyumptiousApp = angular.module('scrumdiddlyumptiousApp', [
  'ngRoute',
  'scrumdiddlyumptiousAnimations',

  'scrumdiddlyumptiousControllers',
  'scrumdiddlyumptiousFilters',
  'scrumdiddlyumptiousServices'
]);

scrumdiddlyumptiousApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/restaurants', {
        templateUrl: 'partials/restaurant-list.html',
        controller: 'RestaurantListCtrl'
      }).
      when('/restaurants/:restaurantId', {
        templateUrl: 'partials/restaurant-menu.html',
        controller: 'RestaurantMenuCtrl'
      }).
        when('/about', {
            templateUrl: 'partials/about.html'
        }).
        when('/cupcake', {
            templateUrl: 'partials/cupcake.html'
        }).
      otherwise({
        redirectTo: '/restaurants'
      });
  }]);
