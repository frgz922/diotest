var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "POST",
        url : "https://prueba-admision-web.herokuapp.com/session",
        data: {
            username: "synergy",
            password: "synergy123",
            type: "V"
        }
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data.cid;
        console.log(response.data)
        console.log($scope)
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});