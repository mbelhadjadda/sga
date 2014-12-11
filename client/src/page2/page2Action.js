angular.module('page2', ['ngRoute']).config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.when('/page2', {
            templateUrl: 'src/page2/page2.html',
            controller: 'Page2Controller'
        });
}]);