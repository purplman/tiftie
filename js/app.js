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

  $(document).on("mouseover", "a", () => {
    $(".cursor").addClass("cursor--focused");
  });
  $(document).on("mouseleave", "a", () => {
    $(".cursor").removeClass("cursor--focused");
  });

  $(".account__link").on("click", (e) => {
    e.preventDefault();

    let box = $(e.target).data("box");

    $(".account__link").removeClass("account__link--active");
    $(e.target).addClass("account__link--active");

    $(".account__box").removeClass("account__box--active");
    $(`#${box}`).addClass("account__box--active");
  });
});
