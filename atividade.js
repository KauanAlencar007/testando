// Calculando o nivel de IMC (índice de massa corporal) de uma pessoa



const nome = "Fernanda"
const idade = 38
const sexo = "Feminino"
const peso = 75
const altura = 1.59

const imc = peso / (altura * altura)


if(peso >=20 ){
    console.log(`${nome} você esta acima do IMC ideal`)
}
else{
    console.log(`${nome} você esta no IMC ideal `)
}
