let num = [5, 3, 4, 9, , 2, 6, 8,]
 
num.push(1)
 //adicionar mais um elemento com valor 1

 num.sort()
 //organizar os números

 console.log(num)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)
let posição = num.indexOf(7)
if (posição == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 7 está na posição ${posição}`)
}

//A ordem é muito importante