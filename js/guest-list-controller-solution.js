function GuestListCtrl($scope) {
  $scope.list = [];

  $scope.newGuest = { a: 1};

  $scope.list.push({
    name: 'Andres',
    last: 'Dominguez',
    email: 'andresdom@google.com'
  });

  $scope.create = function() {
    $scope.list.push(angular.copy($scope.newGuest));
    $scope.newGuest = {};
  };

  $scope.remove = function(row) {
    $scope.list = _.without($scope.list, row);
  };
}