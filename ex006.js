// Importação e inicialização da biblioteca PROMPT-SYNC.
var prompt = require('prompt-sync')()

// Utilização da biblioteca PROMPT-SYNC para ler estradas do usuário através da
// linha de comando.
var multiplicador = prompt("Digite um número: ")

// Lanço de repetição PARA.
//
// Nesse caso é declarado um contador que começa no valor 1 e repete até que o
// valor do contador seja menor ou igual a 10, sendo que a cada repetição o
// valor do contador é acrescido de 1 em 1.
for (var contador = 1; contador <= 10; contador++) {
    // Declaração da variável multiplicando, com o valor igual ao contador,
    // apenas para um melhor entendimento de como funciona o programa.
    var multiplicando = contador;

    // Mostrar um mensagem na linha de comando.
    //
    // Cada linha calcula e mostra a multiplicação de acordo com o número inserido
    // pelo usuário.
    console.log(
        `${multiplicador} x ${multiplicando} = ${multiplicador * contador}`
    )
}
