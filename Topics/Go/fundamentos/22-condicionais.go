package main

import (
	"fmt"
)

func main() {
	x := 10

	if x < 100 {
		fmt.Println("menor que 100")
	}

	if (x < 100) {
		fmt.Println("menor que 100")
	}

	/*
	if (x < 0) {
		fmt.Println("negativo")
	}
	else if x == 0 {
		fmt.Println("zero")
	}
	else {
		fmt.Println("positivo")
	}
	*/ // Erro na posição do else


	if (x < 0) {
		fmt.Println("negativo")
	} else if x == 0 {
		fmt.Println("zero")
	} else {
		fmt.Println("positivo")
	}
}
