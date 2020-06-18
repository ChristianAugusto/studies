/*
Nomes exportados
Em Go, um nome é exportado se ele começa com uma letra maiúscula. Por exemplo, Pizza é um nome exportado, assim como Pi, que é exportado do pacote math.

pizza e pi não começam com uma letra maiúscula, logo eles não são exportados.

Ao importar um pacote, você pode referenciar apenas seus nomes exportados. Todos os nomes "não exportados" não são acessíveis de fora do pacote.

Execute o código. Observe a mensagem de erro.

Para corrigir o erro, renomeie math.pi para math.Pi e tente novamente.

*/


package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.Pi)
}
