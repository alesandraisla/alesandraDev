let valor = null;

const ternario = valor > 10 ? "É verdade" : "É falso";

console.log(ternario)

const nullish = valor ?? "Ele é nulo!"

console.log(nullish)

let logica = true && true;
console.log(logica)

let logica2 = true && false;
console.log(logica2)

let logica3 = true || true;
console.log(logica3)

let logica4 = false || false;

console.log(logica4)

let pessoa = {
  nome: 'Suzy',
  idade: 27,
}

console.log(pessoa.cidade?.toString())