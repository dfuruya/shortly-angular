angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // get all links, then save them to the 'data' object
  Links.getAll()
    .then(function(links) {
      $scope.data.links = links;
    })
    .catch(function(err) {
      console.error(err);
    });
});
