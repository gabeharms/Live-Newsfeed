'use strict';

angular.module('webappApp')
  .service('loginManager', loginManager);

function loginManager($q, $http) {
	/*jshint validthis: true */
	var service = this;

	
	/** Service Variables **/
	service.token = '';

	/** Service Functions **/
	service.login = _login;
	service.getUser = _getUser;


	/****** Implementation ******/

	function _getUser() {
		var deferred = $q.defer();

		$http.get('api/user')
			.success(function(username) {
				deferred.resolve(username);
			})
			.error(function(data, status) {
				deferred.reject(status);
			});

		return deferred.promise;
	}

	function _login(username, password) {
		var deferred = $q.defer();

		$http.post('api/session', {username: username, password: password})
			.success(function(token) {
				service.token = token;
				deferred.resolve(token);
			})
			.error(function(data, status) {
				deferred.reject(status);
			});

		return deferred.promise;
	}
	
}