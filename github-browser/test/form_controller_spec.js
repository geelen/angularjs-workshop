'use strict';

describe('Controller: FormController', function () {

  // load the controller's module
  beforeEach(module('GithubBrowser'));

  var FormController, scope, LocalStorage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.me = {};
    LocalStorage = jasmine.createSpyObj('LocalStorage', ['getItem', 'setItem']);
  }));

  describe("With empty LocalStorage", function () {
    beforeEach(inject(function ($controller) {
      FormController = $controller('FormController', {
        $scope: scope,
        LocalStorage: LocalStorage
      });
    }));

    it('should not have a name by default', function () {
      expect(scope.me.name).toBeFalsy();
    });

    it('should allow resetting the name', function () {
      scope.me.name = "Testy McTest";
      scope.reset();
      expect(scope.me.name).toBeFalsy();
    });

    it('should use localstorage to set the first name', function () {
      scope.me.name = "Testy McTest";
      scope.$apply();
      expect(LocalStorage.setItem).toHaveBeenCalledWith('github-browser__me.name', "Testy McTest");
    });

    describe("With a value in LocalStorage", function () {
      beforeEach(inject(function ($controller) {
        LocalStorage.getItem.andReturn("Testy McTest")
        FormController = $controller('FormController', {
          $scope: scope,
          LocalStorage: LocalStorage
        });
      }));

      it('should use localstorage to get the first name', function () {
        expect(scope.me.name).toBe("Testy McTest");
      });
    });
  });
});
