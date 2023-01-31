$(".form").eq(0).addClass("d-flex");
$(".dataTbForm").eq(0).addClass("d-block");
// $("menu > h1").on("click", function (e) {
//     e.preventDefault();
//     $("menu > h1").removeClass("current");
//     $(this).addClass("current");
//     let idx = $(this).index();
//     console.log(idx);
//     $(".form").removeClass("d-flex").eq(idx).addClass("d-flex");
//     $(".dataTbForm").removeClass("d-block").eq(idx).addClass("d-block");
//     // let pageTitle = "관리자 - 의뢰목록 > " + $("menu > .current").text();
// });

function onKeyUpSearchFilter(objectName) {
    const inputValue = $('#' + objectName + '-search-name').val().toLowerCase();
    $('#' + objectName + '-tbody tr').filter(function () {
        const spanElement = $(this).find('span');
        $(this).toggle(spanElement.text().toLowerCase().indexOf(inputValue) > -1);
    });

    $('.resultNum').text('조회된 결과 (' + $('#' + objectName + '-tbody').find('tr:visible').length + '건)')
}

/* Create Form Data Serialize with Json Structure */
$.fn.serializeObject = function () {
    const resultJson = {};
    let objectJson = {}, jsonName, jsonInJsonName, splitStr;
    try {
        if (this[0].tagName && this[0].tagName.toLowerCase() === "form") {
            const serializeArray = this.serializeArray();
            if (serializeArray) {
                $.each(serializeArray, function () {
                    if (this.name.includes('.')) {
                        splitStr = this.name.split('.');
                        jsonName = splitStr[0];
                        jsonInJsonName = splitStr[1];
                        objectJson = (resultJson[jsonName] === undefined) ? {} : resultJson[jsonName];
                        objectJson[jsonInJsonName] = this.value;
                    } else {
                        jsonName = this.name;
                        objectJson = this.value;
                    }
                    resultJson[jsonName] = objectJson;
                });
            }
        }
    } catch (e) {
        console.log(e.message);
    } finally {
    }
    return resultJson;
}

const allCheck = function (id, inputName) {
    $('#' + id).on('click', function () {
        const checked = this.checked;
        $('input[name="' + inputName + '"]').prop('checked', checked);
    });
}

function allCheck2(id,inputName){
    const checked = this.checked;
    $('input[name="' + inputName + '"]').prop('checked', checked);
}

const getContextmenuPosition = function (e, contextMenu, parentOffset) {
    // console.log("contextMenu :"+ contextMenu);
    const windowsWidth = $(document).width();
    const windowsHeight = $(document).height();
    // console.log("windowsWidth :"+ windowsWidth);
    // console.log("windowsHeight :"+ windowsHeight);
    // console.log("parentOffset.left :"+ parentOffset.left);
    // console.log("parentOffset.top :"+ parentOffset.top);
    // const positionX = e.pageX - parentOffset.left;
    // const positionX = e.clientX;
    // let positionY = e.clientY;
    // positionY = e.pageY - parentOffset.top;
    const positionX = e.pageX;
    let positionY = e.pageY;
    // console.log("positionX :"+ positionX);
    // console.log("positionY :"+ positionY);
    const menuWidth = contextMenu.width(); // 159
    const menuHeight = contextMenu.height(); //322
    // console.log("menuWidth :"+ menuWidth);
    // console.log("menuHeight :"+ menuHeight);

    let resultPosition = {}
    console.dir(parentOffset);
    const bottomMargin = 70; // 관리자_의뢰목록이면 70, 관리자_응급목록 페이지면 45, 병원_의뢰완료목록 페이지면 ?

    // console.log("(positionX + menuWidth) : "+ (positionX + menuWidth));
    // console.log("(positionY + menuHeight) : "+ (positionY + menuHeight));

    if (windowsWidth <= (positionX + menuWidth) && windowsHeight <= (positionY + menuHeight)) {
        // console.log("1");
        //Case : right-bottom
        resultPosition.left = positionX - menuWidth + 'px';
        resultPosition.top = positionY - menuHeight - bottomMargin + 'px';
    } else if (windowsWidth <= (positionX + menuWidth) ) {
        // console.log("2");
        //Case : right
        resultPosition.left = positionX - menuWidth+ 'px';
        resultPosition.top = positionY - bottomMargin + 'px';
    } else if (windowsHeight <= (positionY + menuHeight)) {
        // console.log("3");
        // Case : bottom
        resultPosition.left = positionX + 'px';
        resultPosition.top = positionY - menuHeight - bottomMargin + 'px';
    } else {
        // console.log("4");
        //Case : default
        resultPosition.left = positionX + 'px';
        resultPosition.top = positionY - bottomMargin  + 'px';
    }
    return resultPosition;
}

const isEmpty = function (list) {
    return list.length === 0;
}

const onClickClear = function (elementId) {
    document.getElementById(elementId).value = '';
}

const onClickClearSelectBox = function(elementId) {
    document.getElementById(elementId).selectedIndex = 0;
}

const ajaxPrintErrorLog = function (jqXhr, textStatus, errorMessage) {
    console.log({
        statusCode: jqXhr.status,
        message: jqXhr.responseJSON,
        error: errorMessage
    });
}

const truncateString = function(str, length) {
    if(str !== null && str !== undefined) {
        return str.length <= length ? str : str.slice(0, length).concat('...');
    } else {
        return str;
    }
}

const onClickCheckboxTrigger = function(element) {
    element.prop('checked') ? element.prop('checked', false) : element.prop('checked', true);
}

const createContextMenu = function(contextMenu, targetTable, callback) {
    contextMenu.on('mouseleave', function() {
        contextMenu.hide();
    });
    $(document).on('contextmenu', targetTable + ' tbody tr', function(e) {
        e.preventDefault();
        const position = getContextmenuPosition(e, contextMenu, $(targetTable + ' tbody').offset());

        contextMenu.css({
            left: position.left,
            top: position.top
        }).show();

        callback(this);
        return false;
    }).on('click', function() {
        contextMenu.hide();
    });
}

const isChecked = function(element) {
    return element.prop('checked') ? 'Y' : 'N';
}

const showTextLength = function(element, countElement, limit) {
   element.on('keyup', function() {
        let content = element.val();

        if (content.length === 0  || content === '' ) {
            countElement.text(`0 / ${limit}`);
        } else {
            countElement.text(`${content.length} / ${limit}`);
        }
        // 글자수 제한
        if (content.length > limit) {
            element.val(element.val().substring(0, limit));
            swal.fire('',`글자수는 ${limit}자 이하로 입력해주세요.`, 'warning');
        }
    })
}

function checkLaunchFinished() {
    console.log(sessionStorage.getItem('finishYN'));
    if(sessionStorage.getItem('finishYN') == 'Y'){
        receptionShow();
    }
}

function receptionShow(){
    $('.reception-menu').removeClass('d-none');
    $('#application-ready').css("display", "none");
    $('#nav-reception').css("display", "block");
    $.removeCookie("terminalIdCheck", {path: '/'});
    $('#link-reception a').removeClass('disabled');
}

// function createLaunchFinishCheckSession(){
//     if(window.sessionStorage.getItem('finishYN') == null){
//         sessionStorage.setItem('finishYN','N');
//     }
// }

// function setLaunchFinishCheckSession(){
//     sessionStorage.setItem('finishYN','Y');
// }

function finLaunchStatusCheck(status){
    $.ajax({
        url:_ctx + 'comm/finLaunchStatus/'+status,
        type: "GET"
    }).done(function (response){
        console.log(response);
        if(response === 'true'){
            receptionShow();
        }
    }).fail(function (xhr,error,status){
        console.log(xhr,error,status);
    });
}