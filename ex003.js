// Importação da biblioteca PROMPT.
var prompt = require('prompt')

// Inicialização da biblioteca PROMPT.
prompt.start()

// Utilização da biblioteca PROMPT para ler entradas do usuário através da
// linha de comando.
prompt.get(['Nome', 'Sobrenome'], function (erro, resultado) {
    // Guardar os valores recebidos através da biblioteca PROMPT e inseridos
    // pelo usuário.
    var nome = resultado.Nome
    var sobrenome = resultado.Sobrenome

    // Mostrar uma mensagem na linha de comando.
    console.log(`Seu nome completo é: ${nome} ${sobrenome}`)
})
