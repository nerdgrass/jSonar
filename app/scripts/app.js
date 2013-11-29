'use strict';

angular.module('jSonarApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fileUpload', {
        templateUrl: 'views/fileUpload.html',
        controller: 'FileuploadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
