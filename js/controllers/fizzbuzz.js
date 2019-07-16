app.controller('FizzbuzzController', ['$scope', function($scope) {
  
  $scope.result = [];

  for(dig = 1; dig <= 100; dig++)
  {
    if (dig % 15 === 0) $scope.result.push('FizzBuzz');
    else if (dig % 3 === 0) $scope.result.push('Fizz');
    else if (dig % 5 === 0) $scope.result.push('Buzz');
    else $scope.result.push(dig);  
  }

}]);
