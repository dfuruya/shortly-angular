angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(link) {
        console.log('Link successfully added: ', link.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  };
});
