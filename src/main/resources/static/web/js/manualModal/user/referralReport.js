$(function () {


    // 검색하기
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')

        fadeInPopupText()
        modalWidthByImg(XlargeWide)
        resizeModalImg('searchManualModal','64rem')
        resizeModalDescArea('searchManualModal','19%')

    })
    // 출력하기
    $('#btn-report-print').on('click', function () {
        $('#printManualModal').modal('show')

        fadeInPopupText()
        modalWidthByImg(small)
        setManualModalStepBtn('printManualModal', small)
        setManualModalStepBtn('printManualModal2', largeWide)
        resizeModalImg('printManualModal2','90%')
        resizeModalDescArea('printManualModal2','26%')

    })

});
