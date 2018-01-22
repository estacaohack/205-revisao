/**
  Variáveis
  Operadores matemáticos
  Operadores lógicos
  If.. else
  Interpolação de string
  Métodos de variaveis (string e number)
*/

let p1 = 8;
let p2 = 3;
let p3 = 2;
let trabalho = 6;
let presenca = 0.7;

let media = p1 * 0.2 + p2 * 0.3 + p3 * 0.4 + trabalho * 0.1;
let mediaString = media.toFixed(2);
let mediaFormatada = mediaString.replace('.', ',');

if(media >= 7 && presenca >= 0.7){
  console.log(`Parabéns, você foi aprovado com a média ${mediaFormatada}.`);
} else {
  console.log(`Você foi reprovado com a média ${mediaFormatada}.`);
}
