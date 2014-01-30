'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('RestaurantListCtrl', ['$scope', 'Restaurant', 'Phone',
  function($scope, Restaurant, Phone) {
    $scope.phones = Phone.query();
    $scope.restaurants = Restaurant.query();
    $scope.orderProp = 'age';
    /* chaat img url is "img_url": "http://s3-media4.ak.yelpcdn.com/bphoto/ZDSYo2UFlNajA9RDA8gA4g/ms.jpg" */
  }]);

scrumdiddlyumptiousControllers.controller('RestaurantMenuCtrl', ['$scope', '$routeParams', 'Restaurant',
  function($scope, $routeParams, Restaurant, Phone) {
/*    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });*/

          $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});


/*    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }]);
