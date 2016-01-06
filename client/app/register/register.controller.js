'use strict';

angular.module('newsfeedApp')
  .controller('RegisterCtrl', registerCtrl);

function registerCtrl($rootScope, $scope, $http, $state, loginManager) {
  /*jshint validthis: true */
  var viewModel = this;


  /** Controller Variables **/
  viewModel.username = '';
  viewModel.password = '';
  viewModel.registerError = false;

  /** Controller Functions **/
  viewModel.register = _register;


  /****** Implementation ******/

  function _register() {

    function _registerSuccess() {
      viewModel.registerError = false;
      $rootScope.$emit('login');
      $state.go('posts');

    }
    function _registerFailure() {
      viewModel.registerError = true;
    }

    loginManager.register(viewModel.username, viewModel.password).then(_registerSuccess, _registerFailure);
  }

}