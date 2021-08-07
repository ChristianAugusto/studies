package main

import (
	"fmt"
)

func main() {
	// Arrays em go são fixos e homogêneos

	var x [5]int
	y := [...]int{1, 2, 3, 4, 5} // compilador conta

	x[0] = 2

	fmt.Println(x)
	fmt.Println(y)

	fmt.Printf("%T\n", x)

	fmt.Println("len(x) =", len(x))

	var notas [3]float64
	total := 0.0

	notas[0], notas[1], notas[2] = 7.8, 4.3, 9.1

	// for i := 0; i < len(notas); i++ {
	// 	total += notas[i]
	// }

	for _, numero := range notas {
		total += numero
	}

	media := total / float64(len(notas))

	fmt.Println(media)
}
