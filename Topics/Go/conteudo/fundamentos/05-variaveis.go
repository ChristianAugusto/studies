package main

import "fmt"

var a = "Package scope"

func main() {
	/*
	

	*/
	var b = "Codeblock scope"


	fmt.Printf("a) valor: %v, tipo: %T\n", a, a)
	fmt.Printf("b) valor: %v, tipo: %T\n", b, b)
}
