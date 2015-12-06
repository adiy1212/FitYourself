var app = angular.module("nmenuApp", []);

app.controller("nutMenuController", function($scope, $http) {
	// set menu of menus //
	$http.get("../json/nutMenus.json").success(function(data) {
		$scope.nutritionMenus = data;

	}).error(function(data, status, headers, config) {

		alert("ERROR !!!");
	});

	// back to menu of menus //
	$scope.backToMenu = function() {
		document.getElementById("menucont").style.display = "none";
		document.getElementById("myMenuContainer").style.display = "none";
		document.getElementById("menuofmenuswrapper").style.display = "block";
		document.getElementById("nutHead").innerHTML = "תפריטים תזונתיים";
	};

	// onclick show me the specific menu only//
	$scope.setmenu = function(menuname, headline) {
		if (menuname === "mymenu") {
			
			document.getElementById("myMenuContainer").style.display = "block";
			document.getElementById("menuofmenuswrapper").style.display = "none";
			document.getElementById("nutHead").innerHTML = headline;
			
			$http.get("../json/mymenu.json").success(function(res) {

				$scope.myMenu = res;

			}).error(function(data, status, headers, config) {

				alert("ERROR !!!");
			});
		} else {
			document.getElementById("menucont").style.display = "block";
			document.getElementById("menuofmenuswrapper").style.display = "none";
			document.getElementById("nutHead").innerHTML = headline;

			$http.get("../json/" + menuname + ".json").success(function(res) {

				$scope.specialmenus = res;

			}).error(function(data, status, headers, config) {

				alert("ERROR !!!");
			});
		}
	};

});

