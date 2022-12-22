/** maual화면 coachmark **/

$(function () {

    // 원격 프로그램
    const support = $('#supportImg')
    if (support) support.on('click', () => {
        Coachmark().init('support-dwnld')
    })


});
