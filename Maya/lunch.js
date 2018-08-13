
document.addEventListener('DOMContentLoaded', function loaded (e){
  console.log("IT LOADED!!!!!!");
  var image = document.getElementById('mondayImage');
  var image2 = document.getElementById('tuesdayImage');

  image.addEventListener('click', function imageClick (e){
    // console.log("I just clicked on the hamburger image")
    // console.log(image.src)
    if (image.src == "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg") {
      image.src = "http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2017/11/08/trumps-hamburger-sells-out-in-japan/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510187336113.jpg?ve=1&tl=1&text=big-top-image";

    } else if (image.src == "http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2017/11/08/trumps-hamburger-sells-out-in-japan/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510187336113.jpg?ve=1&tl=1&text=big-top-image") {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg";
    }
  });
  image2.addEventListener('click', function image2click (e){
    if (image2.src == "http://images4.fanpop.com/image/polls/592000/592303_1291583523340_full.jpg") {
      image2.src = "https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg";

    } else if (image2.src == "https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg") {
      image2.src = "http://images4.fanpop.com/image/polls/592000/592303_1291583523340_full.jpg";
    }

  })



})
