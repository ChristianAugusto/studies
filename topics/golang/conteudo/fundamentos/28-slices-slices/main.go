package main

import (
	"fmt"
)

func main() {
	// Slices

	slice := []string{"batata frita", "queijo", "tomate", "cebola", "acelga"}

	fmt.Println(slice[1:2])
	fmt.Println(slice[1:])
	fmt.Println(slice[:3])
	fmt.Println(slice[:])
}
