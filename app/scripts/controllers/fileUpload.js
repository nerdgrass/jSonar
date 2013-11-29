'use strict';

angular.module('jSonarApp')
  .controller('FileuploadCtrl', function ($scope, $http) {
    // Start file upload controller
    $scope.submit = function() {
      $http.jsonp($scope.sourceURL)
        .success(function(data) {
          //log API data
          console.log('Submitted data:', data);
        });
    };
  // End file upload controller
  });


// Old attempts
  // var FileuploadCtrl = [ '$scope', '$upload', function($scope, $upload) {
  //   $scope.onFileSelect = function($files) {
  //     //$files: an array of files selected, each file has name, size, and type.
  //     for (var i = 0; i < $files.length; i++) {
  //       var $file = $files[i];
  //       $scope.upload = $upload.upload({
  //         // url: 'server/upload/url', //upload.php script, node.js route, or servlet url
  //         // method: POST or PUT,
  //         // headers: {'headerKey': 'headerValue'}, withCredential: true,
  //         data: {myObj: $scope.myModelObj},
  //         file: $file,
  //          set file formData name for 'Content-Desposition' header. Default: 'file' 
  //         //fileFormDataName: myFile,
  //         /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
  //         //formDataAppender: function(formData, key, val){} 
  //       }).progress(function(evt) {
  //         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
  //       }).success(function(data, status, headers, config) {
  //         // file is uploaded successfully
  //         console.log(data);
  //       });
  //       //.error(...)
  //       //.then(success, error, progress); 
  //     }
  //   };
  // }];

  // $scope.setFile = function(element) {
  //     $scope.$apply(function($scope) {
  //       $scope.theFile = element.files[0];
  //       console.log($scope.theFile);
  //     });
  //   };