Exemplos feitos na **Aula 4** da matéria de **Programação em Novas Tecnologias** do curso de **Desenvolvimento de Sistemas** da **ETE Ariano Suassuna**.

- **Observação:** Para um melhor entendimento vamos considerar que bibliotecas e pacotes são a mesma coisa.

## Resumo

Para se utilizar bibliotecas em **Node.js** você deve utilizar o **npm**, que é o gerenciador de pacotes oficial do **Node.js**.

Para começar a utilizar o **npm**, primeiro se tem que configurar a pasta utilizada como um pacote gerenciável pelo **npm**. Para fazer isso basta utilizar o seguinte comando:

```
npm init -y
```

Após inicializadas as configurações do **npm**, é possível fazer a instalação de bibliotecas utilizando o seguinte comando:

```
npm install nome-do-pacote
```

Nos exemplos da aula foram utilizadas três bibliotecas para ler entradas do usuário através da linha de comando, sendo elas: READLINE, PROMPT e PROMPT-SYNC.

A biblioteca READLINE já é uma biblioteca padrão do Node.js, sendo assim para utilizá-la não é necessária nenhuma instação.

Segue o comando para instalação da biblioteca PROMPT:

```
npm install prompt
```

Segue o comando para instalação da biblioteca PROMT-SYNC:

```
npm install prompt-sync
```

## Exemplos

### Exemplo 01 - [ex001.js](./ex001.js)

Utilização da Biblioteca READLINE para criar um programa que leia o nome do usuário e mostrar uma mensagem de boas vindas para ele.

### Exemplo 02 - [ex002.js](./ex002.js)

Utilização da Biblioteca READLINE para criar um programa que leia duas notas do usuário e mostre a média delas.

### Exemplo 03 - [ex003.js](./ex003.js)

Utilização da Biblioteca PROMPT para criar um programa que leia separadamente o nome e o sobrenome do usuário e mostre para ele o seu nome completo.

### Exemplo 04 - [ex004.js](./ex004.js)

Utilização da Biblioteca PROMPT-SYNC para criar um programa que leia dois números inseridos pelo usuário e mostre o produto da multiplicação entre eles.

### Exemplo 05 - [ex0015js](./ex005.js)

Utilização da Biblioteca PROMPT-SYNC para criar um programa que leia um número inserido pelo usuário e mostre a tabuada dele.

### Exemplo 06 - [ex006.js](./ex006.js)

Utilização da Biblioteca PROMPT-SYNC para criar um programa que leia um número inserido pelo usuário e mostre a tabuada dele (utilizando estrutura de repetição).

## Observações

Se você baixar este repositório para rodar na sua máquina você deve ter o [Node.jS](https://nodejs.org/) instalado como pré-requisito, e depois de baixar o repositório você deve rodar o seguinte comando:

```
npm install
```

Para que o *npm* instale todas as bibliotecas utilizadas nos exemplos.