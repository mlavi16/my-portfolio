document.addEventListener('DOMContentLoaded', function loaded(){


  var favButton =  document.getElementById("favThings");
  var hobbiesButton =  document.getElementById("hobbiesButt");
  var familyButton = document.getElementById("familyButt");


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
  hobbiesButton.onclick = function displayHobbies() {
    console.log("hobbies");
    if (hobbies1.innerHTML==""){
      var hobbies = document.getElementById("hobbies1");
      hobbies.innerHTML = "I like to read books in my free time.";
    } else if (hobbies2.innerHTML=="") {
        var varHobbies2 = document.getElementById("hobbies2");
        varHobbies2.innerHTML = "I like to binge watch shows on Netflix.";
    } else if (hobbies3.innerHTML=="") {
        var varHobbies3 = document.getElementById("hobbies3");
        varHobbies3.innerHTML = "I like to code (obviously).";
    } else if (hobbies4.innerHTML=="") {
        var varHobbies4 = document.getElementById("hobbies4");
        varHobbies4.innerHTML = "I like to swim, and I was on a swim team for 4 years.";
    } else {
        var line2 = document.getElementById("done2");
        line2.innerHTML = "------------------";
    }
  }
  familyButton.onclick = function displayFamily() {
    console.log("family");
    if (family1.innerHTML==""){
      var varFamily = document.getElementById("family1");
      varFamily.innerHTML = "I live with my mother, father, and older brother.";
    } else if (family2.innerHTML=="") {
        var varFamily2 = document.getElementById("family2");
        varFamily2.innerHTML = "I have 3 uncles, 3 aunts, and 9 cousins.";
    } else if (family3.innerHTML=="") {
        var varFamily3 = document.getElementById("family3");
        varFamily3.innerHTML = "Both my parents were born in Israel, where the rest of my extended family lives, and moved to the USA 20 years ago.";
    } else if (family4.innerHTML=="") {
        var varFamily4 = document.getElementById("family4");
        varFamily4.innerHTML = "My mom is an IOS developer at Google, and my dad works at his own startup company, building an AI software program..";
    } else {
        var line3 = document.getElementById("done3");
        line3.innerHTML = "------------------";
    }
  }

})
