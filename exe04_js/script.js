let numero = document.getElementById('formulario-numero')
//
let listas = document.querySelector('select#form-lista')
// 
let resultado = document.querySelector('div#res')
//
let valoresAnalisados = []
//são os valores que serão analisados no vetor dentro das chaves[]


//Esta funcao serve para saber se é um número ou não
function isNumero(n){
      if (Number(n) >= 1 && Number(n) <= 100){
        return true
      } else {
        return false
      }
}


//
function inLista(n, l){
//se a posição do numero encontrado na lista for diferente('!='), não encontrará nenhum elemento(-n) na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/*Esta função irá analisar os números para ver se estão na lista*/
function adicionar() {
    if (isNumero(numero.value) && inLista(numero.value, valoresAnalisados)) {
        window.alert('Tudo OK!')
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}