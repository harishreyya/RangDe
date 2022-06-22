$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  //  $(".red-box,.green-box").fadeOut(1000);
  //  $(".red-box,.green-box").fadeIn(2000);
  //  $(".red-box,.green-box").fadeTo(1000,0.5);
  //  $(".red-box").fadeToggle()

  //  $(".green-box").hide(2000);
  //  $(".blue-box").slideUp(2000);  
  //  $(".blue-box").slideDown(2000);
  //  $(".blue-box").slideToggle(2000);
  //  $("p").hide()
  //  $("p").slideDown(1000);
   
  // $(".blue-box").animate({
  //   "margin-left":"+=200px"
  // },2000,"linear");
  
  // $(".blue-box").animate({
  //   "margin-left":"+=200px",
  //   "opacity":"0",
  //   "height":"50px",
  //   "width": "50px"
  // },2000);

  // $("p").animate({
  //     "font-family":"Inter",
  //     "opacity":"0",
  //     "font-size":"20px",
  //     height:"50px",
  //     width:"50px"
  //   },2000);


  // $(".red-box").fadeTo(1000,0.2);
  // $(".green-box").delay(1000).fadeTo(1000,0.5);
  // $(".blue-box").delay(2000).fadeTo(1000,0.8).fadeOut().delay(500).fadeIn();

  //callback functions
  $(".red-box").fadeTo(1000,0.2,function(){
    alert("whats up call back functions")
  });


});