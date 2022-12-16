$('#receptionRowCnt').on('change', function () {
    const receptionUrl = $('#url').val();
    const name = $('#search-name').val();
    const id = $('#search-patient-id').val();
    const size = $(this).val();
    window.location.href = '/' + receptionUrl + '?name=' + (name ? name : '') + '&patientId=' + (id ? id : '') + '&size=' + size;
});

$('#referralRowCnt').on('change', function () {
    const referralUrl = $('#referralUrl').val();
    const name = $('#search-name').val();
    const id = $('#search-patient-id').val();
    const emergencyType = $("#search-emergency-type").val();
    const checkupType = $("#search-checkup-type").val();
    const dateType = $("#search-date-type").val();
    const startDate = $("#search-start-date").val();
    const endDate = $("#search-end-date").val();
    const size = $(this).val();
    window.location.href = '/' + referralUrl + '?patientName=' + (name ? name : '') + '&patientId=' + (id ? id : '') + '&emergencyType=' + (emergencyType ? emergencyType : '') + '&checkupType=' + (checkupType ? checkupType : '')
        + '&dateType=' + (dateType ? dateType : '') + '&startDate=' + (startDate ? startDate : '') + '&endDate=' + (endDate ? endDate : '') + '&size=' + size;
});

function onKeyUpSearchFilter(objectName) {
    const inputValue = $('#' + objectName + '-search-name').val().toLowerCase();
    $('#' + objectName + '-search-table tr').filter(function () {
        const spanElement = $(this).find('span');
        $(this).toggle(spanElement.text().toLowerCase().indexOf(inputValue) > -1);
    });
}

function onClickAllCheckbox(objectName) {
    const changeChecked = $('#' + objectName + '-search-allCheck').is(':checked');
    $('input[name=' + objectName + '-search-check]').prop('checked', changeChecked);
}

/* Create Form Data Serialize with Json Structure */
$.fn.serializeObject = function () {
    const resultJson = {};
    let objectJson = {}, jsonName, jsonInJsonName, splitStr;
    try {
        if (this[0].tagName && this[0].tagName.toLowerCase() === "form") {
            const serializeArray = this.serializeArray();
            if (serializeArray) {
                $.each(serializeArray, function () {
                    if (this.name.includes('.')) {
                        splitStr = this.name.split('.');
                        jsonName = splitStr[0];
                        jsonInJsonName = splitStr[1];
                        objectJson = (resultJson[jsonName] === undefined) ? {} : resultJson[jsonName];
                        objectJson[jsonInJsonName] = this.value;
                    } else {
                        jsonName = this.name;
                        objectJson = this.value;
                    }
                    resultJson[jsonName] = objectJson;
                });
            }
        }
    } catch (e) {
        console.log(e.message);
    } finally {
    }
    return resultJson;
}

const allCheck = function (id, inputName) {
    $('#' + id).on('click', function () {
        const checked = this.checked;
        $('input[name="' + inputName + '"]').prop('checked', checked);
    });
}

const getContextmenuPosition = function (e, contextMenu) {
    const windowsWidth = $(document).width();
    const windowsHeight = $(document).height();
    const positionX = e.pageX;
    const positionY = e.pageY;
    const menuWidth = contextMenu.width();
    const menuHeight = contextMenu.height();

    let resultPosition = {}
    const bottomMargin = 15;

    if (positionX + menuWidth >= windowsWidth && positionY + menuHeight >= windowsHeight) {
        //Case : right-bottom
        resultPosition.left = positionX - menuWidth + 'px';
        resultPosition.top = positionY - menuHeight - bottomMargin + 'px';
    } else if (positionX + menuWidth >= windowsWidth) {
        //Case : right
        resultPosition.left = positionX - menuWidth + 'px';
        resultPosition.top = positionY + 'px';
    } else if (positionY + menuHeight >= windowsHeight) {
        // Case : bottom
        resultPosition.left = positionX + 'px';
        resultPosition.top = positionY - menuHeight - bottomMargin + 'px';
    } else {
        //Case : default
        resultPosition.left = positionX + 'px';
        resultPosition.top = positionY + 'px';
    }
    return resultPosition;
}

const isEmpty = function (list) {
    return list.length === 0;
}

const onClickClear = function (elementId) {
    document.getElementById(elementId).value = '';
}

const onClickClearSelectBox = function(elementId) {
    document.getElementById(elementId).selectedIndex = 0;
}

const ajaxPrintErrorLog = function (jqXhr, textStatus, errorMessage) {
    console.log({
        statusCode: jqXhr.status,
        message: jqXhr.responseJSON,
        error: errorMessage
    });
}

const tableHorizontalScrollbar = function(viewportId, contentId) {
    new ScrollBooster({
        viewport: document.getElementById(viewportId),
        content: document.getElementById(contentId),
        scrollMode: 'transform',
        direction: 'horizontal',
        emulateScroll: true
    });
}

const truncateString = function(str, length) {
    if(str !== null && str !== undefined) {
        return str.length <= length ? str : str.slice(0, length).concat('...');
    } else {
        return str;
    }
}

const onClickCheckboxTrigger = function(element) {
    element.prop('checked') ? element.prop('checked', false) : element.prop('checked', true);
}

const numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}