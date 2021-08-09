$(document).ready(function () {
  $(".delete-editorials").on("click", function (e) {
    e.preventDefault();
    if (confirm(`Estas seguro que deseas eliminar este editorial`)) {
      $("#form-delete").submit();
    }
  });

  $(".delete-authors").on("click", function (e) {
    e.preventDefault();
    if (confirm(`Estas seguro que deseas eliminar este autor`)) {
      $("#form-delete-authors").submit();
    }
  });
  $(".delete-book").on("click", function (e) {
    e.preventDefault();
    if (confirm(`Estas seguro que deseas eliminar este libro`)) {
      $("#form-delete-book").submit();
    }
  });
});
