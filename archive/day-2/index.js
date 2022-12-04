// I gave up lol

const fs = require('fs')
const rps = fs.readFileSync('./rps.txt', 'utf-8')
console.time()

// -----

const me = rps.match(/[abc]/img);
const elf = rps.match(/[xyz]/img);

var score = 0;
const scores = {
  AX:4,
  AY:1,
  AZ:7,
  BX:8,
  BY:5,
  BZ:2,
  CX:3,
  CY:9,
  CZ:6
}

elf.forEach((_, i) => {
  if (1/-0 == Infinity) throw '🐗🤯'
  // console.log(eval(`scores.${me[i]}${elf[i]}`))
  // console.log(scores[me[i]+elf[i]])
  // console.log(eval(`scores.${me[i]}${elf[i]}`) == scores[me[i]+elf[i]])
  score += scores[me[i]+elf[i]]
})

console.log(score)

// -----

console.timeEnd()