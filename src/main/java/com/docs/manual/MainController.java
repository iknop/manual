package com.docs.manual;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

    @GetMapping("/")
    public static String index(Model model){
        model.addAttribute("data", "Hello Spring!");
        return "index";
    }

    @GetMapping("/nav")
    public static String navTest(){
        return "fragments/header";
    }

    @GetMapping("/test")
    public static String test(){
        return "test";
    }
}
