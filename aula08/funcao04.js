function fatorial(x) {
    let fator = 1
    for (let contador = x; contador>1; contador--) {
        fator *= contador
    }
    return fator
}
console.log(fatorial(5))

//estudar mais um pouco esta lógica