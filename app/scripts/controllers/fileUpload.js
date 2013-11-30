'use strict';

angular.module('jSonarApp')
  .controller('FileuploadCtrl', function ($scope, $http) {

    // Start file upload controller
    $scope.submit = function() {
      //make GET request to inputted URL
      $http.get($scope.sourceURL)
        //On successful call...
        .success(function(data) {
          //log response
          console.log('Submitted data:', data);
          // and run through the data...
          angular.forEach(data, function(value, index){
            // ...and if you find an object
            if (typeof value === 'object'){
              // log it
              console.log('found an object!', index, value);

              // ...then run through that object.
              angular.forEach(value, function(value, index){
                console.log('index',index);
                console.log('value',value);
                //If you find a deeper object..
                if (typeof value === 'object'){
                  //log it (again)
                  console.log('found a deeper object!', index, value);
                  //and run through it (again)
                  angular.forEach(value, function(value, index){
                    console.log('deeper index',index);
                    console.log('deeper value',value);
                  });
                }
              });
            }
          });
        })
        // if it returns an error
        .error(function(){
          // log error
          window.alert('There was an error! Check the console (cmd + shft + J');
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