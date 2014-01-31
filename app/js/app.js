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
    function ($routeProvider) {
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
            when('/find-restaurants', {
                templateUrl: 'partials/find-restaurants.html',
                controller: 'FindRestaurantsCtrl'
            }).
            when('/submit-order', {
                templateUrl: 'partials/submit-order.html'
            }).
            when('/share-order/:restaurantId/:orderId', {
                templateUrl: 'partials/share-order.html',
                controller: 'RestaurantMenuCtrl'
            }).
            when('/submit-individual-order', {
                templateUrl: 'partials/submit-individual-order.html'
            }).
            when('/charge/:userId', {
                templateUrl: 'partials/charge.html',
                controller: 'ChargeGroupCtrl'
            }).
            when('/charge-success/:userId', {
                templateUrl: 'partials/charge-success.html'
            }).
            otherwise({
                redirectTo: '/find-restaurants'
            });
    }]);
