package main


import "fmt"


type Vertex struct {
	foo string
}

func teste() *Vertex  {
	return &Vertex{ "foo" }
}

func main()  {
	fmt.Println(teste())
}
