'use strict';

/* Controllers */

var scrumdiddlyumptiousControllers = angular.module('scrumdiddlyumptiousControllers', []);

scrumdiddlyumptiousControllers.controller('FindRestaurantsCtrl', ['$scope',
    function ($scope) {
        $scope.query = '235 2nd St, San Francisco, CA 94105';
    }]);

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


        var orderData = {};
        var prices = {};
        var subtotal = 0;
        var taxTotal = 0;
        var tipTotal = 0;
        var total = 0;

        var initOrderData = function(restaurantData) {
            for(var i = 0; i < restaurantData.menu.length; i++ ) {
                var category =  restaurantData.menu[i];
                for(var j = 0; j < category.children.length; j++) {
                    var dish = category.children[j];

                    orderData[dish.id] = 0;
                    prices[dish.id] = dish.price;
                }

                $scope.orderData = orderData;
            }
        };

        var calculateTax = function(value) {
            return (value * 0.0925).toFixed(2);
        };

        $scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId}, function(data) {
            initOrderData(data);
        });

        $scope.confirmOrder = function () {
            $scope.order = Order.get();
        };

        $scope.$on('UpdateTotal'), function() {
            var _subtotal = 0;
            for (var key in orderData) {
                if (orderData.hasOwnProperty(key)) {
                    _subtotal += prices[key] * orderData[key];
                }
            }

            subtotal = _subtotal.toFixed(2);
            return _subtotal.toFixed(2);

        };

        $scope.calculateSubtotal = function() {
            var _subtotal = 0;
            for (var key in orderData) {
                if (orderData.hasOwnProperty(key)) {
                    _subtotal += prices[key] * orderData[key];
                }
            }

            subtotal = _subtotal.toFixed(2);
            return _subtotal.toFixed(2);

        };

        $scope.calculateTax = function() {
            taxTotal = (0.0875 * subtotal).toFixed(2);
            return taxTotal;
        };

        $scope.calculateTip = function() {
            tipTotal = (0.17 * subtotal).toFixed(2);
            return tipTotal;
        }

        $scope.calculateTotal = function() {
            total = (parseFloat(subtotal) + parseFloat(tipTotal) + parseFloat(taxTotal)).toFixed(2);
            return total;
        }
    }]);

scrumdiddlyumptiousControllers.controller('ChargeGroupCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {

        $scope.chargeVenmo = function (){
            var response = $http({
                method: 'GET',
                url: 'http://10.16.164.64:5000/charge_venmo/' + location.search.split('=')[1]
            });
        }
    }]);