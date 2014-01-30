'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('RestaurantListCtrl', ['$scope', 'Restaurant', 'Phone',
  function($scope, Restaurant, Phone) {
    $scope.phones = Phone.query();
    $scope.restaurants = Restaurant.query();
    $scope.orderProp = 'age';
  }]);

scrumdiddlyumptiousControllers.controller('RestaurantMenuCtrl', ['$scope', '$routeParams', 'Restaurant',
  function($scope, $routeParams, Restaurant, Phone) {
/*    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });*/

      console.log($routeParams)
      $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});

/*    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }]);
