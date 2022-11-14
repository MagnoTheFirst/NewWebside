package ch.my.side.myside.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomepageController {

    @RequestMapping("/test")
    public String getLandingPage(){
        return "index";
    }

}
