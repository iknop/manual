/** maual화면 coachmark **/

$(function () {

    // 검색조건
    const reportSearch = $('#search-form')
    if (reportSearch) reportSearch.on('click', () => {
        Coachmark().init('referral-report')
    })

    // 출력
    const reportPrint = $('#btn-report-print')
    if (reportPrint) reportPrint.on('click', () => {
        Coachmark().init('report-print')
    })


});
