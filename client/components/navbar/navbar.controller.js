'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Posts',
    'state': 'posts'
  }, {
    'title': 'Register',
    'state': 'register'
  }, {
    'title': 'Login',
    'state': 'login'
  }];

  currentUser = '';

  isCollapsed = true;
  //end-non-standard

  constructor($rootScope, $scope, loginManager) {
    $rootScope.$on('login', function() {
      loginManager.getUser().then(function(user) {
        $scope.currentUser = user.username;
      });
    });
  }
}

angular.module('newsfeedApp')
  .controller('NavbarController', NavbarController);
