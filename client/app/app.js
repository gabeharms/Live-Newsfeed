'use strict';

angular.module('newsfeedApp', [
  'newsfeedApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'registerCtrl'
      })

      .state('posts', {
        url: '/posts',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'postsCtrl'
      });

  });
