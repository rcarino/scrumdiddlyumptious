'use strict';

/* Filters */
angular.module('scrumdiddlyumptiousFilters', []).filter('checkmark',function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
}).filter('restaurant_thumb',function () {
        return function (input) {
            /*console.log(Math.floor((Math.random()*10)+1))*/
            return input === 32318 ? 'http://s3-media4.ak.yelpcdn.com/bphoto/ZDSYo2UFlNajA9RDA8gA4g/ms.jpg' : '';
                /*'http://lorempixel.com/400/200/?' + Math.floor((Math.random()*10000)+1);*/
        };
    }).filter('menu_url', function () {
        return function (input) {
            return input === 32318 ? "#/restaurants/32318" : '#/cupcake';
        };
    });


