'use strict';

angular.module('newsfeedApp')
  .controller('PostsCtrl', postsCtrl);

function postsCtrl($scope, $rootScope, $http, $state, socket) {
  /*jshint validthis: true */
  var viewModel = this;


  /** Controller Variables **/
  viewModel.posts = null;
  viewModel.postBody = '';

  /** Controller Functions **/
  viewModel.addPost = _addPost;
  viewModel.deletePost = _deletePost;


  _initController();


  /******** Implementation *******/

  function _initController() {
    $http.get('/api/posts').then(response => {
      viewModel.posts = response.data;
      socket.syncUpdates('post', viewModel.posts);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('post');
    });
  }

  function _addPost() {
    if (viewModel.postBody) {
      $http.post('/api/posts', { username: 'Gabe Harms', body: viewModel.postBody });
      viewModel.postBody = '';
    }
  }

  function _deletePost(post) {
    viewModel.$http.delete('/api/posts/' + post._id);
  }
}

