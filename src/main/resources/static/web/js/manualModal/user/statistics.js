/** maual화면 coachmark **/

$(function () {

    // 다운로드
    $('#btn-download').on('click', function () {
        $('#excelDownManualModal').modal('show')

        fadeInPopupText()
        modalWidthByImg(mediumWide)
        resizeModalImg('excelDownManualModal','26rem')
        resizeModalDescArea('excelDownManualModal','35%')

    })
});
