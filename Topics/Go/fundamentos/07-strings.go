package main

import (
	"fmt"
)

func main() {
	a := "Maneira 1"
	b := `Maneira 2`

	fmt.Printf("%v, %T", a, a)
	fmt.Printf("%v, %T", b, b)
}
