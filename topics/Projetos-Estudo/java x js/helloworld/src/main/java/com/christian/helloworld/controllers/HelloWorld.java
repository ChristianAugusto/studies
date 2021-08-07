package com.christian.helloworld.controllers;

import com.christian.helloworld.models.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloWorld {

    @GetMapping(path = {"/", ""})
    public ApiResponse get() {
        return new ApiResponse("hello world");
    }
}