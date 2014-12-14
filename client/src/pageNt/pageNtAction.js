angular.module('pageNt', ['ngRoute']).config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.when('/pageNt', {
            templateUrl: 'src/pageNt/pageNt.html',
            controller: 'PageNtController'
        });
}]);