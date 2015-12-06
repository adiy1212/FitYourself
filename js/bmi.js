function BmiCalc() {

	var height = document.getElementById("heightinput").value;
	var weight = document.getElementById("weightinput").value;
	var age = document.getElementById("age").value;
	var result;

	height = parseFloat(height);
	weight = parseInt(weight);
	age = parseInt(age);

	if (checkValues(height, weight, age)) {
		result = (weight) / (height * height);
		document.getElementById("bmiResult").innerHTML = Math.round(result);
		updateInfo( Math.round(result));
	} else {
		alert("הערכים שהוכנסו לא בתחום הנמדד, נא הכנס ערכים הגיוניים");
	
	}

};

function checkValues(h, w, age) {

	if (h < 0.89 || h > 2.1 || w < 20 || w > 300 || age < 18 || age === NaN || h===NaN) {
		return false;
	} else {
		return true;
	}

}

function updateInfo(res) {
	var rangeId = checkRange(res);
	document.getElementById("bmires").innerHTML = Math.round(res);
	clearClass("bmiAnlasis");
	document.getElementById("bmiInfo").style.display = "inline-block";
	document.getElementById(rangeId).style.display = "block";
}

function clearClass(classname) {
	var elements = document.getElementsByClassName(classname);
	for (var i = 0,
	    l = elements.length; i < l; i++) {
		elements[i].style.display = "none";
	}

}

function checkRange(myRange){
	
	if(myRange<=19 && myRange>=0){
		return "range1";
	}
	else if(myRange<=24 && myRange>=20){
		return "range2";
	}
	else if(myRange<=29 && myRange>=25){
		return "range3";
	}
	else if(myRange<=34 && myRange>=30){
		return "range4";
	}
	else if(myRange<=40 && myRange>=35){
		return "range5";
	}
	else  if( myRange>=41){
		return "range6";
	}else{
		alert("נתונים לא בטווח הנכון !! אנא הכנס שנית ");
		
	}
	
	
	
}
