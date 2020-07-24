$(() => {
  $("#main-text").fadeIn(600);
  $("#home").fadeIn(1500);
  $("#about").fadeIn(1500);
  $("#portfolio").fadeIn(1500);
  $("#contact").fadeIn(1500);
  $(".page-title").fadeIn(600);
  /*ハンバーガーメニュー*/
  $(".Toggle").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".NavMenu").addClass("active"); //クラスを付与
    } else {
      $(".NavMenu").removeClass("active"); //クラスを外す
    }
  });
});
