$(function() {
    $(document).ready(function(){

        window.addEventListener('message', function (e) {
            // console.log('parent message');
            // console.log('e' + e.data);
            let postParam = e.data;
            console.log('event' + JSON.stringify(postParam));
        });


        let key = getCookie("pshcLoginID");
        let certLoginKey = getCookie("pshcCertLoginID");
        $("#loginId").val(key);

        if($("#loginId").val() !== ""){
            $("#rem_id").attr("checked", true);
            $("#loginPwd").focus();
        }

        $("#rem_id").on('change',function(){
            saveCheckCookie();
        });

        $("#loginPwd").keyup(function(e){
            if (e.which === 13) {
                $('#loginType').val() === 'admin' ? checkLogin() : CheckCertificateData();
            }
        });

        // $('#register').on('click',function (){
        //     location.href = webUrl + "/register/hospital";
        // });

        $("input[type='radio'][name='loginType']").change(function (){
            const id = $(this).attr('id');
            if(id==='drLogin'){
                $('#certLogin').removeClass('d-none').addClass('d-block');
                $('#login_btn').removeClass('d-block').addClass('d-none');
                // $('#password').val('').addClass('d-none').removeClass('d-block');
                $('#loginPwd').removeClass('d-block').addClass('d-none');

                $('#loginPwd').attr('placeholder','식별번호를 입력하세요');

                $('#openCertRegister').removeClass('d-none').addClass('d-block');

                $('#loginType').val("remoteDr");
                $("#loginId").val(certLoginKey);
            }else {
                $('#certLogin').removeClass('d-block').addClass('d-none');
                $('#login_btn').removeClass('d-none').addClass('d-block');
                // $('#password').removeClass('d-none').addClass('d-block');
                $('#loginPwd').removeClass('d-none').addClass('d-block');
                $('#loginPwd').attr('placeholder','비밀번호를 입력하세요');

                $('#openCertRegister').removeClass('d-block').addClass('d-none');

                $('#loginType').val("admin");
                $("#loginId").val(key);
            }
        });
    });
});

function saveCheckCookie() {
    if($("#rem_id").is(":checked")){ // ID 저장하기를 체크한 상태라면,
        setCookie("pshcLoginID", $("#loginId").val(), 7); // 15일 동안 쿠키 보관
    }else{
        deleteCookie("pshcLoginID");
    }
}

function checkLogin() {
    console.log("-----------checkLogin");
    // saveCheckCookie();
    $('#loginType').val('admin');
    let loginId = $('#loginId').val();
    console.log("loginId : " + loginId);
    $('#username').val(loginId + ":" + $('#loginType').val());

    // 패스워드 암호화
    let password = $('#loginPwd').val();
    console.log("password : " + password);
    $('#password').val(CryptoJS.SHA256(password));

    console.log("password : " + $('#password').val());
    console.log("username : " + $('#username').val());

    $('#loginForm').submit();
}

function SetParamData(paramData) {
    console.log("certificate Info Received ! ");
    console.log(JSON.stringify(paramData));
}

// function OpenPopupCertGet() {
//     let url = authUrl + "/register/getCert";
//     multipleScreenPopup(url, 'CertRegister', 700, 600, true, 0, 0, "no");
// }

function OpenPopupCert() {
    let url = authUrl + "/cert/update";
    multipleScreenPopup(url, 'CertRegister', 700, 600, true, 0, 0, "no");
}

function multipleScreenPopup(url, title, w, h, centered = true, moveRight = 0, moveDown = 0, resizable = "no") {
    // Fixes dual-screen position                         Most browsers      Firefox
    let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    let left = 0;
    let top = 0;
    if (centered === true) {
        left = ((width / 2) - (w / 2)) + dualScreenLeft;
        top = ((height / 2) - (h / 2)) + dualScreenTop;
    } else {
        left = dualScreenLeft + moveRight;
        top = dualScreenTop + moveDown;
    }

    let newWindow = window.open(url, title, 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=' + resizable + ', width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }

}

