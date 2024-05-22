

/* 

Media de aluno;
   - Notas para saber se alunos serão aprovados
   - 4 notas serão usadas
   - >= 6 Aprovado
   - <= 5 Reprovado 
*/


let nota1 = 5;
let nota2 = 4.5;
let nota3 = 8;
let nota4 = 6;

media = (nota1+nota2+nota3+nota4) / 4;

console.log ('A media do aluno é', media.toFixed(2));

if (media >= 6){
    console.log ('O aluno está aprovado');
} else {
    console.log ('Aluno está Reprovado');
}
