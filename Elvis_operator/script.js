let valor = null;

let condicao = valor > 10 ? "Retorne a primeira expressão" : "Retorne a segunda"

console.log(condicao)

/**================== */


let segundaCondicao = valor ?? "Retorna aqui!!"

console.log(segundaCondicao)

/**================== */


let operadores = true || false;

console.log(operadores)

/**================== */


let pessoa = {
  nome: 'Suzy',
  idade: 28,
}

console.log(pessoa.cidade?.toString())
