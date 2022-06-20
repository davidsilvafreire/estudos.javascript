let valores = [0, 1, 7, 4, 3,]
valores.sort()
console.log(valores)
/*
dessa maneira, irá aparecer o valor específico do elemento
*/
/*
for(let posição=0; posição<valores.length; posição++){
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`)
}
*/
for (let posição in valores){
    console.log(`A posição ${posição} tem o valor${valores[posição]}`)
}