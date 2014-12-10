angular.module('page1', []).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/page1', {
        templateUrl: 'page1.html',
        controller: 'Page1Controller'
    });
  }
}]);