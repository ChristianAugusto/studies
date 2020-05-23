package com.christian.project2.controllers;

import com.christian.project2.models.Usuario;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TerceiroController {

    @GetMapping(path = "/usuario")
    public Usuario ola() {
        return new Usuario("Christian", "christian", "1234", 19);
    }
}