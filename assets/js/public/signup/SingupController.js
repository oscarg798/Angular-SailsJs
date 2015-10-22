angular.module('SignupModule').controller('SignupController', ['$scope', 'SignupService',

    function($scope, SignupService) {


        $scope.signupFormSubmit = function() {

            var data = {
                name: $scope.user.name,
                username: $scope.user.username,
                email: $scope.user.email,
                password: $scope.user.password
            };

            SignupService.createUser(data).success(function(chuck, status) {
                // body...
                alert('Exito ' + JSON.stringify(chuck));
                window.location = '/user';
            }).catch(function(err) {
                // body...
                alert('Error ' +JSON.stringify(err));
                console.log(JSON.stringify(err));
            }).finally(function() {
                // body...
                console.log('Intente Crear');
            });


        }
    }
]);