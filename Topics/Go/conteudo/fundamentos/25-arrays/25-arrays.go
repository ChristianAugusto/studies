package main

import (
	"fmt"
)

func main() {
	// Arrays em go são fixos e homogêneos

	var x [5]int
	y := [5]int{1, 2, 3, 4, 5}

	x[0] = 2

	fmt.Println(x)
	fmt.Println(y)

	fmt.Printf("%T\n", x)

	fmt.Println("len(x) =", len(x))
}
