function carregar(){
    var mensagemHora = window.document.getElementById('msg')
    //identificação da mensagem da hora

    var imagem = window.document.getElementById('foto')
    //identificação da imagem dentro da div

    var data = new Date()
    var horas = data.getHours()
    //hora do servidor
    mensagemHora.innerHTML = `Agora são ${horas} horas`

    if (horas >= 0 && horas <= 12){ 
        imagem.src = 'img.manha.jpg'
        document.body.style.background = '#e2cd9f'
        //Imagem e cor do bom dia 

    }else if (horas >= 12 && horas < 18){
       
        imagem.src = 'img.tarde.jpg'
        document.body.style.background = 'lightblue'
        //Imagem e cor do boa tarde

    }else {
        imagem.src = 'img.noite.jpg'
        document.body.style.background = 'blue'
        //Imagem e cor do boa noite
    }
}

