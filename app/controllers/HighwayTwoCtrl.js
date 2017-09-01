"use strict";
console.log( "HighwayTwoCtrl.js" );

app.controller("HighwayTwoCtrl", function($scope, RouteFactory){

	RouteFactory.getHwyTwo()
	.then(function(hwy2){
		$scope.highwayName = hwy2.name;
		$scope.highwayDescription = hwy2.description;
		console.log( "hwy", $scope.highwayName, $scope.highwayDescription );
	});
});