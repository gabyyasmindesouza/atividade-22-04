// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function calculaArea (){
    const altura = Number(prompt("Qual a altura?"))
    const largura = Number(prompt("Qual a largura"))
    const resulArea = altura * largura
    return resulArea
}
console.log(resulArea)


// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function anos(){
    const anoAtual = Number(prompt("Qual o ano atual?"))
    const anoNascimento = Number(prompt("Qual ano você nasceu?"))
    const idade = anoAtual - anoNascimento
}
console.log(idade)

// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function imcc(){
    const peso = Number(prompt("Qual seu peso?"))
    const altura = Number(prompt("Qual a sua altura?"))
    const imc = peso / (altura * altura)
}
console.log(imc)

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function quatro(a, b) {
    const tamanhoIgual = Boolean(true)
    const tamanhoDiferente = Boolean(false)
    if (a.length == b.length) {
        return tamanhoIgual
    }
    else {
        return tamanhoDiferente
    }
}
console.log(quatro('gaby', 'GABY'))

// 5. Escreva uma função que recebe um array e retorna o último elemento.

function array() {
    const lista = ["elemento1", "elemento2", "elemento3"]
}
console.log(lista[2])

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function carteira() {
    const anoAtual = Number(prompt("Qual é o ano atual?"))
    const anoNascimento = Number(prompt("Qual é seu ano de nascimento?"))
    const anoCarteira = Number(prompt("Qual ano a sua carteira de identidade foi emitida"))
    const idade = anoAtual - anoNascimento
    const idadeCarteira = anoAtual - anoCarteira
    const renovar = Boolean(true)
    const emdia = Boolean(false)
    if (idade <= 20, idadeCarteira >= 5) {
        console.log(renovar)
    }
    else if (idade > 20, idade <= 50, idadeCarteira >= 10) {
        console.log(renovar)
    }
    else if (idade > 50, idadeCarteira > 15) {
        console.log(renovar)
    }
    else {
        console.log(emdia)
    }
}