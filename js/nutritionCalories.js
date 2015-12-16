var app = angular.module("nmcalApp", []);

app.controller("nutCaloriesController", function($scope, $http) {

	$http.get("../json/caloriesMenu.json").success(function(data) {
		$scope.calMenus = data;

	}).error(function(data, status, headers, config) {

		alert("ERROR !!!");
	});
	// set calories table function//
	$scope.setcal = function(calname, headline) {

		document.getElementById("caloriesmenuwrapper").style.display = "none";
		document.getElementById("calTableContainer").style.display = "block";
		document.getElementById("calHead").innerHTML = headline;

		$http.get("../json/" + calname + ".json").success(function(res) {

			$scope.caltable = res;
			
			for (var i = 0; i < $scope.caltable.length; i++) {
				$scope.caltable[i].resultCalories = $scope.caltable[i].calories;
			}

		}).error(function(data, status, headers, config) {

			alert("ERROR !!!");
		});

	};

	// change calories value by amount //

	/*$scope.changeCal = function(calor, idname,amount) {
		$scope.caltable

		var result,
		    calor1,
		    amount1;
		calor1 = parseInt(calor);
		amount1 = parseInt(amount);
		result = calories1 * amount1;
		document.getElementById(idname).innerHTML = result;

	};*/
	
	$scope.backToCal= function(){
		document.getElementById("caloriesmenuwrapper").style.display = "block";
		document.getElementById("calTableContainer").style.display = "none";
		document.getElementById("calHead").innerHTML = "חישוב קלוריות";
	};
	
	$scope.changeCal = function($event,id) {
		console.log($event.target.value);
		console.log(id);
		
		//var value = document.getElementById($scope.caltable[id].calId).value;
		var value = $event.target.value;
		$scope.caltable[id].resultCalories = parseInt($scope.caltable[id].calories) * parseInt(value);
	};

});
