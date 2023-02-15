$(function () {

    // 의뢰목록 테이블 칼럼
    $('#referral-table-column').on('click', function () {
        $('#tableColumnManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(Xlarge)

    })
    // 의뢰목록 테이블 칼럼 > 중복제거
    $('#columnToDuplicate').on('click', function (){
        fadeInPopupText()
        modalWidthByImg(Xlarge)
        resizeModalImgDiv('duplicateManualModal','71%')
        resizeModalDescArea('duplicateManualModal','22%')
        setManualModalStepBtn('duplicateManualModal2',Xlarge)
        resizeModalImgDiv('duplicateManualModal2','72%')

    })
    // 중복제거
    $('#referral-emergency-duplicate-btn').on('click', function (){
        $('#duplicateManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(Xlarge)
        resizeModalImgDiv('duplicateManualModal','71%')
        resizeModalDescArea('duplicateManualModal','22%')
        setManualModalStepBtn('duplicateManualModal2',Xlarge)
        resizeModalImgDiv('duplicateManualModal2','72%')
    })
});
