function verificar(){
   var data = new Date()          //Data atual do sistema
   var ano = data.getFullYear()  //Ano atual do sistema
   var formularioAno = document.getElementById('textoAno')  //ano de nascimento
   var res = document.querySelector('div#resultado')

   //Se o comprimento do valor digitado na caixa de texto(textoAno) for igual a 0
   //ou se o ano atual do sistema for menor que o valor digitado na caixa de texto...
   //irá disparar um alerta de erro...
   if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    window.alert('[ERRO]Verificar os dados e tente novamente')
   } else {
    var Sexo = document.getElementsByName('radsex')
    var idade = ano - Number(formularioAno.value) 
    //o valor digitado na caixa de texto(formularioAno) menos o ano atual do sistema é a idade!
    var genero = ''  //comecou com uma string vazia 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if (Sexo[0].checked){
     genero = 'homem'
     if (idade >=20 && idade < 30 ) {
        img.setAttribute('src','foto-homem-jovem.jpg')
        //Jovem
     } else if (idade < 50) {
      img.setAttribute('src', 'foto-homem-adulto.jpg')
        //adulto
     } else {
        //idoso
     } 
     //Se o que estiver marcado(checked) masculino[0], então é HOMEM
    } else if(Sexo[1].checked){
     genero = 'mulher'
     if (idade >=20 && idade < 30 ) {
      img.setAttribute('src','foto-mulher-jovem.jpg')
        //Jovem
     } else if (idade < 50) {
      img.setAttribute('src','foto-mulher-adulta.jpg')
        //Adulto
     }  else {
        //idoso
     }
     //Se o que estiver marcado(checked) feminino[1], então é MULHER
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
   }
  
}