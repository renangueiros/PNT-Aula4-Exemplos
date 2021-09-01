// Importação da biblioteca READLINE.
var readline = require('readline')

// Inicialização e configuração da conexão com a biblioteca READLINE.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Utilização da biblioteca READLINE para ler entradas do usuário através da
// linha de comando.
rl.question('Qual o seu nome? ', function (nome) {
    // Mostrar uma mensagem na linha de comando.
    console.log(`Olá, ${nome}! Boas vindas ao mundo do JavaScript.`)

    // Fechando a conexão com a biblioteca
    rl.close();
})
