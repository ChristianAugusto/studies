package main

import (
	"fmt"
	"math"
	"reflect"
)

func main() {
	type hotdog int

	var a hotdog = 10

	fmt.Printf("%T\n", a)
	fmt.Printf("%v\n", a)

	// var b int = hotdog // Erro
	var b int = int(a)
	fmt.Printf("%v\n", b)

	inteiro := 32000

	fmt.Printf("Literal inteiro é %v\n", reflect.TypeOf(inteiro))
	fmt.Printf("O tamanho mpaximo do int64 é = %v\n", math.MaxInt64)
}
