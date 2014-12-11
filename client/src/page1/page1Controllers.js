angular.module('page1').controller('Page1Controller', ['$scope',
    function ($scope) {
        console.log("Page 1 !!!!!!!");
        $scope.hello = 'Hola page 1!';
}]);