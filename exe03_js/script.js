function tabuada(){
    let numero = document.getElementById('texto-numero')
    let tabuada = document.getElementById('select-tabuada')
   
    if (numero.value.length == 0){
        window.alert('Por favor, digite um número')
    } else {
        let number = Number(numero.value)
        let contador = 1

        
        tabuada.innerHTML = ''
//antes de mostrar a tabuada, é necessario limpa-lo


        while (contador <= 10) {
            let opcao = document.createElement('option')
//é como se eu tivesse criado uma tag no HTML e puxasse ela...  

            opcao.text = `${number} x ${contador} = ${number*contador}`
//O [text] é a parte de dentro da tag option... 

            opcao.value = `tabuada${contador}`
             
            tabuada.appendChild(opcao)
//appendChild() server para adionar um elemento filho!  
            contador++          
        }
    }
   
}