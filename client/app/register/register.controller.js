'use strict';

angular.module('newsfeedApp')
  .controller('RegisterCtrl', registerCtrl);

function registerCtrl($scope, $http, $state) {
  /*jshint validthis: true */
  var viewModel = this;


  /** Controller Variables **/

  /** Controller Functions **/
  viewModel.register = _register;


  /****** Implementation ******/

  function _register() {
    $state.go('posts');
  }

}