'use strict';

angular.module('newsfeedApp')
  .service('postsManager', postsManager);

function postsManager($q, $http, $state, loginManager) {
	/*jshint validthis: true */
	var service = this;

	
	/** Service Variables **/

	/** Service Functions **/
	service.createPost= _createPost;


	/****** Implementation ******/

	function _createPost(postBody) {
	  var deferred = $q.defer();

      $http({
      		url: '/api/posts',
            method: 'POST',
            data: {body: postBody },
            headers: {'X-Auth': loginManager.getToken()}
         })
		.success(function() {
			deferred.resolve();
		})
		.error(function(data, status) {
			deferred.reject(status);
		});

		return deferred.promise;
	}
	
}