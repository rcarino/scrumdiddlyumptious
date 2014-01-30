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
