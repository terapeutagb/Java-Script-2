let agora = new Date()
let hora = agora.getHours()
hora = 7
console.log(`Agora são Exatamente ${hora} horas. `)
if(hora < 12) {
    console.log(`Bom Dia`)
} else if (hora <= 18) {
    console.log(`Boa Tarde`)
} else{
    console.log(`Boa Noite`)
}
