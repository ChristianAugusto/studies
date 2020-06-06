package main

import "fmt"

func main() {
	// :=   <- operador curto de declaração

	numeroBytes, erros := fmt.Println("Hello World", "Oi galera", 2)

	fmt.Println(numeroBytes, erros)
}
