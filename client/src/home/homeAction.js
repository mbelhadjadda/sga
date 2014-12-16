angular.module('home', ['ngRoute']).config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/home/home.html',
            controller: 'HomeController'
        });
}]);