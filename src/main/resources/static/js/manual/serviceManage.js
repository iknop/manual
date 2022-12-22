/** maual화면 coachmark **/

$(function () {

    // 조회하기
    const serviceManage = $('#notice-list-dr-table')
    if (serviceManage) serviceManage.on('click', () => {
        Coachmark().init('service')
    })


});
