package main

import (
	"fmt"
)

func main() {

	var b byte = 3

	fmt.Println(b)

	b += 3
	fmt.Println(b)

	b -= 3
	fmt.Println(b)

	b /= 3
	fmt.Println(b)

	b *= 3
	fmt.Println(b)

	b %= 2
	fmt.Println(b)

	x, y := 2, 3

	fmt.Println(x)
	fmt.Println(y)

	fmt.Println("---------------------------")

	// troca
	x, y = y, x

	fmt.Println(x)
	fmt.Println(y)
}
