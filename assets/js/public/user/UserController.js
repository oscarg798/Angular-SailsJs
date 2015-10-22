angular.module('UserModule').controller('UserController', ['$scope','UserService'
	, function ($scope, UserService) {

		UserService.getUsers().success(function  (data) {
			// body...
			alert(JSON.stringify(data));
			$scope.users= data;

		}).catch(function  (err) {
			// body...
			alert(JSON.stringify(err));
		});
	
}]);