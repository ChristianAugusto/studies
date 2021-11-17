package main

import (
	"encoding/json"
	"fmt"
	"time"
)

type Tipo1 struct {
	Attr1 string
	Attr2 int
	Attr3 time.Time
	Attr4 string
}

type Tipo2 struct {
	Attr1 string    `json:"attr1"`
	Attr2 int       `json:"attr2"`
	Attr3 time.Time `json:"attr3"`
	Attr4 string    `json:"attr4"`
}

type Tipo3 struct {
	Attr1 string    `json:"attr1"`
	Attr2 int       `json:"attr2"`
	Attr3 time.Time `json:"attr3"`
	Attr4 string    `json:"attr4,omitempty"`
}

type Tipo4 struct {
	Attr1 *string    `json:"attr1"`
	Attr2 *int       `json:"attr2"`
	Attr3 *time.Time `json:"attr3"`
	Attr4 *string    `json:"attr4,omitempty"`
}

func main() {
	fmt.Println("Exemplo 1")

	exemplo1, _ := json.Marshal(true)
	fmt.Println(string(exemplo1))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 2")

	exemplo2, _ := json.Marshal([]string{"apple", "peach", "pear"})
	fmt.Println(string(exemplo2))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 3")

	exemplo3, _ := json.Marshal(Tipo1{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
		Attr4: "pamonha",
	})
	fmt.Println(string(exemplo3))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 4")

	exemplo4, _ := json.Marshal(Tipo1{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
	})
	fmt.Println(string(exemplo4))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 5")

	exemplo5, _ := json.Marshal(Tipo1{
		Attr1: "foo",
		Attr2: 1,
		Attr4: "pamonha",
	})
	fmt.Println(string(exemplo5))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 6")

	exemplo6, _ := json.Marshal(Tipo2{
		Attr1: "foo",
		Attr2: 1,
		Attr4: "pamonha",
	})
	fmt.Println(string(exemplo6))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 7")

	exemplo7, _ := json.Marshal(Tipo2{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
		Attr4: "pamonha",
	})
	fmt.Println(string(exemplo7))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 8")

	exemplo8, _ := json.Marshal(Tipo2{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
	})
	fmt.Println(string(exemplo8))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 9")

	exemplo9, _ := json.Marshal(Tipo3{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
	})
	fmt.Println(string(exemplo9))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 10")

	exemplo10, _ := json.Marshal(Tipo3{
		Attr1: "foo",
		Attr2: 1,
	})
	fmt.Println(string(exemplo10))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 11")

	attr1 := "foo"
	attr2 := 1
	attr3 := time.Now()
	attr4 := "pamonha"

	exemplo11, _ := json.Marshal(Tipo4{
		Attr1: &attr1,
		Attr2: &attr2,
		Attr3: &attr3,
		Attr4: &attr4,
	})

	fmt.Println(string(exemplo11))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 12")

	exemplo12, _ := json.Marshal(Tipo3{
		Attr1: "foo",
		Attr2: 1,
		Attr3: time.Now(),
		Attr4: "",
	})

	fmt.Println(string(exemplo12))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 13")

	attr2 = 1
	attr3 = time.Now()

	exemplo13, _ := json.Marshal(Tipo4{
		Attr2: &attr2,
		Attr3: &attr3,
	})

	fmt.Println(string(exemplo13))

	fmt.Println("-------------------------------")

	fmt.Println("Exemplo 14")

	attr2 = 1
	attr3 = time.Now()
	attr4 = ""

	exemplo14, _ := json.Marshal(Tipo4{
		Attr2: &attr2,
		Attr3: &attr3,
		Attr4: &attr4,
	})

	fmt.Println(Tipo4{
		Attr2: &attr2,

		Attr3: &attr3,
	})

	fmt.Println(string(exemplo14))
}
