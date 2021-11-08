package main

import (
	"fmt"
	"main/pamonha"
)

func main()  {
	a := pamonha.Pamonha{}
	fmt.Println(a)
	// fmt.Println(a.x) // Erro
	fmt.Println(a.Teste_x())

	fmt.Println("----------------------------")

	fmt.Println(a.Teste_Y())
	a.Y = 2
	fmt.Println(a.Teste_Y())
}
