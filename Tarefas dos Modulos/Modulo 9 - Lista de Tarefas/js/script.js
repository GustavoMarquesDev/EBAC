$(document).ready(function () {
  const form = $("#formulario");
  let li = $("li");

  $("form").on("submit", function (e) {
    e.preventDefault();
    const listaTarefa = $("form input").val();
    const novaTarefa = $("<li></li>");

    if (listaTarefa === "") {
      return;
    } else {
      $(`<li class="item">${listaTarefa}</li>`).appendTo(novaTarefa);
      $(novaTarefa).appendTo("ul");
      $("form input").val("");
    }
  });

  $("ul").on("click", "li", function () {
    if ($(this).hasClass("feito")) {
      $(this).removeClass("feito");
    } else {
      $(this).addClass("feito");
    }
  });
});
