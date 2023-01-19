/** maual화면 coachmark **/

$(function () {


    // 검색하기
    cursor('#btn-search')
    $('#btn-search').on('click', function () {
        $('#searchManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 출력하기
    cursor('#btn-report-print')
    $('#btn-report-print').on('click', function () {
        $('#printManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })

});
