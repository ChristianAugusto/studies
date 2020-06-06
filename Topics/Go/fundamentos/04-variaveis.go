package main

import "fmt"

func main() {
	/*
	:=

	- O símbolo (marmota) de declaração infere o tipo pelo falor que foi passado
	- Só é possível usa-lo dentro de um bloco de código

	*/

	a := 16
	b := "strings"
	c := true

	fmt.Println(a, b, c)


	fmt.Printf("a) valor: %v, tipo: %T\n", a, a)
	fmt.Printf("b) valor: %v, tipo: %T\n", b, b)


	// a := 10 // Erro, não pode redeclarar
	// a = 10 // Apenas uma atribuação

	a, d := 10, 30

	fmt.Printf("a) valor: %v, tipo: %T\n", a, a)
	fmt.Printf("d) valor: %v, tipo: %T\n", d, d)
}
