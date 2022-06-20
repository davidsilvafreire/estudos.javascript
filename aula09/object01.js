let amigo = {

nome: 'Carlos',
 sexo: 'M',
 peso: 87.5,

 engordar(p){
console.log('Engordou')
this.peso += p}

}

amigo.engordar(2.3)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)