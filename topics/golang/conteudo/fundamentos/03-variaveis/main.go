package main

import "fmt"

func main() {
	// _   <- blank identifier

	_, erros := fmt.Println("Hello World", "Oi galera", 2)

	fmt.Println(erros)
}
