package main

import "fmt"

func main() {
	a := "§adeia de caracteres" // UTF-8 por padrão
	/*
		cada caracter é um número inteiro representando o código daquele caracter na tabela UTF-8.
	*/

	fmt.Println(a)

	fmt.Println("------------------------------------")

	for i, c := range a {
		fmt.Println(i, c)
	}

	fmt.Println("------------------------------------")

	b := []rune(a)
	/*
		GO fornece um tipo chamado de rune que é um type rune int32 e representa um codepoint. Para manipular a string
		temos que converter para slice de runes o slice de bytes inicial da string. w := []rune(s). Nós fizemos a
		conversão utilizando o type conversion do GO. Ao executar a tabela novamente vamos ter o code point real de cada
		caracter da string. Podemos declarar uma rune utilizando aspas simples'C'.
	*/

	for i, c := range b {
		fmt.Println(i, c, string(c))
	}
}
