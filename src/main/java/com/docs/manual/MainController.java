package com.docs.manual;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/manual")
@Controller
public class MainController {

    @GetMapping("/")
    public static String index(Model model) {
        model.addAttribute("data", "Hello Spring!");
        return "index";
    }

    // 예정의뢰
    @GetMapping("/reception")
    public static String navTest() {
        return "manual/reception";
    }

    // 완료의뢰
    @GetMapping("/referrals")
    public static String referrals() {
        return "manual/referrals";
    }

    // 조회하기
    @GetMapping("/statistics")
    public static String statistics() {
        return "manual/statistics";
    }

    // 소견서 출력
    @GetMapping("/referralReport")
    public static String referralReport() {
        return "manual/referralReport";
    }
    // 공지사항
    @GetMapping("/serviceManage")
    public static String serviceManage() {
        return "manual/serviceManage";
    }
    // 고객지원
    @GetMapping("/support")
    public static String support() {
        return "manual/support";
    }
    // 마이페이지
    @GetMapping("/myPage")
    public static String myPage() {
        return "manual/myPage";
    }
}
