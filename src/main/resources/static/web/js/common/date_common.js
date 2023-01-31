function dateWithDashbar(date) {
    date = date.toString().replaceAll('-', '');
    if (date.length != 8) {
        console.error('function dateWithDashbar parameter format must be \'yyyy-MM-dd\' or \'yyyyMMdd\'');
        return;
    }

    date = [date.slice(0, 4), date.slice(4, 6), date.slice(6)];
    return date.join('-');
}

function dateWithoutDashbar(date) {
    if (date.length != 8) {
        console.error('function dateWithoutDashbar parameter format must be \'yyyy-MM-dd\'');
        return;
    }
    return date.replace(/[^0-9]/g, '');
}

function isValidatedDate(date) {
    return date.replaceAll('-', '').length == 8;
}

function getDateStr(date) {
    const temp = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    if (temp[1] < 10) {
        temp[1] = '0' + temp[1];
    }

    if (temp[2] < 10) {
        temp[2] = '0' + temp[2];
    }

    return temp.join('-');
}