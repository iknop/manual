/** maual화면 coachmark **/

$(function () {

    // 로그인
    const login = $('#loginForm')
    if (login) login.on('click', () => {
        Coachmark().init('login')
    })

});
