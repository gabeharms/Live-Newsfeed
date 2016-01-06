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

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('newsfeedApp')
  .controller('NavbarController', NavbarController);
