package com.christian.project2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/exemplo")
public class SegundoController {

    @GetMapping (value = "/{nome}") // A variável nome no parâmetro poderia ter outra identificação, porém a convenção é colocar o mesmo
    public String exemplo (@PathVariable("nome") String nome) {
        return "Olá " + nome ;
    }
}