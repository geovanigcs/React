// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const nomes5 = pessoas.filter(pessoa => pessoa.nome.length >= 5)

const idade50 =  pessoas.filter(pessoa => pessoa.idade > 50)

const nomend = pessoas.filter(pessoa => pessoa.nome.endsWith('a'))

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobrar = numeros.map(dobro => dobro*2)

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

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


// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63},
]

const soma = numeros.reduce((valor, acumulador) => acumulador + valor)


const pares = numeros.reduce((acumulador, valor) =>  valor % 2 === 0 ? [...acumulador, valor] : acumulador, []) //Aqui está sendo feito com reduce

const pares = numeros.filter(valor => valor % 2 === 0) // Com filtro é muito mais facil


const dobrar = numeros.map(valor => valor * 2)

const old = pessoas.reduce((acumulador, valor) => (acumulador.idade > valor.idade ? acumulador : valor), pessoas[0]) 

const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'José', idade: 45 },
    { nome: 'Ana', idade: 20 }
  ]

const old1 = pessoas.reduce( (acumulador, valor) => (acumulador.idade > valor.idade ? acumulador : valor), pessoas[0])

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares1 = numeros.filter( valor => valor % 2 === 0)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const soma1 = numeros.map( valor => valor + valor)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobrar1 = numeros.map( valor => valor * 2)

const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']
const quantidade = frutas.reduce((acumulador, valor) => ({...acumulador,[valor] : (acumulador[valor] || 0) + 1}),{})
console.log(quantidade)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const quadrado = numeros.filter(valor => valor % 2 !== 0).map(valor => valor *  valor)
console.log(quadrado)

const palavras = ['carro', 'bicicleta', 'avião', 'moto', 'helicóptero']
const cop = palavras.reduce((acumulador, valor) => (valor.length > acumulador.length ? valor : acumulador), palavras[0])
console.log(cop)

const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'José', idade: 45 },
    { nome: 'Ana', idade: 20 }
  ]

const somaI = pessoas.reduce((acumulador, valor) => acumulador + valor.idade, 0)
console.log(somaI)

const frase = 'Hello World'
const cadencia = frase.split('').reduce((acumulador, valor) => {
  acumulador[valor] = ( acumulador[valor] || 0) + 1
  return acumulador
}, {})
console.log(cadencia)

const produtos = [
  { nome: 'Celular', preco: 299 },
  { nome: 'Livro', preco: 29 },
  { nome: 'Televisão', preco: 499 },
  { nome: 'Caneta', preco: 2 }
]

const caros = produtos.filter(produto => produto.preco > 100).map(produto => produto.nome)
console.log(caros)