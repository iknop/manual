$(function () {
    // 예정의뢰 메뉴
    const receptionNavLink = $('#nav-reception-explanation')
    if (receptionNavLink) receptionNavLink.on('mouseover', () => {
        Coachmark().init('reception')
    })
    if (receptionNavLink) receptionNavLink.on('mouseleave', () => {
        Coachmark().destroyHeader()
    })
    // 완료의뢰 메뉴
    const referralNavLink = $('#nav-referral-explanation')
    if (referralNavLink) referralNavLink.one('mouseover', () => {
        Coachmark().init('referral')
    })
    if (referralNavLink) referralNavLink.one('mouseleave', () => {
        Coachmark().destroyHeader()
    })
    // 조회하기 메뉴
    const statisticsNavLink = $('#nav-statistics-explanation')
    if (statisticsNavLink) statisticsNavLink.one('mouseover', () => {
        Coachmark().init('statistics')
    })
    if (statisticsNavLink) statisticsNavLink.one('mouseleave', () => {
        Coachmark().destroyHeader()
    })
    // 소견서 출력 메뉴
    const reportNavLink = $('#nav-report-explanation')
    if (reportNavLink) reportNavLink.one('mouseover', () => {
        Coachmark().init('report')
    })
    // 공지사항 메뉴
    const serviceNavLink = $('#nav-service-manage-explanation')
    if (serviceNavLink) serviceNavLink.one('mouseover', () => {
        Coachmark().init('service-manage')
    })
    // 고객지원 메뉴
    const supportNavLink = $('#nav-support-explanation')
    if (supportNavLink) supportNavLink.one('mouseover', () => {
        Coachmark().init('support')
    })
    //  마이페이지 메뉴
    const accountNavLink = $('#nav-my-page-explanation')
    if (accountNavLink) accountNavLink.one('mouseover', () => {
        Coachmark().init('account')
    })
})