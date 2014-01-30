'use strict';

/* Filters */

angular.module('scrumdiddlyumptiousFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
