'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('RestaurantListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
        $scope.restaurants = Restaurant.query();
        $scope.orderProp = 'age';
    }]);

scrumdiddlyumptiousControllers.controller('RestaurantMenuCtrl', ['$scope', '$routeParams', 'Restaurant', 'Order',
    function ($scope, $routeParams, Restaurant, Order) {
        /*    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
         $scope.mainImageUrl = phone.images[0];
         });*/

        $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});

        console.log(Order.get())

        $scope.confirmOrder = function () {
            $scope.order = Order.get();
            console.log($scope.order);
        }


        /*    $scope.setImage = function(imageUrl) {
         $scope.mainImageUrl = imageUrl;
         }*/
    }]);
