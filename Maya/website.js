
document.addEventListener('DOMContentLoaded', function loaded(){
  var button = document.getElementById("click-me-button");
  getWeather();
	console.log("button", button)


	button.onclick = function() {
    console.log("Hi")

		var randNum = Math.floor((Math.random() * 7));

		console.log("randNum", randNum)

		var list = document.querySelectorAll("h4");

		console.log("list", list[randNum], list[randNum].innerHTML);

		document.getElementById("what-to-do").innerHTML=list[randNum].innerHTML;

  }


})



function getWeather () {
	//API documentation: https://openweathermap.org/current
	var APPID = "b45350894169a47c6bd13fc9e59200db";
	var zipCode = 86434;
	var url = "https://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us"+"&APPID="+APPID;
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
