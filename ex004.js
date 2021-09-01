// Importação e inicialização da biblioteca PROMPT-SYNC.
var prompt = require('prompt-sync')()

// Utilização da biblioteca PROMPT-SYNC para ler entradas do usuário através da
// linha de comando.
var num1 = prompt('Digite um número: ')
var num2 = prompt('Digite outro número: ')

// Multiplicação das varíaveis inseridas pelo usuário.
var produto = num1 * num2

// Mostrar uma mensagem na linha de comando.
console.log(`A multiplicação entre ${num1} e ${num2} é igual a ${produto}`)
