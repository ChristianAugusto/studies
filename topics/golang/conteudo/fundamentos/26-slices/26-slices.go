package main

import (
	"fmt"
)

func main() {
	// Slices

	x := []int{99, 99, 99, 99, 99}
	fmt.Println(x)

	fmt.Println("len(x) = ", len(x))

	// x[5] = 2 // Out of range

	x = append(x, 1)

	fmt.Println(x[5])

	fmt.Println("len(x) = ", len(x))
}
