/**
 * Created by Naoki on 9/15/2015.
 */

var app = angular.module('nisoda.github.io', ['ui.router', 'Routes']);

app.controller('MainController', ['$scope', function($scope) {
    $scope.hello = "Welcome!";
}]);