let butacaOcupada: number = 0,
  butacalibre: number = 0,
  indice: number;
let cantButacas: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: boolean[] = new Array(cantButacas);
for (indice = 0; indice < cantButacas; indice++) {
  butacas[indice] = Math.random() < 0.55;
  if (butacas[indice] === true) {
    butacaOcupada++;
  } else {
    butacalibre++;
  }
}
console.log(
  `De ${cantButacas} butacas, ${butacaOcupada} están ocupadas y ${butacalibre} libres`
);
