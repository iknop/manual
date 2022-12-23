/** maual화면 coachmark **/

$(function () {

    // 응급변경
    const changeUrgent = $('#referral-change-urgent-type-btn')
    if (changeUrgent) changeUrgent.on('click', () => {
        Coachmark().init('change-urgent')
    })

    //  의뢰취소
    const cancelRequest = $('#referral-requestConfig-cancel-btn')
    if (cancelRequest) cancelRequest.on('click', () => {
        Coachmark().init('cancel-request')
    })
    //  의뢰변경
    const editRequest = $('#referral-edit-btn')
    if (editRequest) editRequest.on('click', () => {
        Coachmark().init('edit-request')
    })
//  Excel 다운로드
    const excel = $('#btn-download')
    if (excel) excel.on('click', () => {
        Coachmark().init('excel')
    })

});
