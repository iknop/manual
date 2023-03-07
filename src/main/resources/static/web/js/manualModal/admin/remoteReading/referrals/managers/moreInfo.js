$(function () {

    // 일반/차트/의뢰정보 용어 설명
    $('#wordDescription').on('click', function () {
        $('#referralInfoManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(smallWide)
    })
    // 관리/판독정보 용어 설명
    $('#wordDescription2').on('click', function () {
        $('#referralInfoManualModal2').modal('show')
        fadeInPopupText()
        modalWidthByImg(smallWide)
    })


});
