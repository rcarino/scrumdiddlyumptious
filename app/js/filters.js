'use strict';

/* Filters */

angular.module('scrumdiddlyumptiousFilters', []).filter('checkmark',function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
}).filter('restaurant_thumb',function () {
        return function (input) {
            return input === 32318 ? 'http://s3-media4.ak.yelpcdn.com/bphoto/ZDSYo2UFlNajA9RDA8gA4g/ms.jpg' :
                'http://lorempixel.com/400/200/?' + Math.random();
        };
    }).filter('menu_url', function () {
        return function (input) {
            return input === 32318 ? "#/restaurants/32318" : '#/cupcake';
        };
    });


