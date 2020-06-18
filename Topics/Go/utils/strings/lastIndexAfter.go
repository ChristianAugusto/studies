package main

import (
	"fmt"
	"strings"
)


func lastIndexAfter(origin, target string, minimum int) int {
	return strings.LastIndex(origin[minimum+1:], target)
}

func main() {
	index := lastIndexAfter("Hello World", "World", 4)
	fmt.Println(index)
}