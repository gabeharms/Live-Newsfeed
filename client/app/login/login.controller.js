'use strict';

angular.module('newsfeedApp')
  .controller('LoginCtrl', loginCtrl);

function loginCtrl($scope, $http, $state) {
  /*jshint validthis: true */
  var viewModel = this;


  /** Controller Variables **/

  /** Controller Functions **/
  viewModel.login = _login;


  /****** Implementation ******/

  function _login() {
    $state.go('posts');
  }

}