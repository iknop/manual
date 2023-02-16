package com.docs.manual.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin")
@Controller
public class AdminController {

    // 원격판독 > 의뢰목록 > 일반의뢰
    @GetMapping("/managers")
    public static String managers() {
        return "manual/admin/referrals/managers";
    }

    // 원격판독 > 의뢰목록 > 일반의뢰 > 상세보기
    @GetMapping("/managers/moreInfo")
    public static String moreInfo() {
        return "manual/admin/referrals/managers/moreInfo";
    }

    // 원격판독 > 의뢰목록 > 응급의뢰
    @GetMapping("/emergencies")
    public static String emergencies() {
        return "manual/admin/referrals/emergencies";
    }

    // 원격판독 > 의뢰현황 > 미배정의뢰
    @GetMapping("/status/notArrange")
    public static String notArrange() {
        return "manual/admin/status/notArrange";
    }

    // 원격판독 > 의뢰현황 > CVR 현황
    @GetMapping("/status/cvr")
    public static String cvr() {
        return "manual/admin/status/cvr";
    }

    // 원격판독 > 의뢰현황 > 판독지연
    @GetMapping("/status/delay")
    public static String delay() {
        return "manual/admin/status/delay";
    }

    // 원격판독 > 의뢰현황 > 판독불가
    @GetMapping("/status/reject")
    public static String reject() {
        return "manual/admin/status/reject";
    }

    // 원격판독 > 의뢰현황 > 주요병원의뢰
    @GetMapping("/status/importance")
    public static String importance() {
        return "manual/admin/status/importance";
    }

    // 원격판독 > 의뢰량 통계 > 주간 의뢰량
    @GetMapping("/statistics/week")
    public static String statisticsWeek() {
        return "manual/admin/referralStatistics/week";
    }
    // 원격판독 > 의뢰량 통계 > 월간 의뢰량
    @GetMapping("/statistics/month")
    public static String statisticsMonth() {
        return "manual/admin/referralStatistics/month";
    }
}
