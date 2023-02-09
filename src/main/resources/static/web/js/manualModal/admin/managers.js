$(function () {

    // 검색조건
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;
        }
    })
    // 중복정리
    $('#referral-duplicate-btn').on('click', function () {
        $('#duplicateManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;
            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 배정의변경
    $('#referral-rearrange-btn').on('click', function () {
        $('#rearrangeManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 의뢰상태변경
    $('#referral-change-status-btn').on('click', function () {
        $('#statusManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 촬영유형변경
    $('#referral-change-study-type-btn').on('click', function () {
        $('#studyTypeManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 응급구분변경
    $('#referral-change-urgent-type-btn').on('click', function () {
        $('#urgentTypeManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    }) // 사용여부변경
    $('#referral-change-useyn-btn').on('click', function () {
        $('#useynManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    }) // 차트정보변경
    $('#referral-change-patient-id-btn').on('click', function () {
        $('#patientInfoManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    }) // 병변위치 확인
    $('#open-report-image-req-btn').on('click', function () {
        $('#reportImageManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    }) // 병합
    $('#merge-referrals-btn').on('click', function () {
        $('#mergeInfoManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    }) // Excel 다운로드
    $('#referrals-download-btn').on('click', function () {
        $('#excelManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 의뢰목록색상
    $('#table-desc-btn').on('click', function () {
        $('#tableDescManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 우클릭메뉴
    $('#right-click-btn').on('click', function () {
        $('#rightClickManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `1000ms ease 800ms 1 normal forwards running fade`;

            // desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })

});
