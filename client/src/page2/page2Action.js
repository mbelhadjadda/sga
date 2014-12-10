angular.module('sga', []).config(['$routeProvider',
  function ($routeProvider) {
    alert("ziooooooo page 2");
    console.log("route provider : ", $routeProvider);
    $routeProvider.when('#/page2', {
        templateUrl: 'page2.html',
        controller: 'Page2Controller'
    });
  }
}]);