'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('RestaurantListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
        $scope.restaurants = Restaurant.query();
/*        window.restaurants = $scope.restaurants;
        for (var i = 0; i < $scope.restaurants.length; i++){
            var cur = $scope.restaurants[i];
            cur.img_url = 32318 === cur.img_url ? 'http://s3-media4.ak.yelpcdn.com/bphoto/ZDSYo2UFlNajA9RDA8gA4g/ms.jpg' :
                'http://lorempixel.com/400/200/?' + Math.floor((Math.random()*10000)+1);
        }*/
        $scope.orderProp = 'age';
    }]);

scrumdiddlyumptiousControllers.controller('RestaurantMenuCtrl', ['$scope', '$routeParams', 'Restaurant', 'Order',
    function ($scope, $routeParams, Restaurant, Order) {
        /*    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
         $scope.mainImageUrl = phone.images[0];
         });*/

        $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});

        $scope.confirmOrder = function () {
            $scope.order = Order.get();
        }


        /*    $scope.setImage = function(imageUrl) {
         $scope.mainImageUrl = imageUrl;
         }*/
    }]);
