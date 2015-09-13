'use strict';

describe('Controller: MainnavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('plipApiAdminApp'));

  var MainnavigationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainnavigationCtrl = $controller('MainnavigationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainnavigationCtrl.awesomeThings.length).toBe(3);
  });
});
