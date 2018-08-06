document.addEventListener('DOMContentLoaded', function loaded(){


  var favButton =  document.getElementById("favThings");
  var favButton2 =  document.getElementById("favThings2");
  var favButton3 =  document.getElementById("favThings3");
  var favButton4 =  document.getElementById("favThings4");


  favButton.onclick = function displayFavThings() {
    console.log("list");
    if (favThingsList.innerHTML==""){
      var favList = document.getElementById("favThingsList");
      favList.innerHTML = "My favorite color is blue.";
    } else if (favThingsList2.innerHTML=="") {
      var favList2 = document.getElementById("favThingsList2");
      favList2.innerHTML = "My favorite food is mashed potatoes.";
    } else if (favThingsList3.innerHTML=="") {
      var favList3 = document.getElementById("favThingsList3");
      favList3.innerHTML = "My favorite word is 'Floccinaucinihilipilification'.";
    } else if (favThingsList4.innerHTML=="") {
      var favList4 = document.getElementById("favThingsList4");
      favList4.innerHTML = "My favorite drink is water.";
    } else {
      var line = document.getElementById("done");
      line.innerHTML = "------------------";

    }

}
})
