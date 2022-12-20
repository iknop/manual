$(function () {
    // disk add 버튼 : 파일 추가
    const diskAddBtn = $('#reception-disk-add-btn')
    if (diskAddBtn) diskAddBtn.on('click', () => {
        Coachmark().init('disk-add')
    })

    // folder add 버튼 : 폴더 추가
    const folderAddBtn = $('#reception-folder-add-btn')
    if (folderAddBtn) folderAddBtn.on('click', () => {
        Coachmark().init('folder-add')
    })
    // 정보변경 버튼
    const editInfoBtn = $('#reception-edit-btn')
    if (editInfoBtn) editInfoBtn.on('click', () => {
        Coachmark().init('edit-info')
    })
    // 병합 버튼
    const mergeBtn = $('#reception-merge-btn')
    if (mergeBtn) mergeBtn.on('click', () => {
        Coachmark().init('merge')
    })
    // 의뢰 전송 버튼
    const requestBtn = $('#reception-send-request-area')
    if (requestBtn) requestBtn.on('click', () => {
        Coachmark().init('send-request')
    })
});
