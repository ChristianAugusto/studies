package main

import (
	"fmt"
)



func main() {
	type hotdog int

	var a hotdog = 10

	fmt.Printf("%T\n", a)
	fmt.Printf("%v\n", a)


	// var b int = hotdog // Erro
	var b int = int(a)
	fmt.Printf("%v\n", b)
}
