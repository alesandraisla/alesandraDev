// Create a Set
let mySet = new Set(["a","b","c", "c", "c"])
console.log(mySet)

console.log("----------------------------------------------------------")

/** Add */

mySet.add(1)
mySet.add(1)
mySet.add("z")
mySet.add("y")

console.log(mySet)

console.log("----------------------------------------------------------")

/**values */

let myValues = mySet.values()
console.log(myValues)

let myList= ""
for (const iterator of myValues) {
  myList += iterator
}

console.log(myList)

console.log("----------------------------------------------------------")

let mySecondList = new Set(["a","b","c"]);

let text = ""

mySecondList.forEach(function(value) {
  text += value + "; ";
})

console.log(text)