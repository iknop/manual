/** maual화면 coachmark **/
function Coachmark() {
    let steps = null; // sortArr(): 설명 진행 순서
    let currentStep = 0; // steps[currentStep]
    let tooltip = null; // #js-coachmark-tooltip - top/left
    let nextBtn = null;
    let skipBtn = null;
    let highlighter = null; // #js-coachmark-interface
    let tooltipTextElement = null;
    let tooltipImgElement = null;
    let tooltipBoxSize = ""; // 툴팁 너비 조정(bootstrap w-25 or w-50)

    // 배경 회색
    const overlayStyles = {
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'position': 'fixed',
        'background-color': 'rgb(0,0,0, 0.5)',
        'z-index': 999
    }


    // 설명하는 요소
    const interfaceStyles =
        {
            'position': 'absolute',
            'z-index': 999,
            'transition': 'all 0.4s ease',
            'background-color': 'transparent'
        }


    // 설명하는 부분 가장 위로(나머지 overlay 회색)
    const highlightedElementStyles = {
        'position': 'relative',
        'z-index': 9999
    }


    // 설명상자, text, img
    const tooltipStyles = {
        'padding': '1em',
        'display': 'flex',
        'z-index': 9999999,
        'margin-top': '1rem',
        'position': 'absolute',
        'flex-direction': 'column',
        'transition': 'all 0.4s ease',
        'background-color': '#ffffff',
        'border-radius': '5px'
    }


    // 기본 상자
    const tooltipPseudoStyle = {
        'top': '-8px',
        'content': '',
        'width': '15px',
        'height': '15px',
        'position': 'absolute',
        'background-color': '#fff',
        'transform': 'rotate(45deg)'
    }


    // 설명 끝내기/ 다음으로
    const buttons = {
        'display': 'flex',
        'padding-top': '1rem',
        'align-items': 'center',
        'justify-content': 'space-between'
    }


    // data-coachmark-'menu' : 설명할 각 기능
    function init(menu) {
        const coachmarkSelectors = $(`*[data-coachmark-${menu}]`);
        console.log(coachmarkSelectors)

        const coachmarks = Array.from(coachmarkSelectors) || [];
        steps = sortArr(coachmarks, menu); // 각 기능 클릭 시 매뉴얼 진행 순서
        // console.log(steps)

        let tooltipImg = new Image(); // 툴팁 이미지 너비측정
        tooltipImg.onload = function () {
            let w = this.width;
            // console.log('width: '+ w)
            if (w < 800) {
                tooltipBoxSize = "w-25";
                // alert(tooltipBoxSize)
            } else {
                tooltipBoxSize = "w-50";
            }

        }

        console.log(`currentStep: ${currentStep}`)
        console.dir(steps[currentStep])
        let imgSrc = (steps[currentStep]).dataset.coachmarkImg || "";
        tooltipImg.src = imgSrc;

        const coachmarkElements = getCoachmarkElements(); // html 생성
        document.body.insertAdjacentHTML("beforeend", coachmarkElements); //html 삽입

        highlighter = $("#js-coachmark-interface");
        tooltip = $("#js-coachmark-tooltip");
        tooltipTextElement = $("#js-coachmark-tooltip-text");
        tooltipImgElement = $("#js-coachmark-tooltip-img");
        skipBtn = $(".coachmark-skip");
        nextBtn = $(".coachmark-next");

        /** css 적용 **/
        $('.coachmark-overlay').css(overlayStyles);
        $('.coachmark-tooltip').css(tooltipStyles);
        $('.coachmark-interface').css(interfaceStyles);
        $('.coachmark-btns').css(buttons);
        $('.coachmark-tooltip:before').css(tooltipPseudoStyle);
        $('.coachmark-highlight').css(highlightedElementStyles);

        console.log(`init() meu : ${menu}`)
        highlightElement(steps[currentStep], menu);
        skipBtn.on("click", destroy); // 설명 끝내기: destroy
        nextBtn.on("click", handleNextBtnClick(menu));
    }

    function highlightElement(element, menu) {
        if (!element)
            throw new Error(
                'To start using Coachmark plugin, please add data-coachmark attribute.'
            );

        const {top, left, width, height} = element.getBoundingClientRect(); // Object{left, top, right, bottom, x, y, width, height }

        const backgroundColor = getBgColor(element);

        /** TODO: 한 div에 여러 menu(기능) 이미지/텍스트 추가: --> 첫번째 설명만 보이는 에러 (data-coachmark-menu = 마지막 번호) **/


            // console.dir(menu)
        let camelText = 'coachmarkText' + toCamelCase(menu); // coachmark-text-menu
        let camelImg = 'coachmarkImg' + toCamelCase(menu); // coachmark-img-menu
        let camelReplImg = 'coachmarkReplaceImg' + toCamelCase(menu); // coachmark-replace-img-menu

        let tooltipText = element.dataset[camelText] || "";
        let tooltipImg = element.dataset[camelImg] || "";
        let tooltipReplaceImg = element.dataset[camelReplImg] || "";
        console.log('highlightElement() -tooltipText,tooltipImg,tooltipReplaceImg: ' + tooltipText + ',' + tooltipImg + ',' + 'tooltipReplaceImg')


        // const tooltipText = element.dataset.coachmarkText || "";
        // const tooltipImg = element.dataset.coachmarkImg || "";
        // const tooltipReplaceImg = element.dataset.coachmarkReplaceImg || "";
        // console.log('tooltipText,tooltipImg: ' + tooltipText + ',' + tooltipImg);

        /**
         * getBoundingClientRect returns the element's position
         * relative to the viewport, not from the body. So it does
         * NOT account for scrollPosition.
         */

        const yScrollPosition = window.scrollY;
        const xScrollPosition = window.scrollX;

        if (highlighter) {
            highlighter.css("background-color", backgroundColor);
            highlighter.css('top', `${top + yScrollPosition}px`);
            highlighter.css("left", `${left + xScrollPosition}px`);
            highlighter.css("width", `${width}px`);
            highlighter.css("height", `${height}px`);

            if (tooltipReplaceImg) {
                highlighter.css("backgroundImage", `url('${tooltipReplaceImg}')`);
                highlighter.css("zIndex", 9999);

            }
        }

        addTooltip({
            height,
            text: tooltipText,
            img: tooltipImg,
            top: top + yScrollPosition,
            left: left + xScrollPosition
        });

        // Add class to the element
        element.classList.add("coachmark-highlight");

        // Scroll element's parent container so that it is visible
        setTimeout(() => {
            // Chrome hack for scrollIntoView
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }, 0);

        // currentStep - init에서 설정
        if (currentStep === steps.length - 1) {
            console.log('currentStep === steps.length - 1')
            nextBtn.css('display', 'none')
        } else {
            console.log('currentStep != steps.length - 1')
            nextBtn.css('display', 'inline-block')
        }
    }

    function removeHighlight(element) {
        if (element) {
            // console.log(removeHighlight)
            element.classList.remove("coachmark-highlight");
        }
    }

    function addTooltip({top, left, height, text, img}) {
        if (text === "") console.warn("Please add text for coachmark tooltip");

        tooltip.css('top', `${Number.parseInt(top, 10) +
        Number.parseInt(height, 10)}px`)
        tooltip.css('left', `${left}px`)
        tooltipTextElement.text(text)
        tooltipImgElement.attr('src', img);
    }


    function handleNextBtnClick(menu) {
        if (currentStep < steps.length - 1) {
            removeHighlight(steps[currentStep]); // 현재 하이라이트 지우기
            currentStep++;
            highlightElement(steps[currentStep], menu); // 현재 +1 단계 하이라이트 주기
        }
    }

    function destroy() {

        console.log(steps[currentStep]) // menu 전달 oo
        removeHighlight(steps[currentStep]);

        const mountPoint = $("#js-coachmark");

        if (mountPoint) mountPoint.remove();
        if (nextBtn) nextBtn.off("click", handleNextBtnClick);
        if (skipBtn) skipBtn.off("click", destroy);
        // Destroy all dynamically inserted styles
        const allDynamicStyles = $('.coachmark-styles');
        if (allDynamicStyles.length) {
            Array.from(allDynamicStyles).forEach(dynamicStyle =>
                dynamicStyle.remove()
            );
        }
    }

    function getCoachmarkElements() {
        return `
						<section id="js-coachmark">
            <section id="js-coachmark-overlay" class="coachmark-overlay"></section>
            <section id="js-coachmark-interface" class="coachmark-interface" style="background-repeat: no-repeat"></section>
        <!--안내 상자-->
        <section id="js-coachmark-tooltip" class="coachmark-tooltip m-2 w-25 ${tooltipBoxSize}">
            <section id="js-coachmark-tooltip-text" style="font-size:18px; font-weight:500;"></section>
            <img id="js-coachmark-tooltip-img">
                <article class="coachmark-btns">
                    <button class= "coachmark-skip __btn btn btn-secondary btn-lg">설명 끝내기</button>
                    <button class="coachmark-next __btn btn btn-primary btn-lg">다음으로</button>
                </article>
        </section>
    </section>
        `;
    }


    function getBgColor(element) {
        let backgroundColor = window
            .getComputedStyle(element)
            .getPropertyValue("background-color");
        while (
            backgroundColor === "rgba(0, 0, 0, 0)" &&
            element !== document.body
            ) {
            element = element.parentNode;
            backgroundColor = window
                .getComputedStyle(element)
                .getPropertyValue("background-color");
        }
        return backgroundColor;
    }

    // data-xxx-xxx camel로 변환
    function toCamelCase(menu) {
        console.log(menu)
        let firstLetter = menu.charAt(0).toUpperCase(); // 첫글자 대문자
        let followingLetters = menu.slice(1); // 뒷문자
        return firstLetter + followingLetters.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    }

    // 클릭 시 매뉴얼 진행 순서 : data-coachmark-'menu' = n번째
    function sortArr(arr, menu) {
        console.log(arr)
        if (!Array.isArray(arr) || arr.length === 0) return [];
        arr.sort((a, b) => {

            let camel = 'coachmark' + toCamelCase(menu) //  data-coachmark-xxx camel로 변환
            console.log(a.dataset[camel])

            const aValue = Number.parseInt(a.dataset[camel], 10); // data-coachmark-camel = n : 10진법
            const bValue = Number.parseInt(b.dataset[camel], 10);
            // console.log(aValue)
            // console.log(bValue)

            if (aValue < bValue) {
                return -1;
            }
            if (aValue > bValue) {
                return 1;
            }
            return 0;
        });
        return [...arr]; // 정렬된 arr 복사
    }

    return {
        init: init,
        destroy: destroy
    };
}