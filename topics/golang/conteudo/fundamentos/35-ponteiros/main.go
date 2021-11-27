package main

import "fmt"

type TesteA struct {
	foo int
}

func incremento(a *int)  {
	*a++
}

func testeA(a TesteA)  {
	a.foo = 2
}

func main() {
	i, j := 42, 2701

	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i

	p = &j         // point to j
	*p = *p / 37   // divide j through the pointer
	fmt.Println(j) // see the new value of j

	// Go has no pointer arithmetic
	// p++

	fmt.Println("-------------------------")

	c := 1
	fmt.Println(c)
	incremento(&c)
	fmt.Println(c)

	fmt.Println("-------------------------")

	d := TesteA{}
	fmt.Println(d)
	testeA(d)
	fmt.Println(d)
}
