package main

import (
	"fmt"
	"strings"
)


func indexAfter(origin, target string, minimum int) int {
	return strings.Index(origin[minimum+1:], target)
}

func main() {
	index := lastIndexAfter("Hello World", "World", 4)
	fmt.Println(index)
}