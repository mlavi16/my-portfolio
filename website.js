
function init() {

	var button = document.getElementById("click-me-button");

	console.log("button", button)


	button.onclick = function() {

		var randNum = Math.floor((Math.random() * 7));

		console.log("randNum", randNum)

		var list = document.querySelectorAll("h4");

		console.log("list", list[randNum], list[randNum].innerHTML);

		document.getElementById("what-to-do").innerHTML=list[randNum].innerHTML;

	} 

	getWeather();
}


function getWeather () {
	//API documentation: https://openweathermap.org/current
	var APPID = "b45350894169a47c6bd13fc9e59200db";
	var cityName = "Flagstaff"
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID="+APPID;
	url = url.replace(/ /g, "%20");

	weatherRequest = new XMLHttpRequest();

	weatherRequest.open('GET', url, true);
	weatherRequest.onload = processWeatherRequest;
	weatherRequest.send();

}

function processWeatherRequest () {

	if(weatherRequest.readyState != 4) {
		return;
	}

	// Step 4: Once the request is completed,
	// We look for errors.
	if (weatherRequest.status != 200 || weatherRequest.responseText === "") {
	 	console.log("bad response");
	 	return;
	}

	var weatherInformation = JSON.parse(weatherRequest.responseText);

	var temp = weatherInformation["main"]["temp"];
	temp -= 273.15;
	temp = Math.round(temp);

	document.getElementById("grand-canyon-temp").innerHTML = temp;


}



// function processWeatherRequest() {
// // Step 3: In the onload function, we wait
// 	// until the request is complete.
// 	if(weatherRequest.readyState != 4) {
// 		return;
// 	}

// 	// Step 4: Once the request is completed,
// 	// We look for errors.
// 	if (weatherRequest.status != 200 || weatherRequest.responseText === "") {
// 	 	alert("We were unable to find your requested country!");
// 	 	return;
// 	}


// 	// Step 5: Now that the errors are gone, we add
// 	// in what happens when the request succeeds.
// 	var weatherInformation = JSON.parse(weatherRequest.responseText);
// 	var temp = 


// 	var lon = weatherInformation[0].latlng[1];
// 	var lat = countryInformation[0].latlng[0];
	
// 	// Note: If you run into an error like the map
// 	// disappearing, check that you have your
// 	// longtidue and latitude variables mapped
// 	// to the right indexes. Lon is index 1,
// 	// lat is index 0.
// 	//window.console.log("lon " + lon + " & lat " + lat);

// 	var location = ol.proj.fromLonLat([lon, lat]);

// 	// Note: If you run into an error like window
// 	// not loading, check that you declared VAR
// 	// before the location variable.
// 	//window.console.log("location " + location);

// }



window.onload = init;




