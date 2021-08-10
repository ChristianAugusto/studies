package main

import (
	"fmt"
	"math"
)

func main() {

	var a float64 = 3
	var b float64 = 2

	fmt.Println("Soma =>", a+b)
	fmt.Println("Subtração =>", a-b)
	fmt.Println("Divisão =>", a/b)
	fmt.Println("Multiplicação =>", a*b)
	fmt.Println("Módulo =>", a%b)

	// Math
	fmt.Println("Maior =>", math.Max(a, b))
	fmt.Println("Menor =>", math.Min(a, b))
	fmt.Println("Exponenciação =>", math.Pow(a, b))
	fmt.Println("Radiciação =>", math.Sqrt(c))
}
