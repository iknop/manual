package com.docs.manual.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin")
@Controller
public class AdminController {
    /*원격판독*/

    // 의뢰목록 > 일반의뢰
    @GetMapping("/managers")
    public static String managers() {
        return "manual/admin/remoteReading/referrals/managers";
    }

    // 의뢰목록 > 일반의뢰 > 상세보기
    @GetMapping("/managers/moreInfo")
    public static String moreInfo() {
        return "manual/admin/remoteReading/referrals/managers/moreInfo";
    }

    // 의뢰목록 > 응급의뢰
    @GetMapping("/emergencies")
    public static String emergencies() {
        return "manual/admin/remoteReading/referrals/emergencies";
    }

    // 의뢰현황 > 미배정의뢰
    @GetMapping("/status/notArrange")
    public static String notArrange() {
        return "manual/admin/remoteReading/status/notArrange";
    }

    // 의뢰현황 > CVR 현황
    @GetMapping("/status/cvr")
    public static String cvr() {
        return "manual/admin/remoteReading/status/cvr";
    }

    // 의뢰현황 > 판독지연
    @GetMapping("/status/delay")
    public static String delay() {
        return "manual/admin/remoteReading/status/delay";
    }

    // 의뢰현황 > 판독불가
    @GetMapping("/status/reject")
    public static String reject() {
        return "manual/admin/remoteReading/status/reject";
    }

    // 의뢰현황 > 주요병원의뢰
    @GetMapping("/status/importance")
    public static String importance() {
        return "manual/admin/remoteReading/status/importance";
    }

    // 의뢰량 통계 > 주간 의뢰량
    @GetMapping("/statistics/week")
    public static String statisticsWeek() {
        return "manual/admin/remoteReading/referralStatistics/week";
    }
    // 의뢰량 통계 > 월간 의뢰량
    @GetMapping("/statistics/month")
    public static String statisticsMonth() {
        return "manual/admin/remoteReading/referralStatistics/month";
    }
    // 판독의 통계 > 월별 판독량
    @GetMapping("/statistics/month/readingDr")
    public static String statisticsMonthDr(){
        return "manual/admin/remoteReading/drStatistics/month";
    }
    // 판독의 통계 > 시간별 판독량
    @GetMapping("/statistics/time/readingDr")
    public static String statisticsTimeDr(){
        return "manual/admin/remoteReading/drStatistics/time";
    }
    // 판독의 통계 > 요일별 판독량
    @GetMapping("/statistics/day/readingDr")
    public static String statisticsDayDr(){
        return "manual/admin/remoteReading/drStatistics/day";
    }
    // 판독의 통계 > Modality별 판독량
    @GetMapping("/statistics/modality/readingDr")
    public static String statisticsModalityDr(){
        return "manual/admin/remoteReading/drStatistics/modality";
    }
}
