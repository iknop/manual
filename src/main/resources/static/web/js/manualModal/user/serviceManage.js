/** maual화면 coachmark **/

$(function () {

    // 공지사항
    $('.btn-download').on('click', function () {
        $('#noticeManualModal').modal('show')

        fadeInPopupText()
        modalWidthByImg(largeWide)
        resizeModalImg('noticeManualModal','52rem')

    })



});
