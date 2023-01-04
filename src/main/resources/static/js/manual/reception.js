$(function () {
    // 정보변경 버튼
    $('#reception-edit-btn').on('click', function () {
        $('#editManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            // let order = Object.values(descOrder)[i];
            // order.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            // console.log(text.style.animation)
        }
    })
    // 병합 버튼
    $('#reception-merge-btn').on('click', function () {
        $('#mergeManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 삭제 버튼
    $('#reception-delete-btn').on('click', function () {
        $('#deleteManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })

    // Disk Add 버튼
    $('#reception-disk-add-btn').on('click', function () {
        $('#diskAddManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // Folder Add 버튼
    $('#reception-folder-add-btn').on('click', function () {
        $('#folderAddManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })
    // 의뢰전송 버튼
    $('#reception-send-request-area').on('click', function () {
        $('#sendRequestManualModal').modal('show')

        const descText = $('.manual-desc-box');
        let timer = 100;

        let loop = descText.length;

        for (let i = 0; i < loop; i++) {
            let text = Object.values(descText)[i];
            text.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
            console.log(text.style.animation)
        }
    })

});


