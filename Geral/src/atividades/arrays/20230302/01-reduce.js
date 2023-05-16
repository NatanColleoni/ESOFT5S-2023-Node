const numeros = [10, 20, 30, 40, 50]

const total = numeros.reduce((acumulador, item) => {
    //console.log("acumulador: ", acumulador)
    //console.log("valor: ", item)

    return acumulador + item
}, 5)

//console.log("total",total)

const palavras = ['oi', 'amigo', 'paralelepipedo']

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    console.log("maiorPalavra: ", maiorPalavra)
    console.log("palavraAtual: ", palavraAtual)

    if(palavraAtual.length > maiorPalavra.length)
        return palavraAtual
    
    return maiorPalavra
}, '')

console.log("maior palavra retornada: ",maiorPalavra)

