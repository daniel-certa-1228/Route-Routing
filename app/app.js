"use strict";
console.log( "app.js" );

const app = angular.module("RouteApp", ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'partials/welcome.html'
	}).
	when('/hwy1', {
		templateUrl: 'partials/hwy1.html',
		controller: 'HighwayOneCtrl'
	}).
	when('/hwy2', {
		templateUrl: 'partials/hwy2.html',
		controller: 'HighwayTwoCtrl'
	}).
	otherwise('/');
});