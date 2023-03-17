// map numeros
const nums = [1,2,3,4]
const dobro = (numero) => numero*2 //retorna um novo array
//console.log(nums.map(dobro))



//map strings
const nomes = ['Ana', 'Bia', 'Carolina', 'Matheus', 'Vitor']
const letras = nomes.map(nome=>nome[0])
//console.log(letras)

//map objetos
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]
const nomeProdutos = carrinho.map(x => x.qtde)
const totalProdutos = carrinho.map(obj => obj.preco * obj.qtde)
//console.log(nomeProdutos)
console.log(totalProdutos)