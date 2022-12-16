let toastId = 1;
function toastGenerate(success, title, content){
    let bgColor = '#edb2b7',
        fontColor = '#ab0a0a';
    if (success === "Y") {
        bgColor = '#F0F8FF';
        fontColor = '#6c757d';
    }
    $('.toast-area').prepend(
        "<div class='toast toastId"+ toastId +"' role='alert' aria-live='assertive' data-autohide=\"true\" data-delay='5000' style='width: 300px; transition: opacity 1.5s !important; margin-right: 1vh'>"
        +            "<div class='toast-header' style='background: "+ bgColor + "; color: "+ fontColor +"'>"
        +                    "<img src='' class='rounded mr-2' alt=''>"
        +                    "<strong class='mr-auto'>"+ title +"</strong>"
        +                    "<small class='text-muted'>just now</small>"
        +                    "<button type='button' class='ml-2 mb-1 close' data-dismiss='toast' aria-label='Close'>"
        +                        "<span aria-hidden='true'>&times;</span>"
        +                    "</button>"
        +            "</div>"
        +            "<div class='toast-body'>"
        +                content
        +            "</div>"
        + "</div>");

    $('.toastId' + toastId).toast('show');
    if (success === "Y") {
        // 수행성공된 toast는 10초동안 보인 뒤, 자동으로 hide 처리
        setTimeout(function() {
            $('.toastId' + toastId).toast('hide');
        },10000);
    }
    toastId ++;
}
