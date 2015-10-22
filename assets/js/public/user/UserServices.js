angular.module('UserModule').factory('UserService', ['$http', function ($http) {
	

	return {

		getUsers: function  () {
			// body...
			return  $http.post('/user/getAll');
		}

	};
}])