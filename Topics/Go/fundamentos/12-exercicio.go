package main

import (
	"fmt"
)


func main() {
	type foo int

	var x foo


	fmt.Printf("%v, %T\n", x, x)

	x = 42

	fmt.Printf("%v\n", x)
}
