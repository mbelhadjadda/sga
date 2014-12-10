angular.module('page2', []).controller('Page2Controller', ['$scope',
    function ($scope) {
        console.log("Page 2 !!!!!!!");
        $scope.hello = 'Hola page 2!';
}]);