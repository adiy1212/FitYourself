var app = angular.module("fproApp", []);

app.controller("programsController", function($scope, $http) {

	$http.get("../json/fprograms.json").success(function(data) {
		$scope.fprograms = data;

	}).error(function(data, status, headers, config) {

		alert("ERROR !!!");
	});

	// back to menu of programs //
	$scope.backToMenu = function() {
		document.getElementById("programMenuCont").style.display = "block";
		document.getElementById("specialProgramsWrapper").style.display = "none";
		document.getElementById("myProwrapper").style.display = "none";
		document.getElementById("prohead").innerHTML = "תוכניות אימונים";
	};

	// onclick show me the specific program only//
	$scope.setprogram = function(programname, headline) {
		
		if (programname === "program6") {
			
			document.getElementById("programMenuCont").style.display = "none";
			document.getElementById("myProwrapper").style.display = "block";
			document.getElementById("prohead").innerHTML = headline;

			$http.get("../json/myprogram.json").success(function(res) {

				$scope.myPrograms = res;

			}).error(function(data, status, headers, config) {

				alert("ERROR !!!");
			});
		} else {
			document.getElementById("programMenuCont").style.display = "none";
			document.getElementById("specialProgramsWrapper").style.display = "block";
			document.getElementById("prohead").innerHTML = headline;

			$http.get("../json/" + programname + ".json").success(function(res) {

				$scope.specialPrograms = res;

			}).error(function(data, status, headers, config) {

				alert("ERROR !!!");
			});
		}
	};

});

