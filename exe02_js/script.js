function contar(){
    let inicio = document.getElementById('textoinicial')
    let final = document.getElementById('textofim')
    let passou = document.getElementById('textopasso')
    let resultado = document.querySelector('div#res')


        //contagem crescente
//==0 ou seja estiver vazio - nada escrito.
    if (inicio.value.length == 0 || final.value.length == 0 || passou.value.length == 0) {
        resultado.innerHTML = 'IMPOSSÍVEL CONTAR'
        window.alert('[ERRO] Faltam dados')
    } else {
        resultado.innerHTML = 'Contando: <br><br>'
        let i = Number(inicio.value) 
        let f = Number(final.value)
        let p = Number(passou.value)
//pegar o valor(value) que está dentro de inicio(textoinicial) e converter em número
//essas variáveis servem para fazer essa converção


          if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1


          }
        //contagem decrescente
          if (i < f) {
            for(let contador = i; contador <= f; contador += p) {
                /*o contador vai começar no inicio. enquanto o contador for menor ou igual ao final, o contador vai receber ele mesmo mais(+) o passo*/
                            
                            resultado.innerHTML += ` ${contador} \u{1F47D} ` 
                        }
          } else {
            for (let contador = i; contador >= f; contador -= p)
            resultado.innerHTML += `${contador} \u{1F47D}`
          }
    }
    resultado.innerHTML += ` \u{1F693} `
}