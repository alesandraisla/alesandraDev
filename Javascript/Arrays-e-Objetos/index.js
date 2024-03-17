const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const notes = [1.5, 7.353454, 8.42343, 5, 6, 7.32443]

const numberAdd = numbers.map(num => num + 2)
const numberDecrease = numbers.map(num => num - 2)
const numberMultiply = numbers.map(num => num * 2)
const numberDivide = numbers.map(num => num / 2)

const numberTransformer = numbers.map(function(numbers){
  return String(numbers)
})

const rounded = notes.map(function(notes) {
  return Math.round(notes)
})


console.log(numberAdd)
console.log(numberDecrease)
console.log(numberMultiply)
console.log(numberDivide)
console.log(numberTransformer)
console.log(rounded)
