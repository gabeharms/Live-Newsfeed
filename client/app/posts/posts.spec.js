'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('newsfeedApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var scope;
  var PostsController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    PostsController = $controller('PostsController', {
      $scope: scope
    });
  }));

  it('should attach a list of posts to the controller', function() {
    $httpBackend.flush();
    expect(PostsController.posts.length).toBe(4);
  });
});