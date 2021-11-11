package ola

import "testing"

func TestExecutar(t *testing.T)  {
	resultado := Executar()
	esperado := "Olá, mundo"

	if resultado != esperado {
		t.Errorf("resultado '%s', esperado '%s'", resultado, esperado)
	}
}
