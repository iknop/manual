package com.docs.manual.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class TestController {

    @GetMapping("/test")
    public static String testPage(){
        return "test";
    }
}
