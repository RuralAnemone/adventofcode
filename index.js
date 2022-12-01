const fs = require('fs')
const elf = fs.readFileSync("./elf.txt", "utf-8")
console.time("time")
var arr = []
var max = 0;

function bblSort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length-i-1; j++){
      if (arr[j] > arr[j+1]) {  
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

elf.split("\n\n").forEach(e => {
  let sum = 0;
  e.split("\n").forEach(c => {
    sum += parseInt(c)
  })
  arr.push(sum);
})

console.log(elf.includes("\n\n"))

// elf.split("\n\n").map()

arr = bblSort(arr);

console.log("max:",arr[0])

console.timeEnd("time")