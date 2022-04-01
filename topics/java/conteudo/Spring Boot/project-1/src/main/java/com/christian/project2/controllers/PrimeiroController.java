package com.christian.project2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/* Marca a classe como controlador REST */
@RestController
public class PrimeiroController {

    // @RequestMapping
    // @RequestMapping(method = RequestMethod.GET, path = "/ola")
    // @GetMapping(path = "/ola")
    @GetMapping(path = {"/ola", "/saudacao"})
    public String ola() {
        return "Olá Spring Boot";
    }
}