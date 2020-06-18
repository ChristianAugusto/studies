package main

import "fmt"



func main() {
	str := "Hello World"

	w := []rune(str)

	fmt.Println(w)
	fmt.Println(string(w))
	fmt.Println([]rune(" ")[0])
}
