package com.oldhu.demo;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @RequestMapping("/api/v1/login")
    public Result login(@RequestParam(value="name", defaultValue="no user") String name) {
        return new Result(0, name + " login ok");
    }
}