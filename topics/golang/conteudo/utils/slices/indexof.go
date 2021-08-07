package main

import "fmt"


func indexOf(slice []int, target int) int {
	for index, value := range slice {
		if (value == target) {
			return index
		}
	}

	return -1
}

func main() {
	foo := []int{1, 2}

	fmt.Printf("%T", foo)
}
