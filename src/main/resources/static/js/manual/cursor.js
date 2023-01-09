function cursor(area) {
    console.log(area)

    console.log($(`${area}`))
    $(`${area}`).hover(function () {
        console.log($(`${area}`))
        // $(this).css("cursor", "help !important");
        $(this).css("cursor", `url("/img/manual/cursor/question-mark.png"),auto !important`);

    });
}

