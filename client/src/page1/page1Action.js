angular.module('sga', ['ngRoute']).config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.when('/page1', {
            templateUrl: 'src/page1/page1.html',
            controller: 'Page1Controller'
        });
}]);