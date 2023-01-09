/** maual화면 coachmark **/

$(function () {

    // 소견서 출력
    cursor('#search-form')
    $('#search-form').on('click', function () {
        $('#reportPrintManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })
    // 소견서 출력
    cursor('#btn-report-print')
    $('#btn-report-print').on('click', function () {
        $('#reportPrintManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })


});
