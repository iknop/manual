$(function () {
    // 예정의뢰 메뉴
    const receptionNavLink = $('#nav-reception-explanation')
    if (receptionNavLink) receptionNavLink.one('click', () => {
        Coachmark().init('reception')
    })
    // 완료의뢰 메뉴
    const referralNavLink = $('#nav-referral-explanation')
    if (referralNavLink) referralNavLink.one('click', () => {
        Coachmark().init('referral')
    })
    // 조회하기 메뉴
    const statisticsNavLink = $('#nav-statistics-explanation')
    if (statisticsNavLink) statisticsNavLink.one('click', () => {
        Coachmark().init('statistics')
    })
    // 소견서 출력 메뉴
    const reportNavLink = $('#nav-report-explanation')
    if (reportNavLink) reportNavLink.one('click', () => {
        Coachmark().init('report')
    })
    // 공지사항 메뉴
    const serviceNavLink = $('#nav-service-manage-explanation')
    if (serviceNavLink) serviceNavLink.one('click', () => {
        Coachmark().init('service-manage')
    })
    // 고객지원 메뉴
    const supportNavLink = $('#nav-support-explanation')
    if (supportNavLink) supportNavLink.one('click', () => {
        Coachmark().init('support')
    })
    //  마이페이지 메뉴
    const accountNavLink = $('#nav-my-page-explanation')
    if (accountNavLink) accountNavLink.one('click', () => {
        Coachmark().init('account')
    })
})