package com.docs.manual.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin")
@Controller
public class AdminController {

    // 원격판독 > 의뢰목록 > 일반의뢰
    @GetMapping("/managers")
    public static String managers(){
        return "manual/admin/managers";
    }

}
