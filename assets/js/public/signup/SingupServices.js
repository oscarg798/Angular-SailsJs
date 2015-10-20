angular.module('SignupModule').factory('SignupService', ['$http', function ($http) {
	

	return {

		createUser: function  (data) {
			// body...
			return  $http.post('/signup', data);
		}

	};
}])