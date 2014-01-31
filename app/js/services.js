'use strict';

/* Services */

var scrumdiddlyumptiousServices = angular.module('scrumdiddlyumptiousServices', ['ngResource']);

scrumdiddlyumptiousServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

scrumdiddlyumptiousServices.factory('Restaurant', ['$resource',
    function($resource){
        return $resource('restaurants/:restaurantId.json', {}, {
            query: {method:'GET', params:{restaurantId:'restaurants'}, isArray:true}
        });
    }]);

scrumdiddlyumptiousServices.factory('Order', ['$resource',
    function($resource){
        return $resource('http://10.16.164.64:5000/confirm_order/', {}, {
            query: {method:'GET'}
        });
    }]);

scrumdiddlyumptiousServices.factory('Charge', ['$resource',
    function($resource){
        return $resource('https://api.venmo.com/v1/payments', {}, {
            query: {method:'POST', params:{restaurantId:'restaurants'}, isArray:true}
        });
    }]);