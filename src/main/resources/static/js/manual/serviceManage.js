/** maual화면 coachmark **/

$(function () {

    // 공지사항
    // cursor('#noticeManualArea')
    $('#noticeManualArea').on('click', function () {
        $('#noticeManualModal').modal('show')

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



});
