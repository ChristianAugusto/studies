package main

import (
	"fmt"
	"strconv"
)

func main() {
	inteiro, _ := strconv.Atoi("200")

	fmt.Printf("%v, %T\n", inteiro, inteiro)
}