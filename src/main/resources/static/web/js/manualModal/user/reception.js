// 검색조건

$('#btn-search').on('click', function () {
    $('#searchManualModal').modal('show')
    fadeInPopupText()
    modalWidthByImg(largeWide)
})

// 정보변경 버튼
// cursor('#reception-edit-btn')
$('#reception-edit-btn').on('click', function () {
    $('#editManualModal1').modal('show')

    fadeInPopupText()
    modalWidthByImg(large)
    setManualModalStepBtn('editManualModal1', large)
    setManualModalStepBtn('editManualModal2', medium)
    resizeModalImg('editManualModal2','90%')

})
// 병합 버튼
$('#reception-merge-btn').on('click', function () {
    $('#mergeManualModal').modal('show')

    fadeInPopupText()
    modalWidthByImg(largeWide)
    resizeModalImg('mergeManualModal','90%')
    resizeModalDescArea('mergeManualModal2','17%')


})
// 삭제 버튼
// cursor('#reception-delete-btn')
$('#reception-delete-btn').on('click', function () {
    $('#deleteManualModal').modal('show')

    fadeInPopupText()
    modalWidthByImg(mediumWide)
    resizeModalDescArea('deleteManualModal','22%')
})

// Disk Add 버튼
// cursor('#reception-disk-add-btn')
$('#reception-disk-add-btn').on('click', function () {
    $('#diskAddManualModal').modal('show')

    fadeInPopupText()
    modalWidthByImg(large)
    setManualModalStepBtn('diskAddManualModal', large)
    setManualModalStepBtn('diskAddManualModal2', largeWide)
    resizeModalImg('diskAddManualModal','40rem')

})
// Folder Add 버튼
// cursor('#reception-folder-add-btn')
$('#reception-folder-add-btn').on('click', function () {
    $('#folderAddManualModal').modal('show')

    fadeInPopupText()
    modalWidthByImg(large)
    setManualModalStepBtn('folderAddManualModal', large)
    setManualModalStepBtn('folderAddManualModal2', medium)
    setManualModalStepBtn('folderAddManualModal3', large)
    resizeModalImg('folderAddManualModal','41rem')
    resizeModalImg('folderAddManualModal2','29rem')
    resizeModalImg('folderAddManualModal3','90%')

})
// 의뢰전송 버튼 859
// cursor('#reception-send-request-area')
$('#reception-send-request-area').on('click', function () {
    $('#sendRequestManualModal').modal('show')

    fadeInPopupText()
    modalWidthByImg(mediumWide)
    setManualModalStepBtn('sendRequestManualModal', mediumWide)
    setManualModalStepBtn('sendRequestManualModal2', small)
    setManualModalStepBtn('sendRequestManualModal3', largeWide)
    resizeModalImg('sendRequestManualModal3','44rem')

})






