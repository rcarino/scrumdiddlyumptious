'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('RestaurantListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
        $scope.restaurants = Restaurant.query(function()
        {
            /* Fill api results with images */
            for (var i = 0; i < $scope.restaurants.length; i++){
                var cur = $scope.restaurants[i];
                cur.img_url = 32318 === cur.id ? 'http://s3-media4.ak.yelpcdn.com/bphoto/ZDSYo2UFlNajA9RDA8gA4g/ms.jpg' :
                    'http://lorempixel.com/400/200/?' + Math.floor((Math.random()*10000)+1);
            }
        });
        $scope.orderProp = 'age';
    }]);

scrumdiddlyumptiousControllers.controller('RestaurantMenuCtrl', ['$scope', '$routeParams', 'Restaurant', 'Order',
    function ($scope, $routeParams, Restaurant, Order) {
        $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});

        $scope.confirmOrder = function () {
            $scope.order = Order.get();
        }
    }]);

scrumdiddlyumptiousControllers.controller('ChargeGroupCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
/*        $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});

        $scope.confirmOrder = function () {
            $scope.order = Order.get();
        }*/
        /*$scope.qs = $location.search()*/

        $scope.chargeVenmo = function (){
            var response = $http({
                method: 'GET',
                url: 'http://10.16.164.64:5000/charge_venmo/' + location.search.split('=')[1]
            });
            console.log(response);
        }
    }]);