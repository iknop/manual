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

    @GetMapping("/reception")
    public static String navTest() {
        return "manual/reception";
    }

    @GetMapping("/referrals")
    public static String referrals() {
        return "manual/referrals";
    }

    @GetMapping("/statistics")
    public static String statistics() {
        return "manual/statistics";
    }
}
