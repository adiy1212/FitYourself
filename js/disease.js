var app = angular.module("DisApp", []);

app.controller("diseaseController", function($scope, $http) {
	// letter json //
	$http.get("../json/disletters.json").success(function(data) {
		$scope.diseaseLetterMenu = data;

	}).error(function(data, status, headers, config) {

		alert("ERROR !!!");
	});

	// set the json of the name by clicking a letter
	$scope.SetNames = function(disname) {

		$http.get("../json/" + disname + ".json").success(function(res) {

			$scope.disnames = res;

		}).error(function(data, status, headers, config) {

			alert("ERROR !!!");
		});
	};
	// show disease info the disease names on this letter
	$scope.showInfo = function(idName, className) {

		var elements = document.getElementsByClassName(className);
		for (var i = 0,
		    l = elements.length; i < l; i++) {
			elements[i].style.display = "none";
		}

		document.getElementById(idName).style.display = "block";
	};

});
