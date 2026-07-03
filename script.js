const convertButton = document.querySelector("#myButton") //Cria uma constante e atribui o botão.
const currencySelectA = document.querySelector(".selectA") //Cria uma constante e atribui a ela o valor do select da moeda a ser convertida.
const currencySelectB = document.querySelector(".selectB") //Cria uma constante e atribui a ela o valor do select da moeda convertida.
const currencyValueToConvert = document.querySelector("#valueToConvert") //Cria uma constante para o mostrador do valor a converter.
const currencyValueConverted = document.querySelector("#valueConverted") //Cria uma constante para o mostrador do valor convertido.
const currencyAConverterName = document.getElementById("currencyAConverter") //Cria uma constante que pega o elemento do mostrador da moeda a ser convertida.
const currencyImageA = document.getElementById("imageA") //Cria uma constante que pega o elemento da imagem da moeda a ser convertida.
const currencyASerConvertidaName = document.getElementById("currencyASerConvertida") //Cria uma constante que pega o elemento do mostrador da moeda a ser convertida.
const currencyImageB = document.getElementById("imageB") //Cria uma constante que pega o elemento da imagem da moeda a ser convertida.

const currencies = {
    real: {
        rate: 1.0,
        code: "BRL",
        locale: "pt-BR",
        name: "Real Brasileiro",
        image: "./assets/Real.png"
    },
    
    dolar: {
        rate: 5.2,
        code: "USD",
        locale: "en-US",
        name: "Dólar americano",
        image: "./assets/Dolar.png"
    },
    
    euro: {
        rate: 5.5,
        code: "EUR",
        locale: "de-DE",
        name: "Euro",
        image: "./assets/Euro.png"
    },

    libra: {
        rate: 6.3,
        code: "GBP",
        locale: "en-GB",
        name: "Libra esterlina",
        image: "./assets/Libra.png"
    },
    
    bitcoin: {
        rate: 324409.06,
        code: "BTC",
        locale: "en-US",
        name: "Bitcoin",
        image: "./assets/Bitcoin.png"
    }
}

function convertValues() { //Cria uma função que será chamada quando o botão for clicado
    const inputCurrencyValue = Number(document.querySelector("#inputCurrency").value //Cria uam constante do valor colocado no input, e pega o valor do input.
        .replace('.', '') //substitui o "." dos milhares por nada.
        .replace(',', '.') //substitui a "," dos centavos pelo ".".
    )

    const cotacaoOrigem = currencies[currencySelectA.value].rate //Cria uma constante que pega o valor da moeda a ser convertida.
    const cotacaoDestino = currencies[currencySelectB.value].rate //Cria uma constante que pega o valor da moeda convertida.
    const valorConvertido = (inputCurrencyValue * cotacaoOrigem) / cotacaoDestino //Cria uma constante que calcula o valor convertido.

    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencies[currencySelectB.value].locale, { //currencyValueConverted.innerHTML = pega o valor convertido e coloca no mostrador valueConverted, new Intl.NumberFormat = formata o valor convertido para moeda.
        style: "currency", //muda o estilo do número para moeda.
        currency: currencies[currencySelectB.value].code //indica que a moeda é a selecionada.
        }).format(valorConvertido) //format(seleciona o valor convertido para ser formatado)
        
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(currencies[currencySelectA.value].locale, { //(currencyValueToConvert.innerHTML = Pega o valor do input e coloca no #valueToConvert) (new Intl.NumberFormat = formata o número em moeda, e arredonda)
        style: "currency", //muda o estilo do número para moeda.
        currency: currencies[currencySelectA.value].code //indica que a moeda é o Real.
    }).format(inputCurrencyValue) //indica o valor que tem que ser formatado, ou seja, o input é formatado e colocado no mostrador.
}

function changeCurrencyA() { //Cria uma função que será chamada quando o select for alterado
    
    currencyAConverterName.innerHTML = currencies[currencySelectA.value].name //O mostrador da moeda a ser convertida recebe o valor da moeda selecionada no select.
    currencyImageA.src = currencies[currencySelectA.value].image //A imagem da moeda a ser convertida recebe a imagem da moeda selecionada.
    
    convertValues() //Chama a função convertValues para atualizar os valores convertidos.

}

function changeCurrencyB() { //Cria uma função que será chamada quando o select for alterado
    
    currencyASerConvertidaName.innerHTML = currencies[currencySelectB.value].name //O mostrador da moeda a ser convertida recebe o valor da moeda selecionada no select.
    currencyImageB.src = currencies[currencySelectB.value].image //A imagem da moeda a ser convertida recebe a imagem da moeda selecionada.
    
    convertValues()

}    

currencySelectA.addEventListener("change", changeCurrencyA) //cria um ouvidor de eventos, qua identifica quando o select for alterado e chama a função changeCurrencyA
currencySelectB.addEventListener("change", changeCurrencyB) //cria um ouvidor de eventos, qua identifica quando o select for alterado e chama a função changeCurrencyB
convertButton.addEventListener("click", convertValues) //cria um ouvidor de eventos, qua identifica quando o botão for clicado e chama a função convertValues
