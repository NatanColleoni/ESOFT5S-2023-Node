const nums = [2, 4, 6, 8]

const dobro = numero => numero * 2

// console.log(nums.map(dobro)) 
// console.log(nums.map(numero => numero * 3))

const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']

const letras = nomes.map(texto => texto[0])

// console.log(letras)


//estrutura de um objeto javascript -> chave-valor
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 }
]

const nomesCarrinho = carrinho.map(x => x.nome)
console.log(nomesCarrinho)

//errado
const t = carrinho.map(x => x.preco * x.qtde)
console.log(t)

//certo
const valor_total = carrinho.map(item => {
    let per_product = {
        nome: item.nome,
        valor: item.qtde * item.preco,
        ...item //spread
    }
    return per_product
})

console.log(valor_total)