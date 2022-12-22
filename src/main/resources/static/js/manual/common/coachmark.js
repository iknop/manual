/** maual화면 coachmark **/
function Coachmark() {
    let steps = null;
    let tooltip = null;
    let nextBtn = null;
    let skipBtn = null;
    let currentStep = 0;
    let highlighter = null;
    let tooltipTextElement = null;
    let tooltipImgElement = null;
    let tooltipBoxSize = ""; // 툴팁 너비
    let styleClass = "coachmark-styles";

    const overlayStyles = ` 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgb(0,0,0, 0.5);
    z-index: 999;
  `;

    const interfaceStyles = `
      position: absolute;
      z-index: 999;
      transition: all 0.4s ease;
      background-color: transparent;
    `;

    const highlightedElementStyles = `
    position: relative;
    z-index: 9999;
  `;

    const tooltipStyles = `
    padding: 1em;
    display: flex;
    z-index: 9999999;
    margin-top: 1rem;
    position: absolute;
    flex-direction: column;
    transition: all 0.4s ease;
    background-color: #ffffff;
  `;
    const tooltipPseudoStyle = `
    top: -8px;
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    background-color: #fff;
    transform: rotate(45deg);
  `;

    const buttons = `
    display: flex;
    padding-top: 1rem;
    align-items: center;
    justify-content: space-between;
  `;

    // data-coachmark-'menu' : 설명할 각 기능
    function init(menu) {
        const coachmarkSelectors = document.querySelectorAll(`*[data-coachmark-${menu}]`);
        // Sort the coachmarks according to their data attributes so that user can decide
        // the elements priority.
        const coachmarks = Array.from(coachmarkSelectors) || [];
        steps = sortArr(coachmarks, menu); // 각 기능 클릭 시 매뉴얼 진행 순서
        // console.log(steps)

        let tooltipImg = new Image(); // 툴팁 이미지 너비측정
        tooltipImg.onload = function () {
            let w = this.width;
            // console.log('width: '+ w)
            if (w < 800) {
                tooltipBoxSize = "w-25";
                alert(tooltipBoxSize)
            } else {
                tooltipBoxSize = "w-50";
            }

        }
        let imgSrc = (steps[currentStep]).dataset.coachmarkImg || "";
        tooltipImg.src = imgSrc;

        // alert(tooltipBoxSize)
        const coachmarkElements = getCoachmarkElements(); // html 생성
        document.body.insertAdjacentHTML("beforeend", coachmarkElements); //html 삽입

        highlighter = document.getElementById("js-coachmark-interface");
        tooltip = document.getElementById("js-coachmark-tooltip");
        tooltipTextElement = document.getElementById("js-coachmark-tooltip-text");
        tooltipImgElement = document.getElementById("js-coachmark-tooltip-img");
        skipBtn = document.querySelector(".coachmark-skip");
        nextBtn = document.querySelector(".coachmark-next");

        // css 적용
        addStyles(".coachmark-overlay", overlayStyles);
        addStyles(".coachmark-tooltip", tooltipStyles);
        addStyles(".coachmark-interface", interfaceStyles);
        addStyles(".coachmark-tooltip .coachmark-btns", buttons);
        addStyles(".coachmark-tooltip:before", tooltipPseudoStyle);
        addStyles(".coachmark-highlight", highlightedElementStyles);

        highlightElement(steps[currentStep]);
        skipBtn.addEventListener("click", handleSkipClick); //destroy
    }

    function highlightElement(element) {
        if (!element)
            throw new Error(
                `To start using Coachmark plugin, please add data-coachmark attribute.`
            );

        const {top, left} = element.getBoundingClientRect();
        const height = element.offsetHeight,
            width = element.offsetWidth;
        const backgroundColor = getBgColor(element);

        // let camelText = 'coachmarkText' + toCamelCase(menu); // coachmark-text-menu
        // let camelImg = 'coachmarkImg' + toCamelCase(menu); // coachmark-img-menu
        // let camelReplImg = 'coachmarkReplaceImg' + toCamelCase(menu); // coachmark-replace-img-menu
        //
        // let tooltipText = element.dataset[camelText] || "";
        // let tooltipImg = element.dataset[camelImg] || "";
        // let tooltipReplaceImg = element.dataset[camelReplImg] || "";
        // console.log('highlightElement() -tooltipText,tooltipImg,tooltipReplaceImg: ' + tooltipText + ',' + tooltipImg + ',' + 'tooltipReplaceImg')

        const tooltipText = element.dataset.coachmarkText || "";
        const tooltipImg = element.dataset.coachmarkImg || "";
        const tooltipReplaceImg = element.dataset.coachmarkReplaceImg || "";
        // console.log('tooltipText,tooltipImg: ' + tooltipText + ',' + tooltipImg);
        console.log(tooltipReplaceImg);

        /**
         * getBoundingClientRect returns the element's position
         * relative to the viewport, not from the body. So it does
         * NOT account for scrollPosition.
         */
        const yScrollPosition = window.pageYOffset;
        const xScrollPosition = window.pageXOffset;

        // console.log(`highlighter: ${highlighter}`)
        if (highlighter) {
            highlighter.style["background-color"] = backgroundColor;
            highlighter.style.top = `${top + yScrollPosition}px`;
            highlighter.style.left = `${left + xScrollPosition}px`;
            highlighter.style.width = `${width}px`;
            highlighter.style.height = `${height}px`;
            if (tooltipReplaceImg) {
                // console.log(`url('${tooltipReplaceImg}')`)
                highlighter.style.backgroundImage = `url('${tooltipReplaceImg}')`;
                highlighter.style.zIndex = 9999;

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
        let highlightClass = $('.coachmark-highlight');
        console.log('highlightClass: '+JSON.stringify(highlightClass))

        // Scroll element's parent container so that it is visible
        setTimeout(() => {
            // Chrome hack for scrollIntoView
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }, 0);

        // currentStep - init에서 설정
        if (currentStep === steps.length - 1) {
            console.log('currentStep === steps.length - 1')
            nextBtn.style.display = "none";
        } else {
            console.log('currentStep != steps.length - 1')
            nextBtn.style.display = "inline-block";
            nextBtn.addEventListener("click", handleNextBtnClick);
        }
    }

    function removeHighlight(element) {
        if (element) {
            element.classList.remove("coachmark-highlight");
        }
    }

    function addTooltip({top, left, height, text, img}) {
        if (text === "") console.warn("Please add text for coachmark tooltip");
        tooltip.style.top = `${Number.parseInt(top, 10) +
        Number.parseInt(height, 10)}px`;
        tooltip.style.left = `${left}px`;
        tooltipTextElement.textContent = text;
        tooltipImgElement.src = img;
    }

    function handleSkipClick() {
        // console.log('handleSkipClick() - menu' + menu)
        destroy();
    }

    function handleNextBtnClick() {
        // console.log('handleNextBtnClick(menu)- menu: '+menu) // menu 전달 oo
        if (currentStep < steps.length - 1) {
            removeHighlight(steps[currentStep]);
            currentStep++;
            highlightElement(steps[currentStep]);
        }
    }

    function destroy() {
        console.log(steps[currentStep]) // menu 전달 oo
        removeHighlight(steps[currentStep]);

        const mountPoint = document.getElementById("js-coachmark");
        console.log(mountPoint)

        if (mountPoint) mountPoint.remove();
        if (nextBtn) nextBtn.removeEventListener("click", handleNextBtnClick);
        if (skipBtn) skipBtn.removeEventListener("click", handleSkipClick);
        // Destroy all dynamically inserted styles
        const allDynamicStyles = document.getElementsByClassName(styleClass);
        if (allDynamicStyles.length) {
            Array.from(allDynamicStyles).forEach(dynamicStyle =>
                dynamicStyle.remove()
            );
        }
    }

    function getCoachmarkElements() {
        // console.log('getCoachmarkElements() tooltipBoxSize: ' + tooltipBoxSize)
        return `
						<section id="js-coachmark">
            <section id="js-coachmark-overlay" class="coachmark-overlay"></section>
            <section id="js-coachmark-interface" class="coachmark-interface" style="background-repeat: no-repeat"></section>
        <!--안내 상자-->
        <section id="js-coachmark-tooltip" class="coachmark-tooltip m-2 w-25 ${tooltipBoxSize}">
            <section id="js-coachmark-tooltip-text" style="font-size:20px;"></section>
            <img id="js-coachmark-tooltip-img">
                <article class="coachmark-btns">
                    <button class= "coachmark-skip __btn btn btn-secondary btn-lg">설명 끝내기</button>
                    <button class="coachmark-next __btn btn btn-primary btn-lg">다음</button>
                </article>
        </section>
    </section>
        `;
    }

    function addStyles(selector, styles) {
        if (styles.length) {
            const style = document.createElement("style");
            style.classList.add(styleClass);
            document.head.appendChild(style);
            const styleSheet = style.sheet;
            styleSheet.insertRule(
                `${selector} { ${styles} }`,
                styleSheet.cssRules.length
            );
        }
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
    function toCamelCase(str) {
        console.log(str)
        let firstLetter = str.charAt(0).toUpperCase();
        let followingLetters = str.slice(1);
        return firstLetter + followingLetters.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    }

    // 클릭 시 매뉴얼 진행 순서 : data-coachmark-'menu' = n번째
    function sortArr(arr, menu) {
        // console.log(arr)
        if (!Array.isArray(arr) || arr.length === 0) return [];
        arr.sort((a, b) => {

            let camel = 'coachmark' + toCamelCase(menu)
            console.log(a.dataset[camel])

            const aValue = Number.parseInt(a.dataset[camel], 10);
            const bValue = Number.parseInt(b.dataset[camel], 10);
            console.log(aValue)
            console.log(bValue)

            if (aValue < bValue) {
                return -1;
            }
            if (aValue > bValue) {
                return 1;
            }
            return 0;
        });
        return [...arr];
    }

    return {
        init: init,
        destroy: destroy
    };
}