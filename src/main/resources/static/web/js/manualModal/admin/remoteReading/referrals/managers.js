$(function () {

    // 의뢰목록 테이블 칼럼 설명
    $('#referrals-table-columns').on('click', function () {
        $('#tableColumnsManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(smallWide)
    })
    // 의뢰목록 테이블 칼럼 > 중복제거
    $('#columnToDuplicate').on('click', function () {
        fadeInPopupText()
        duplicateManualModal()
    })

    // 병원선택
    $('#select-hosp').on('click', function () {
        $('#selectHospManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(smallWide)
        resizeModalDescArea('selectHospManualModal','38%')
        resizeModalImgDiv('selectHospManualModal','43%')
    })
    // 병원선택 초기화
    $('#reset-hosp').on('click', function () {
        $('#resetHospManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        resizeModalDescArea('resetHospManualModal','22%')
        resizeModalImgDiv('resetHospManualModal','59%')
    })
    // 검색조건
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(XlargeWide)
        resizeModalImg('searchManualModal', '90%')
        resizeModalDescArea('searchManualModal','22%')
    })
    // 중복정리
    function duplicateManualModal(){
        modalWidthByImg(largeWide)
        resizeModalDescArea('duplicateManualModal','28%')
        resizeModalDescArea('duplicateManualModal2','20%')
        setManualModalStepBtn('duplicateManualModal2',largeWide)
        resizeModalImgDiv('duplicateManualModal','53%')
        resizeModalImgDiv('duplicateManualModal2','57%')
    }
    $('#referral-duplicate-btn').on('click', function () {
        $('#duplicateManualModal').modal('show')
        fadeInPopupText()
        duplicateManualModal()

    })
    // 배정의변경
    $('#referral-rearrange-btn').on('click', function () {
        $('#rearrangeManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        setManualModalStepBtn('rearrangeManualModal',large)
        setManualModalStepBtn('rearrangeManualModal2',largeWide)
        resizeModalDescArea('rearrangeManualModal2','20%')
        resizeModalImgDiv('rearrangeManualModal2','67%')


    })
    // 의뢰상태변경
    $('#referral-change-status-btn').on('click', function () {
        $('#statusManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        resizeModalDescArea('statusManualModal','21%')
        setManualModalStepBtn('statusManualModal',large)
        setManualModalStepBtn('statusManualModal2',largeWide)
        resizeModalDescArea('statusManualModal2','19%')
        resizeModalImgDiv('statusManualModal2','75%')
    })
    // 촬영유형변경
    $('#referral-change-study-type-btn').on('click', function () {
        $('#studyTypeManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        setManualModalStepBtn('studyTypeManualModal',large)
        setManualModalStepBtn('studyTypeManualModal2',Xlarge)
        resizeModalDescArea('studyTypeManualModal2','16%')
        resizeModalImgDiv('studyTypeManualModal2','72%')


    })
    // 응급구분변경
    $('#referral-change-urgent-type-btn').on('click', function () {
        $('#urgentTypeManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        resizeModalDescArea('urgentTypeManualModal','21%')
        setManualModalStepBtn('urgentTypeManualModal',large)
        setManualModalStepBtn('urgentTypeManualModal2',Xlarge)
        resizeModalImgDiv('urgentTypeManualModal2','73%')
        resizeModalDescArea('urgentTypeManualModal2','16%')


    }) // 사용여부변경
    $('#referral-change-useyn-btn').on('click', function () {
        $('#useynManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        setManualModalStepBtn('useynManualModal',large)
        setManualModalStepBtn('useynManualModal2',Xlarge)
        resizeModalImgDiv('useynManualModal2','74%')



    }) // 차트정보변경
    $('#referral-change-patient-id-btn').on('click', function () {
        $('#patientInfoManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(largeWide)
        resizeModalImgDiv('patientInfoManualModal','61%')
        setManualModalStepBtn('patientInfoManualModal',largeWide)
        setManualModalStepBtn('patientInfoManualModal2',large)
        resizeModalImgDiv('patientInfoManualModal2','60%')

    }) // 병변위치 확인
    $('#open-report-image-req-btn').on('click', function () {
        $('#reportImageManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(largeWide)
        resizeModalImgDiv('reportImageManualModal','63%')
        setManualModalStepBtn('reportImageManualModal',largeWide)
        setManualModalStepBtn('reportImageManualModal2',mediumWide)
        resizeModalImgDiv('reportImageManualModal2','58%')
        resizeModalImg('reportImageManualModal2','83%')

    }) // 병합
    $('#merge-referrals-btn').on('click', function () {
        $('#mergeInfoManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        resizeModalImgDiv('mergeInfoManualModal','73%')
        resizeModalDescArea('mergeInfoManualModal','20%')
        setManualModalStepBtn('mergeInfoManualModal',large)
        setManualModalStepBtn('mergeInfoManualModal2',Xlarge)
        resizeModalImgDiv('mergeInfoManualModal2','70%')

    }) // Excel 다운로드
    $('#referrals-download-btn').on('click', function () {
        $('#excelManualModal').modal('show')
        fadeInPopupText()
    })
    // 의뢰목록색상
    $('#table-desc-btn').on('click', function () {
        $('#tableDescManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(XlargeWide)
        resizeModalImgDiv('tableDescManualModal','70%')
        resizeModalDescArea('tableDescManualModal','24%')

    })
    // 우클릭메뉴
    $('#right-click-btn').on('click', function () {
        $('#rightClickManualModal').modal('show')
        fadeInPopupText()
        modalWidthByImg(large)
        resizeModalImgDiv('rightClickManualModal','62%')

    })

});
