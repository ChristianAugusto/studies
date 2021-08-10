package main

import (
	"fmt"
	"math"
)

func main() {
	// var a float64 = 1
	// var b float64 = 12
	// var c float64 = -13

	var a float64 = 2
	var b float64 = -16
	var c float64 = -18

	var delta float64 = b*b - 4*a*c

	fmt.Printf("delta = %v\n", delta)

	if delta < 0 {
		fmt.Println("Não existe raízes reais")
	} else if delta == 0 {
		var x float64 = -b / 2 * a

		fmt.Printf("x = %v\n", x)
	} else {
		var x1 float64 = (-b + math.Sqrt(delta)) / (2 * a)
		var x2 float64 = (-b - math.Sqrt(delta)) / (2 * a)

		fmt.Printf("x1 = %v\n", x1)
		fmt.Printf("x2 = %v\n", x2)
	}
}
