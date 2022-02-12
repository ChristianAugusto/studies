package main

import (
	"fmt"
)

type Foo struct {
	A string
}

func main() {
	fmt.Println(Foo{})
	fmt.Println(Foo{A: "a"})

	fmt.Println(Foo{} == Foo{})
	fmt.Printf("Foo{A:\"a\"} == Foo{A:\"b\"} = %v\n", Foo{A: "a"} == Foo{A: "b"})
	fmt.Println(&Foo{} == &Foo{})

	if (Foo{}) == (Foo{}) {
		fmt.Println(true)
	} else {
		fmt.Println(true)
	}

	fmt.Println("----------------")

	foo := &Foo{}
	foo2 := foo

	fmt.Println(foo == foo2)
}
