$(document).ready(function () {

  $(".menu li a").click(function (e) {

    let target = $(this).attr("href")

    $("html,body").animate(
      {
        scrollTop: $(target).offset().top - 58,
      },
      1000);

    e.preventDefault();
  });
});



// $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collase('hide');
// });