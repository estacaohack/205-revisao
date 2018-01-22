/**
Soma de valores em um vetor de objetos.
*/
let meusAmigosDevedores = [
  {
    nome: 'Caique',
    divida: 3000,
    tempo: 12
  },
  {
    nome: 'John',
    divida: 3,
    tempo: 1
  },
  {
    nome: 'Bárabara',
    divida: 20,
    tempo: 12
  },
  {
    nome: 'Paulo',
    divida: 100,
    tempo: 2
  }
];
let valorTotal = 0;

for(let vacilao of meusAmigosDevedores){
  if(vacilao.tempo <= 6){
    valorTotal += vacilao.divida;
  } else {
    valorTotal += vacilao.divida * 1.5;
  }

}
console.log(valorTotal);
