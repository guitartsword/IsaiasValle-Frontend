angular.module('AngularScaffold.Services').factory('RegisterController', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://isaias-valle-backend.herokuapp.com/';
		return {
				GetStudents: function(){
					return $http.get(baseUrl + "v1/students");
				},
				PostStudents: function(payload){
					return $http.post(baseUrl + "v1/student", payload);
				}
	    };
}]);
