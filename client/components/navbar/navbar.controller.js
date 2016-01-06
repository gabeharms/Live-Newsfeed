'use strict';

angular.module('newsfeedApp')
  .controller('NavbarController', NavbarController);


function NavbarController($rootScope, $scope, loginManager) {
  var viewModel = this;

  /** Directive Variables **/
  viewModel.menu = [];
  viewModel.currentUser = '';
  viewModel.isCollapsed = true;

  /** Directive Functions **/
  viewModel.logout = _logout;


  _initController();

  /***** Implementation *****/

  function _initController() {
    viewModel.menu = [{
          'title': 'Posts',
          'state': 'posts'
        }, {
          'title': 'Register',
          'state': 'register'
        }, {
          'title': 'Login',
          'state': 'login'
        }];

    $rootScope.$on('login', function() {
      loginManager.getUser().then(function(user) {
        viewModel.currentUser = user.username;
        viewModel.menu = [{
          'title': 'Posts',
          'state': 'posts'
        }];

      });
    });

  }

  function _logout() {
    viewModel.currentUser = null;
    viewModel.menu = [{
          'title': 'Posts',
          'state': 'posts'
        }, {
          'title': 'Register',
          'state': 'register'
        }, {
          'title': 'Login',
          'state': 'login'
        }];
    loginManager.logout();
  }

}


