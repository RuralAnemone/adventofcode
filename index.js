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

elf.split.map()

arr.forEach(e => {
  max = Math.max(max,e)
})

console.log(max)
console.log()
console.timeEnd("time")