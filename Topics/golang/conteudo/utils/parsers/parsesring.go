package main

import (
	"fmt"
	"strconv"
)

func main() {
	str := strconv.Itoa(20)

	fmt.Printf("%v, %T\n", str, str)
}