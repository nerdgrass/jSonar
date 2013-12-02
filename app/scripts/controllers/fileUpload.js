'use strict';

angular.module('jSonarApp')
  .controller('FileuploadCtrl', function ($scope, $http) {
    // Start file upload controller
    $scope.submit = function() {

      $scope.columns = [];
      $scope.row = [];
      $scope.rows = [];
      $scope.cells = [];
      $scope.cell = [];

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

                //If you find a deeper object..
                if (typeof value === 'object'){
                  //log it (again)
                  console.log('found a deeper object!', index, value);
                  //and run through it (again)
                  angular.forEach(value, function(value, index){
                    // to push each key to columns array
                    $scope.columns.push(index);
                    //and make sure columns array only has unique strings
                    $scope.columns = jQuery.unique( $scope.columns );

                    //then push the cell data to a cell
                    var cellValue = value;
                    console.log('cellValue: ',cellValue);
                    var cell = {
                      'cell': cellValue
                    };
                    console.log('cell: ',cell);
                    $scope.row.push(cell);
                    // jQuery.extend($scope.row, cell,{} );
                    console.log('Cell added to Row: ',$scope.row);

                    // console.log('Ran through deeper object');
                    // console.log('Value: ', value);

                  });

                }else {
                  //Push each value to columns array
                  $scope.columns.push(index);
                  //and make sure columns array only has unique strings
                  $scope.columns = jQuery.unique( $scope.columns );
                }
                //log what's in the row
                console.log('Row :', $scope.row);
                //push it to the rows array as an object
                $scope.rows.push({
                  'Row': $scope.row
                });
                //clear the variable
                $scope.row = [];
                });

            }

          });
        console.log('Rows :', $scope.rows);
        })
        // if it returns an error
        .error(function(){
          // log error
          window.alert('There was an error! Check the console (cmd + shft + J');
        });
    };
    // End file upload controller
  });

// $scope.row.push(value);
// console.log('value pushed to row:',$scope.row);
// $scope.rows.push({
//   'row':$scope.row
// });

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