function swalOpenFocus(text,elementId){
    return Swal.fire({
        text: text,
        // showClass: {
        //     popup:'',
        // },
        // hideClass: {
        //     popup:'',
        // },
        allowEnterKey: true,
        icon: 'warning',
        allowOutsideClick: false,
        didClose : () => {
            elementId.focus();
        }
    });
}


function swalOpenTextAndFocus(title,text,elementId){
    return Swal.fire({
        title: title,
        text: text,
        allowEnterKey: true,
        // showClass: {
        //     popup:'',
        // },
        // hideClass: {
        //     popup:'',
        // },
        icon : 'warning',
        allowOutsideClick: false,
        didClose : () => {
            elementId.focus();
            $('.swal2-container').css('z-index', '9999');
        }
    });
}

function infoSwal(title,text,popup){
    return Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>"+title+"</h1><button type='button' class='modalClose swalClose mr-n5'></button></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line; line-height: 33px" class="swal2-html-container">'+ text +'</div>',
        customClass: {
            actions:'modal-footer',
            title: 'modal-header'
        },
        showClass: {
            popup:popup,
        },
        confirmButtonText:'확인',
        didOpen: () =>{
            $('.swal2-container').css('z-index', '9999');
            swalClose();
        }
    });
}

function infoSwalWithIcon(title,text,popup,icon){
    return Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>"+title+"</h1><button type='button' class='modalClose swalClose mr-n5'></button></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line; line-height: 33px" class="swal2-html-container">'+ text +'</div>',
        customClass: {
            actions:'modal-footer',
            title: 'modal-header'
        },
        showClass: {
            popup:popup,
        },
        icon:icon,
        confirmButtonText:'확인',
        didOpen: () =>{
            $('.swal2-container').css('z-index', '9999');
            positionChange();
            swalClose();
        }
    });
}

function warningSwal(title,text,confirmButtonText,cancelButtonText,widthPx){
    return Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>"+title+"</h1></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line; line-height: 32px" class="swal2-html-container">'+ text +'</div>',
        showCancelButton: true,
        customClass: {
            actions:'modal-footer',
            title: 'modal-header',
            cancelButton:'modalClose'
        },
        showClass: {
            popup:'',
        },
        width: widthPx,
        allowOutsideClick:false,
        allowEscapeKey:false,
        confirmButtonText:confirmButtonText,
        cancelButtonText:cancelButtonText,
        didOpen: () => {
            $('.swal2-container').css('z-index', '9999');
        }
    });
}

function wideInfoSwal(title,text,width){
    Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>"+title+"</h1><button type='button' class='modalClose swalClose mr-n5'></button></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line" class="swal2-html-container">'+ text +'</div>',
        customClass: {
            actions:'modal-footer',
            title: 'modal-header',
        },
        showClass: {
            popup:'',
        },
        confirmButtonText:'확인',
        width: width,
        didOpen: () => {
            swalClose();
        }
    });
}

function timerSwal(title,text,showLoading,showProgressBar){
    Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>"+title+"</h1><button type='button' class='modalClose swalClose mr-n5'></button></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line" class="swal2-html-container">'+ text +'</div>',
        timer:5000,
        timerProgressBar: showProgressBar,
        // position:'bottom-start',
        // backdrop:false,
        customClass: {
            actions:'modal-footer',
            title: 'modal-header',
        },
        showClass: {
            popup:'',
        },
        confirmButtonText:'확인',
        didOpen: () => {
            swalClose();
            if(showLoading){
                Swal.showLoading();
            }
        },
    })
}

function callbackSwal(title, text, confirmButtonText,cancelButtonText, callback) {
    Swal.fire({
        title: "<div class='modal-header'><h1 class='ml-n5'>" + title + "</h1></div>",
        html: '<div style="font-size: 1.2em; white-space: pre-line; line-height: 30px" class="swal2-html-container">' + text + '</div>',
        showCancelButton: true,
        customClass: {
            actions: 'modal-footer',
            title: 'modal-header',
            cancelButton: 'modalClose'
        },
        showClass: {
            popup: '',
        },
        // width: widthPx,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        didOpen: () => {
            $('.swal2-container').css('z-index', '9999');
        }
    }).then((result)=>{
        callback(result)
    });
}

function positionChange(){
    $('.swal2-icon').before($('.swal2-title'));
}

function swalClose(){
    $('.swalClose').on('click',() => {
        swal.close();
    });
}

function addZIndex(zIndex){
    $('.swal2-container').css('z-index',zIndex);
}
//모달 닫기
$("button.modalClose").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".modal").modal('toggle');
    $('#dt-all-check').prop('checked', false);
});
