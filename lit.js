
document.addEventListener('DOMContentLoaded', function loaded (){
  var image = document.getElementById("picOne");
  var num = 1;

  image.addEventListener('click', function changePics() {
    if (num == 21) {
      num = 0;
      console.log("hi");
    }
    var url = image.src
      num++;
    image.src = "http://img.sparknotes.com/content/sparklife/sparktalk/everybook"+num+"_Slide.jpg";
    console.log(num);
  })
})
