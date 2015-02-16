var app = angular.module('miniRouting', ['ngRoute'])


app.config(function($routeProvider) {

	$routeProvider
			.when('/',{
				templateUrl: 'app/home/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.when('/products/:id', {
				templateUrl: 'app/products/productsTmpl.html',
				controller: 'productsCtrl'

			})
			.when('/settings', {
				templateUrl: 'app/settings/settingsTmpl.html',
				controller: 'settingsCtrl'

			})
			.otherwise({
				redirectTo: '/'
				

			})



})