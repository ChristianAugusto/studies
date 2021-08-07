package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(strings.Trim("¡¡¡Hello, Gophers!!!", "!¡"))
	fmt.Println(strings.Trim(" Hello World ", " "))
}