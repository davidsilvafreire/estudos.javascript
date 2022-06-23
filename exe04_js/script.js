let num = document.querySelector('input#formulario-numero')
let lista = document.querySelector('select#form-lista')
let resultado = document.querySelector('div#res')
let valores = []   //Array (vetores)

function éNumero(n){ //funcao do numero
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
           
} 


function emLista(n, l){  //funcao da lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){  //funcao do evento [adicionar]
//se o numero nao estiver na lista irá adicionar a ela. ok!    
    if (éNumero(num.value) && !emLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       resultado.innerHTML = ''  //quando adicionar o valor, tem que limpar o resultado
    } else {
//se não, irá disparar a mensagem abaixo!        
        window.alert('Valor inválido ou já encontrado na lista')
    }
    //serve para limpar a caixa de texto após adicionar o valor
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        //total de elementos
        let total = valores.length

        //até o momento o maior e menor valor, é primeiro na lista!
        let maior = valores[0]
        let menor = valores[0]
        
        let soma = 0
        let media = 0


//criar um for para analisar um por um qual é o maior ou menor
        for(let pos in valores){
            soma += valores[pos]
            

            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor) menor = valores[pos]
        }

        //mostrar na tela o resultado, vazio, por enquanto...
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total de valores cadastrados: [ <strong>${total}</strong> ]</p>`
        //informar o menor ou maior valor na tela!
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor vsalor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>subtraindo todos os valores, temos ${subtrair}</p>`
    }
}