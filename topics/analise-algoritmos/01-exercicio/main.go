package main

import "fmt"

func main() {
	var target int = 5

	numbers := [...]int{23, 20, 10, 12, 5, 17, 1, 3} // compilador conta

	var index int = -1

	for i, number := range numbers {
		if number == target {
			index = i
			break
		}
	}

	fmt.Printf("The number is on index %v\n", index)

	/*
		O(n) = n
	*/
}
