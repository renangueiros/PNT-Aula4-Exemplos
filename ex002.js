// Importação da biblioteca READLINE.
var readline = require('readline')

// Inicialização e configuração da conexão com a biblioteca READLINE.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Utilização da biblioteca READLINE para ler entradas do usuário através da 
// linha de comando.
rl.question('Qual sua nota 1? ', function (nota1) {
    rl.question('Qual sua nota 2? ', function (nota2) {
        // Calcular a média entre as duas notas.
        var media = (Number(nota1) + Number(nota2)) / 2

        // Mostrar uma mensagem na linha de comando.
        console.log(`Sua média é de ${media}`)

        // Fechando a conexão com a biblioteca READLINE.
        rl.close();
    })
})