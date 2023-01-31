/** maual화면 coachmark **/

$(function () {

    // 개인정보 수정
    $('.dataTbBtn').on('click', function () {
        $('#myPageManualModal').modal('show')

        const descBox = $('.manual-desc-box');
        let timer = 100;

        let loop = descBox.length;

        for (let i = 0; i < loop; i++) {
            let desc = Object.values(descBox)[i];
            desc.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
        }
    })

});
