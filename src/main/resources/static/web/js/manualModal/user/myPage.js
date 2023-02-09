/** maual화면 coachmark **/

$(function () {

    // 개인정보 수정
    $('.dataTbBtn').on('click', function () {
        $('#myPageManualModal').modal('show')

        fadeInPopupText()
        modalWidthByImg(Xlarge)
        resizeModalImg('myPageManualModal', '58rem')
    })

});
