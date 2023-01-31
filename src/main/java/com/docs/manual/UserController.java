package com.docs.manual;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/user")
@Controller
public class UserController {



    // 예정의뢰: 병합하기
    @GetMapping("/reception")
    public static String reception() {
        return "manual/user/reception";
    }

    // 완료의뢰
    @GetMapping("/referrals")
    public static String referrals() {
        return "manual/user/referrals";
    }

    // 조회하기
    @GetMapping("/statistics")
    public static String statistics() {
        return "manual/user/statistics";
    }

    // 소견서 출력
    @GetMapping("/referralReport")
    public static String referralReport() {
        return "manual/user/referralReport";
    }

    // 공지사항
    @GetMapping("/serviceManage")
    public static String serviceManage() {
        return "manual/user/serviceManage";
    }


    // 마이페이지
    @GetMapping("/myPage")
    public static String myPage() {
        return "manual/user/myPage";
    }


}
