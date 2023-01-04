$("button.modalClose").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".modal").modal('hide');
    // $('#dt-all-check').prop('checked', false);
});