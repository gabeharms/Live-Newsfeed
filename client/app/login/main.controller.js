'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.posts = [];

    $http.get('/api/posts').then(response => {
      this.posts = response.data;
      socket.syncUpdates('post', this.posts);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('post');
    });
  }

  addPost() {
    if (this.postBody) {
      this.$http.post('/api/posts', { username: 'Gabe Harms', body: this.postBody });
      this.postBody = '';
    }
  }

  deletePost(post) {
    this.$http.delete('/api/posts/' + post._id);
  }
}

angular.module('newsfeedApp')
  .controller('MainController', MainController);

})();
