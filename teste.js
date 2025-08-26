const aluno = {
    nome: "Kauan",
    nota: 4
}

const aluno2 = {
    nome: "Will",
    nota: 4.5
}

const aluno3 = {
    nome: "Felipe",
    nota: 7
}

const aluno4 = {
    nome: "Julia",
    nota: 4
}


console.log(aluno, aluno2, aluno3, aluno4)


const media = (aluno.nota + aluno2.nota + aluno3.nota + aluno4.nota) / 4

if (media > 5) {
    console.log (`A media foi ${media} Parabens`)
} else {
    console.log('A media foi abaixo de 5')
}