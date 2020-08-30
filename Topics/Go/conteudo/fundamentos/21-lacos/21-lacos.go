package main

import (
	"fmt"
)

func main() {
	// No go existe apenas for

	for x := 0; x < 10; x++ {
		fmt.Println(x)
	}

	// fmt.Println(x) // x visível apenas dentro do loop

	// Gambiarra para while
	i := 0
	for i < 10 {
		fmt.Println(i)

		i++
	}
}
