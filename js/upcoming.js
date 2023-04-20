$(function () {
  $(".card").on({
    mouseover: function () {
      $(".card-img-top").css({ "background-color": "rgba(247,247,248,0.5)" });
    },
    mouseout: function () {
      $(".card-img-top").css({ background: "none" });
    },
  });
});
