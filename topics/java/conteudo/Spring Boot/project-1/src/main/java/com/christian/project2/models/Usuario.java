package com.christian.project2.models;

public class Usuario {
    private String nome;
    private String usuario;
    private String senha;
    private int idade;

    public Usuario(String nome, String usuario, String senha, int idade) {
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
        this.idade = idade;
    }

    public String getNome() {
        return this.nome;
    }

    public String getUsuario() {
        return this.usuario;
    }

    // public String getSenha() { // Comentar o getter não será usado o atributo no JSON
    //     return this.senha;
    // }

    public int getIdadee() {// Escrever o nome errado do getter muda o nome no JSON
        return this.idade;
    }
}