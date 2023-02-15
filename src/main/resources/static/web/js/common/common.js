$(".form").eq(0).addClass("d-flex");
$(".dataTbForm").eq(0).addClass("d-block");


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

// manual modal 설명 fade 효과 
function fadeInPopupText() {
    const descText = $('.manual-desc-box');

    let loop = descText.length;

    for (let i = 0; i < loop; i++) {
        let text = Object.values(descText)[i];
        text.style.animation = `fade 1000ms 400ms forwards`;
    }

}

// img 넓이 modal width
const small = 500;
const smallWide = 600;
const medium = 700;
const mediumWide = 800;
const large = 900;
const largeWide = 1000;
const Xlarge = 1100;
const XlargeWide = 1200;

// modalWidthByImg(small)
function modalWidthByImg(imageType) {
    $('.modal-size-fix').width(`${imageType}`);
}

// step 버튼 클릭 시 모달 사이즈 설정
function setManualModalStepBtn(modalId, imageType) {
    let step = $(`div[data-target="#${modalId}"]`)
    step.on('click', function () {
        modalWidthByImg(imageType)
    })
}

// modal 이미지 조정
function resizeModalImg(modalId, imgSize) {
    $(`#${modalId}`).find('img')[0].style.width = `${imgSize}`
}
// modal 이미지 width 조정해도 계속 공백 생겨서 설명란이 아래로 내려갈 시
function resizeModalImgDiv(modalId, imgDivSize) {
    $(`#${modalId}`).find('.text-center').css('width',`${imgDivSize}`)
}

// modal 설명란 사이즈 조정
function resizeModalDescArea(modalId, descSize) {
    $(`#${modalId}`).find('.manual-desc-box ').css('width', `${descSize}`)
}

