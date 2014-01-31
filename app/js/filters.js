'use strict';

/* Filters */
angular.module('scrumdiddlyumptiousFilters', []).
    filter('checkmark',function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    }).
    filter('menu_url', function () {
        return function (input) {
            return input === 32318 ? "#/restaurants/32318" : '#/cupcake';
        };
    });


