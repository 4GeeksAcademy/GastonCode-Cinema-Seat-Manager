let asientosCine = [];
const filas = 8;
const asientosPorFila = 10;

for (let i = 0; i < filas; i++) {
    const fila=[];
    for (let j = 0; j < asientosPorFila; j++) {
        fila.push(0);
    }
    asientosCine.push(fila);
}

function asignarAsientos(fila, columna) {
   asientosCine[fila-1][columna-1]=1;
}

function imprimirAsientos(matriz) {
  console.log("Mapa de Asientos del Cine:");
  let impFilas = "Col.    ";
  for (let col = 0; col <asientosPorFila; col++) {
    impFilas = impFilas.concat(`${col+1}`+"   ");
  }
  console.log(impFilas);
  for (let i = 0; i < matriz.length; i++) {
    console.log(`Fila ${i+1}: ` + matriz[i].join(" | "));
  }
}

function visualizar(valor){
    if (valor===0){
        valor = "L";
    }
    else {
        valor = "X";
    }
}

let verSala = asientosCine.map( function(valor){
    
});

console.log(verSala);

asignarAsientos(3, 4);

imprimirAsientos(asientosCine);