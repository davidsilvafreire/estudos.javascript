var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)
if(horas <= 12){
    console.log('Bom dia')
}
 else if(horas <= 18){
    console.log('Boa tarde')
}
else if (horas <= 24){
    console.log('Boa noite')
}
 else {
     console.log('Boa madrugada')
}