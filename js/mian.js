function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
   
  }
  
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
$('.some-list-1').simpleLoadMore({
  item: '.gallery_img',
  count: 2,
    itemsToLoad: 1
}); 
$('.service_slide').slick({
    dots: false,
    speed: 900,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
});$('.testimonial_slide').slick({
    dots: false,
    speed: 900,
    slidesToShow: 2,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
});