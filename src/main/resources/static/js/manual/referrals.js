/** maual화면 coachmark **/

$(function () {

    // 검색
    cursor('#btn-search')
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 응급변경
    cursor('#referral-change-urgent-type-btn')
    $('#referral-change-urgent-type-btn').on('click', function () {
        $('#changeUrgentManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 의뢰취소
    cursor('#referral-requestConfig-cancel-btn')
    $('#referral-requestConfig-cancel-btn').on('click', function () {
        $('#cancelRequestManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 정보변경
    cursor('#referral-edit-btn')
    $('#referral-edit-btn').on('click', function () {
        $('#editReferralManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // Excel 다운로드
    cursor('#btn-download')
    $('#btn-download').on('click', function () {
        $('#excelDwnManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 소견복사
    cursor('#btn-save-clipboard-report')
    $('#btn-save-clipboard-report').on('click', function () {
        $('#saveReportManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 병변ㅟㅊ
    cursor('#open-report-image-req-btn')
    $('#open-report-image-req-btn').on('click', function () {
        $('#reportImgManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })

});
