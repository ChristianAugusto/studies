/* eslint-disable */

function topic() {
  // Tipos básicos (aqui ocorre inferência de tipos)
  let nome: string = "Luiz"; // Qualquer tipo de strings: '' "" ``
  let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
  let adulto: boolean = true; // true ou false
  let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
  // let big: bigint = 10n; // bigint

  // Arrays
  let arrayDeNumeros: Array<number> = [1, 2, 3];
  let arrayDeNumeros2: number[] = [1, 2, 3];
  let arrayDeStrings: Array<string> = ["a", "b"];
  let arrayDeStrings2: string[] = ["a", "b"];

  // Objetos
  let pessoa: { nome: string; idade: number; adulto?: boolean } = {
    idade: 30,
    nome: "Luiz",
  };

  // Funções
  function soma(x: number, y: number): number {
    return x + y;
  }
  const soma2: (x: number, y: number) => number = (x, y) => x + y; // usando anotação de tipo
  const soma3 = (x: number, y: number): number => x + y; // inferindo tipo

  console.log(`soma: ${soma(2, 2)}`);
  console.log(`soma2: ${soma2(2, 2)}`);
  console.log(`soma3: ${soma3(2, 2)}`);
}

export default topic;
