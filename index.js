const fs = require('fs')
const elf = fs.readFileSync("./elf", "utf-8")
console.time("time")
var arr = []
var max = 0;

elf.split("\n\n").forEach(e => {
  let sum = 0;
  e.split("\n").forEach(c => {
    sum += parseInt(c)
  })
  arr.push(sum);
})

// elf.split("\n\n").map()

arr.forEach(e => {
  // sort
  
  // not sure why I just looked up "js bubble sort" uh
  // well anyways
  // this is actually my own thoughts though don't worry :)
  
})

console.log(max)
console.timeEnd("time")