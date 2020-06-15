package main

import (
	"fmt"
)

func main() {
	x := []int{1, 2, 3, 4, 5}

	for indice, valor := range x {
		fmt.Println(indice, valor)
	}
}
