'use strict';

describe('Controller: FileuploadCtrl', function () {

  // load the controller's module
  beforeEach(module('jSonarApp'));

  var FileuploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileuploadCtrl = $controller('FileuploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
