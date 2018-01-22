let iterador = 0;

function aumentar(){
  iterador++;
  console.log(iterador);
  clearInterval(intervalo);
}

let intervalo = setInterval(aumentar, 3000);
// setTimeout(aumentar, 3000);
