$(() => {
  $(window).on("mousemove", (e) => {
    $(".cursor").css({
      top: `${e.pageY}px`,
      left: `${e.pageX}px`,
    });
  });

  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");

  $(".tab").on("click", (e) => {
    const form = $(e.target).data("form");

    $(".tab").removeClass("tab--active");
    $(e.target).addClass("tab--active");

    $(".form__auth").fadeOut("fast");

    $(`.form__${form}`).fadeIn("fast");
  });

  $(".link").on("mouseover", () => {
    $(".cursor").addClass("cursor--focused");
  });
  $(".link").on("mouseleave", () => {
    $(".cursor").removeClass("cursor--focused");
  });
});
