Retorne as pessoas que tem o nome com 5 letras ou mais
Retorne as pessoas com mais de 50 anos
Retorne as pessoas cujo nome termina com "a"


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const nomes5 = pessoas.filter(pessoa => pessoa.nome.length >= 5)
console.log(nomes5)

const idade50 =  pessoas.filter(pessoa => pessoa.idade > 50)
console.log(idade50)

const nomend = pessoas.filter(pessoa => pessoa.nome.endsWith('a'))
console.log(nomend)

Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobrar = numeros.map(dobro => dobro*2)
console.log(dobrar)

Para cada elemento
Retorne apenas uma string com o nome da pessoa
Remova apenas a chave "nome" do objeto
Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(pessoa => pessoa.nome)
const nonames = pessoas.map(pessoa => (delete pessoa.nome))
const ids = pessoas.map((pessoa, indice) => (pessoa.id = indice + 1))


Some todos os números (reduce)
Retorne um array com os pares (Filter)
Retorne um array com com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const soma = numeros.reduce((valor, acumulador) => acumulador += valor)
console.log(soma)


const pares = numeros.reduce((acumulador, valor) => {if (valor % 2 === 0) acumulador += valor})
console.log(pares)


const pares = numeros.filter(pares => pares.numeros.endsWith('5'))
console.log(pares)