angular.module('SignupModule.controllers', []).controller('SignupController', ['$scope', '$http',
    function($scope, $http) {
        $scope.user = {

        }

        $scope.signupFormSubmit = function() {
            
            $http.post('/signup', {
                name: $scope.user.name,
                username: $scope.user.username,
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function onSuccess() {
                // body...
                window.location = '/user';
            }).catch(function onError(sailsResponse) {
                // body...
                console.log(sailsResponse);
            }).finally(function anyWay() {
               console.log('Intente Registrar')
            });

        }
    }
]);