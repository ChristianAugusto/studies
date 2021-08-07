package main

import (
	"fmt"
)

var y int

func main() {
	type foo int

	var x foo

	fmt.Printf("%v, %T\n", x, x)

	x = 42

	fmt.Printf("%v\n", x)

	y = int(x)
	fmt.Printf("%v, %T\n", y, y)
}
