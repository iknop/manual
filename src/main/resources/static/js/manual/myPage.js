/** maual화면 coachmark **/

$(function () {

    // 개인정보 수정
    const editHospInfo = $('#editHospInfo')
    if (editHospInfo) editHospInfo.on('click', () => {
        Coachmark().init('modi-account')
    })

});
