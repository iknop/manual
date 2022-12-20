/** maual화면 coachmark **/

$(function () {

    // 조회하기
    const changeUrgent = $('#coachmark-search')
    if (changeUrgent) changeUrgent.on('click', () => {
        Coachmark().init('search')
    })



});
