$(document).ready(function(){


});

function saveCheckCookieCertLogin() {
    if($("#rem_id").is(":checked")){ // ID 저장하기를 체크한 상태라면,
        setCookie("pshcCertLoginID", $("#loginId").val(), 15); // 15일 동안 쿠키 보관

        let plain = $("#personal-no").val();
        let encrypted = CryptoJS.AES.encrypt(plain, "pshc");
        setCookie("pshcCertPersonalID", encrypted, 15); // 15일 동안 쿠키 보관
    }else{
        deleteCookie("pshcCertPersonalID");
    }
}
function CheckCertificateData() {
    console.log("-----------CheckCertificateData")
    saveCheckCookieCertLogin();
    // let loginID = $('#loginId').val();
    let loginID = $('#cert-loginId').val();
    if (loginID === "")
    {
        alert("아이디를 입력해 주세요");
        return;
    }
    // let personalNo = $('#loginPwd').val();
    // $('#password').val(CryptoJS.SHA256(personalNo));

    // if (personalNo === "")
    // {
    //     alert("식별번호를 입력해 주세요");
    //     return;
    // }
    processLogin("");
}


function processLogin(userDN) {
    unisign.GetRValueFromKey(userDN, "", function( resultObject ) {
        if( !resultObject || resultObject.resultCode !== 0 ){
            alert( resultObject.resultMessage + "\n오류코드 : " + resultObject.resultCode );
            return;
        }
        console.log(resultObject);
        let certAttrs = resultObject.certAttrs;
        let rValue = resultObject.RValue;
        console.log("rv: "+rValue);
        let issuerName = certAttrs.issuerName;
        console.log("issuerName: "+issuerName);
        let subjectName = certAttrs.subjectName;
        console.log("subjectName: "+subjectName);
        $('#loginType').val('remoteDr');
        // console.log("rv: "+rValue);
        let hashedSubjectName = CryptoJS.SHA256(subjectName);

        let loginId = $('#cert-loginId').val();
        $('#username').val(loginId + ":" + $('#loginType').val()+":"+issuerName);
        $('#password').val(hashedSubjectName);
        $('#loginForm').submit();

        // loginSuccess(rValue, hashedPersonalNo.toString());
    });
}

function TestCert() {
    let issuerName = "yessign";
    // let hashedSubjectName = "418ed8cfdec26e0b6efffa9fa6af538292c899ddcd3fe93ff8d07bd3cee6a5b1";
    // let loginId = $('.cert #loginId').val();
    $('#username').val(loginId + ":" + $('#loginType').val()+":"+issuerName);
    let hashedSubjectName = "465fb581e5442d17dccabbf92d278c868895a7f08b382ba0aaf8ed658dc56afa";
    // let loginId = $('#loginId').val();
    let loginId = 'vksehrdml0407';
    // $('#username').val(loginId + ":" + $('#loginType').val()+":"+issuerName);
    // $('#username').val(loginId + ":" + 'remoteDr' +":"+issuerName);
    // $('#username').val(loginId + ":" + 'remoteDr' +":"+issuerName);
    $('#password').val(hashedSubjectName);
    // $('#loginForm').submit();
}

function loginSuccess(certificateNo, hashedPersonalNo) {
    console.log("cn(rValue) : " + certificateNo);
    console.log("hashedPersonalNo : " + hashedPersonalNo);
    let terminalID = document.getElementById('terminalID').value;
    let loginID = document.getElementById('loginId').value;
    console.log("ti : " + terminalID);
    console.log("li : " + loginID);
    console.log("hp : " + hashedPersonalNo);

    let param = {};
    param["certificateNo"] = certificateNo;
    // param["terminalID"] = terminalID;
    param["loginID"] = loginID;
    param["personalNo"] = hashedPersonalNo;
    let paramData = JSON.stringify(param);
    console.log(paramData);
    $.ajax({
        url: '/auth/api/certlogin',
        type: 'POST',
        contentType: 'application/json',
        // headers: {"X-CSRF-TOKEN": token},
        data : paramData,
        success: function (response) {
            console.log('response : ' + response);
            $("#message").css("display", "block");
            $("#message").val("인증에 성공하였습니다. : " + response);
            $('#login-form').submit();
        },
        beforeSend:function(){
            console.log('beforeSend');
        },
        complete:function(){
            console.log('complete');
        },
        error: function(xhr, error, status) {
            console.log("error - xhr: " + xhr + ", status: " + status + ", error: " + error);
            $("#message").css("display", "block");
            $("#message").val("인증에 실패하였습니다. : " + xhr.responseText);
        }
    });


}

// function toJsonprint(title, value) {
//     let string = JSON.stringify(value,null,'\t')
//     alert(title +"\n" + string);
// };
