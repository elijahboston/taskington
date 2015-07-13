'use strict';

angular.module('taskington', [])

.controller('TaskCtrl', ['$scope', function($scope) {
  $scope.tasks = [
    {text: 'This is a sample task.', estimate: 1, done: false}
  ];

  $scope.addTask = function() {
	var desc = $scope.formTaskDescription,
	est = $scope.formTaskEstimate || 1;

	if (!desc) { return false; }

	$scope.tasks.push({
		text: desc,
		estimate: est,
		done: false
	});
	$scope.formTaskDescription = '';
	$scope.formTaskEstimate = '';
  };

  $scope.deleteTask = function(index) {
	var task = $scope.tasks[index];
	$scope.tasks.splice(index, 1);
  };

  $scope.totalHours = function() {
	var hours = 0;
	for (var i=0; i < $scope.tasks.length; i++) {
	  hours = hours + $scope.tasks[i].estimate;
	};
	return hours;
  };
}]);