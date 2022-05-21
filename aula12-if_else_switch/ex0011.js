let idade = 17
console.log(`Vc tem ${idade} anos `)
if(idade < 16 ) {
    console.log(`Não Vota`)
} else if (idade < 18 ){
    console.log(`Voto Opcional`)
} else if (idade <65 ){
    console.log(`Voto Obrigatório`)
} else if (idade > 65) {
    console.log(`VOTO OPT`)
}