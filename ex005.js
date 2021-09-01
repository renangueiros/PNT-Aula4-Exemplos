// Importação e inicialização da biblioteca PROMPT-SYNC.
var prompt = require('prompt-sync')()

// Utilização da biblioteca PROMPT-SYNC para ler estradas do usuário através da
// linha de comando.
var multiplicador = prompt("Digite um número: ")

// Mostrar mensagens na linha de comando.
//
// Cada linha calcula e mostra a multiplicação de acordo com o número inserido
// pelo usuário.
console.log(`${multiplicador} x 1 = ${multiplicador * 1}`)
console.log(`${multiplicador} x 2 = ${multiplicador * 2}`)
console.log(`${multiplicador} x 3 = ${multiplicador * 3}`)
console.log(`${multiplicador} x 4 = ${multiplicador * 4}`)
console.log(`${multiplicador} x 5 = ${multiplicador * 5}`)
console.log(`${multiplicador} x 6 = ${multiplicador * 6}`)
console.log(`${multiplicador} x 7 = ${multiplicador * 7}`)
console.log(`${multiplicador} x 8 = ${multiplicador * 8}`)
console.log(`${multiplicador} x 9 = ${multiplicador * 9}`)
console.log(`${multiplicador} x 10 = ${multiplicador * 10}`)
