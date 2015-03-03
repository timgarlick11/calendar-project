var app = angular.module('theHomeLife')


app.service('homeService', function($http, $q, $firebase) {
  



this.getData = function(userSearch) {
var deferred = $q.defer()

	$http({
		method:'GET',
		url:'http://api.bigoven.com/recipes?title_kw=' + userSearch + ''
	}).then(function(results) {
		console.log(results)
		var recipeIdArr = [results.data.Results[0].RecipeID, results.data.Results[1].RecipeID,results.data.Results[2].RecipeID] ;

		deferred.resolve(recipeIdArr)
		
	})
		return deferred.promise

}

this.getRecipe = function(firstRecipeID, secondRecipeID, thirdRecipeID) {
 	console.log(firstRecipeID, secondRecipeID, thirdRecipeID)
 	var deferred = $q.defer()
	
	$http({
		method:'GET',
		url:'http://api.bigoven.com/recipe/' + firstRecipeID + ''

	}).then(function(firstRecipeResults) {
		console.log(firstRecipeResults)
		var firstRecipeResultsArr = 
	   [firstRecipeResults.data.Ingredients, firstRecipeResults.data.Instructions, 
		firstRecipeResults.data.ImageURL, firstRecipeResults.data.YieldNumber, 
		firstRecipeResults.data.TotalMinutes, firstRecipeResults.data.Title, 
		firstRecipeResults.data.ReviewCount, firstRecipeResults.data.StarRating];
		
		
	

		deferred.resolve(firstRecipeResultsArr)
	})
		return deferred.promise

			$http({
				method:'GET',
				url:'http://api.bigoven.com/recipe/' + secondRecipeID + ''
	}).then(function(secondRecipeResults) {
		var secondRecipeResultsArr = 
	   [secondRecipeResults.data.Ingredients, secondRecipeResults.data.Instructions, 
		secondRecipeResults.data.ImageURL, secondRecipeResults.data.YieldNumber, 
		secondRecipeResults.data.TotalMinutes, secondRecipeResults.data.Title, 
		secondRecipeResults.data.ReviewCount, secondRecipeResults.data.StarRating];

		deferred.resolve(secondRecipeResultsArr)

	})

	return deferred.promise
}

this.firebaseData = function() {

var firebaseUrl = 'https://food-calendar.firebaseio.com/';
var ref = new Firebase(firebaseUrl);
var sync = $firebase(ref);
return sync;

}

// $scope.firstIngredients= firstRecipe.data.Ingredients;
		// $scope.firstInstructions = firstRecipe.data.Instructions;
		// $scope.firstImage = firstRecipe.data.ImageURL;
		// $scope.firstServings = firstRecipe.data.YieldNumber;
		// $scope.firstTime = firstRecipe.data.TotalMinutes;
		// $scope.firstTitle = firstRecipe.data.Title;
		// $scope.firstReviews = firstRecipe.data.ReviewCount;
		// $scope.firstStarRating = firstRecipe.data.StarRating;
// this.postData = function(question, update) {

// 	return $http({
// 			method: 'POST',
// 			url: 'https://api.parse.com/1/classes/calendar',
// 			headers: {'X-Parse-Application-Id': 'pRfgUJczDp4fFaZFCPLbJJjsUHeKC40YqTnIdj9j', 'X-Parse-REST-API-Key': 'Gf8qX7hrh7fmKoIzcZMxw9CMrNf8y5ywVmzmofPv'},
// 			data: {text: question, status: 'red'}


// 		})

// 	}
  
  
// this.get = function() {

//   return $http({
//     method: 'GET',
//     url:'https://api.parse.com/1/classes/questions',
//     headers: {'X-Parse-Application-Id': 'sG69R7d7icgrIeq4NRXXYJelV6zMcGjXLsWzugYH', 'X-Parse-REST-API-Key': 'pSDp1DgeU2vcjraM5CJIuRSWH6XmJCpIgeIPcLWP'}
//   }).then(function(response) {

//   	console.log(response)
//   	return response;
//   })

// }



})