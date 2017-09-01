"use strict";
console.log( "RouteFactory.js" );

app.factory("RouteFactory", function($q, $http) {

	let getHwyOne = () => {
		return $q ((resolve, reject) => {
			$http.get('./data/highway1.json')
			.then((hwy1Obj) => {
				let hwy1 = hwy1Obj.data.highway1;
				console.log( "hwy1", hwy1 );
				resolve(hwy1);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getHwyTwo = () => {
		return $q ((resolve, reject) => {
			$http.get('./data/highway2.json')
			.then((hwy2Obj) => {
				let hwy2 = hwy2Obj.data.highway2;
				console.log( "hwy2", hwy2 );
				resolve(hwy2);
			});
		});
	};
	return{getHwyOne, getHwyTwo};
});

