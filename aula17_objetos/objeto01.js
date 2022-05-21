let amigo = {nome: `Raimundo`, sexo: `M`, peso: 85.5, engordar(p){
    console.log(`Engordou`)
   amigo.peso += p
   // poseria ser: this.peso += p
}}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
