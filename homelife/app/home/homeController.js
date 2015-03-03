var app = angular.module('theHomeLife')

app.controller('homeController', function($scope, homeService, $firebase) {

 
	$scope.submitQuery = function() {

	homeService.getData($scope.searchRecipe).then(function(resultArr){
		
		
			var first = resultArr[0]
			var second = resultArr[1]
			var third = resultArr[2]
			console.log(first, second, third)
			$scope.searchRecipe = '';


		homeService.getRecipe(first).then(function(recipeResults) {
				console.log(recipeResults)
				$scope.firstIngredients= recipeResults[0]
				$scope.firstInstructions = recipeResults[1];
				$scope.firstImage = recipeResults[2];
				$scope.firstServings = recipeResults[3];
				$scope.firstTime = recipeResults[4];
				$scope.firstTitle = recipeResults[5];
				$scope.firstReviews = recipeResults[6];
				$scope.firstStarRating = recipeResults[7];
	
	var sync = homeService.firebaseData();
	var friends = sync.$asArray();
		console.log(sync)
	
	$scope.addData = function() {
		friends.$add(recipeResults)
		// newFriend.status = "cool";
		// $scope.friends.$add(newFriend);
		// $scope.newFriend = '';
	}

		}) 

		
// 		$scope.firstTitle = firstRecipe.data.Title;
// 		$scope.firstReviews = firstRecipe.data.ReviewCount;
// 		$scope.firstStarRating = firstRecipe.data.StarRating;
// 			console.log(first)
// 				var firebaseUrl = 'https://food-calendar.firebaseio.com/';
//  				var ref = new Firebase("https://food-calendar.firebaseio.com/");
//   				var sync = $firebase(ref);
//   // download the data into a local object
//   				var syncObject = sync.$asObject();
//   // synchronize the object with a three-way data binding
//   // click on `index.html` above to see it used in the DOM!
//  // syncObject.$bindTo($scope, "data");
//   				syncObject.stuff = firstRecipe.data.Ingredients;
//  				syncObject.$save()

// // 
// 	})


	homeService.getRecipe(second).then(function(secondRecipe){

		console.log(secondRecipe)
		$scope.secondIngredients= secondRecipe[0];
		$scope.secondInstructions = secondRecipe[1];
		$scope.secondImage = secondRecipe[2];
		$scope.secondServings = secondRecipe[3];
		$scope.secondTime = secondRecipe[4];

		// var Time = secondRecipe.data.TotalMinutes;
		
		// if(Time === -1) {
		// 	Time = 'variable'
		// 	$scope.secondTime = Time;
		// } else { $scope.secondTime = 'poop'}
		
		// $scope.secondTime = Time;
		$scope.secondTitle = secondRecipe[5];
		$scope.secondReviews = secondRecipe[6];
		$scope.secondStarRating = secondRecipe[7];
	})

	})	

}




 
})
