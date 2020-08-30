package main

import (
	"fmt"
)

func main() {
	x := 10

	switch {
	case x == 10:
		fmt.Println("10")
	case x > 0:
		fmt.Println("10")
	}

	switch false {
	case x == 10:
		fmt.Println("10")
	case x > 0:
		fmt.Println("10")
	default:
		fmt.Println("default")
	}
}
