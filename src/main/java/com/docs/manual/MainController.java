package com.docs.manual;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/manual")
@Controller
public class MainController {

    // 시작하기
    @GetMapping("/start")
    public static String start() {
        return "manual/start";
    }

    // 로그인
    @GetMapping("/login")
    public static String login() {
        return "manual/login";
    }

    // 테스트 - 예정의뢰: 병합하기
    @GetMapping("/reception")
    public static String navTest() {
        return "example/reception";
    }

    // 완료의뢰
    @GetMapping("/referrals")
    public static String referrals() {
        return "example/referrals";
    }

    // 조회하기
    @GetMapping("/statistics")
    public static String statistics() {
        return "example/statistics";
    }

    // 소견서 출력
    @GetMapping("/referralReport")
    public static String referralReport() {
        return "example/referralReport";
    }

    // 공지사항
    @GetMapping("/serviceManage")
    public static String serviceManage() {
        return "example/serviceManage";
    }

    // 고객지원
    @GetMapping("/support")
    public static String support() {
        return "example/support";
    }

    // 마이페이지
    @GetMapping("/myPage")
    public static String myPage() {
        return "example/myPage";
    }


}
