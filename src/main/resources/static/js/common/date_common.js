function isValidatedDate(date) {
    const dateRegex = /\d{4}-\d{2}-\d{2}/;
    return dateRegex.test(date);
}

function isDateFormat(date){
    return moment(date, "YYYY-MM-DD", true).isValid();
}

function isPatientDateFuture(patBirth){
    const currentDate = new Date();
    const patBirthToDate = new Date(patBirth);
    if(currentDate > patBirthToDate){
        return true;
    }else{
        return false;
    }
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