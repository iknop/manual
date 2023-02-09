/** maual화면 coachmark **/

$(function () {

    // 검색
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(largeWide)
    })
    // 응급변경
    $('#referral-change-urgent-type-btn').on('click', function () {
        $('#changeUrgentManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(small)
        setManualModalStepBtn('changeUrgentManualModal', small)
        setManualModalStepBtn('changeUrgentManualModal2', largeWide)
    })
    // 의뢰취소
    $('#referral-requestConfig-cancel-btn').on('click', function () {
        $('#cancelRequestManualModal1').modal('show')
        fadeInPopupText()
        modalWidthByImg(medium)
        setManualModalStepBtn('cancelRequestManualModal1', medium)
        setManualModalStepBtn('cancelRequestManualModal2', largeWide)
        resizeModalDescArea('cancelRequestManualModal1','236px')
        resizeModalDescArea('cancelRequestManualModal2','163px')

    })
    // 정보변경
    $('#referral-edit-btn').on('click', function () {
        $('#editReferralManualModal1').modal('show')
        fadeInPopupText()

        modalWidthByImg(medium)
        setManualModalStepBtn('editReferralManualModal1', medium)
        setManualModalStepBtn('editReferralManualModal2', smallWide)

    })
    // Excel 다운로드
    $('#btn-download').on('click', function () {
        $('#excelDwnManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(mediumWide)
        resizeModalImg('excelDwnManualModal','70%')
        resizeModalDescArea('excelDwnManualModal','42%')


    })
    // 소견복사
    $('#btn-save-clipboard-report').on('click', function () {
        $('#saveReportManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(medium)

    })
    // 병변ㅟㅊ
    $('#open-report-image-req-btn').on('click', function () {
        $('#reportImgManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(mediumWide)
        resizeModalImg('reportImgManualModal','76%')
        resizeModalDescArea('reportImgManualModal','35%')

    })

});
