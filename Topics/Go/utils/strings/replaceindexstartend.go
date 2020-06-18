package main

import (
	"fmt"
)

func replaceIndex(origin, replacement string, start, end int) string {
    originRune := []rune(origin)
    replacementRune := []rune(replacement)

    originLen := len(originRune)
	replacementLen := len(replacementRune)

	newRune := []rune("")

    for i, j := 0, 0; i < originLen; i++ {
		if (i >= start && i <= end) {
			if (j < replacementLen) {
				newRune = append(newRune, replacementRune[j])
				j++
			} else {
				continue
			}
		} else {
			newRune = append(newRune, originRune[i])
		}
    }

    return string(newRune)
}

func main() {
	str := "Hello World"

	fmt.Println(replaceIndex(str, "foo", 0, 5))
}