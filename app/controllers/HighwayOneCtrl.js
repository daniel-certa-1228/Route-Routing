"use strict";
console.log( "HighwayOneCtrl.js" );

app.controller("HighwayOneCtrl", function($scope, RouteFactory) {

	RouteFactory.getHwyOne()
	.then(function(hwy1){
		$scope.highwayName = hwy1.name;
		$scope.highwayDescription = hwy1.description;
		console.log( "hwy", $scope.highwayName, $scope.highwayDescription );
	});

});