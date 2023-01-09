/** maual화면 coachmark **/

$(function () {
    // 조회하기
    cursor('#statistics-manual-button')
    $('#statistics-manual-button').on('click', function () {
        $('#statisticsManualModal').modal('show')

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
