'use strict';

angular.module('jSonarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fileUploadPath = '/views/fileUpload.html';
  });
