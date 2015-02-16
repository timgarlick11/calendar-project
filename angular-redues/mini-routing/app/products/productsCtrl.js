var app = angular.module('miniRouting')

app.controller('productsCtrl', function($scope, $routeParams, productsService) {

if ($routeParams.id === 'shoes') {
	$scope.item = productsService.shoeData;

} else if ($routeParams.id === 'socks') {
	$scope.item = productsService.sockData;
}

	
})
