'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('app')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true
    }
  }]);
