// Inicialización del esquema general.

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

// Función de asignación de asiento indicando fila y columna. 

function asignarAsientos(fila, columna) {
    if (asientosCine[fila-1][columna-1] === 0) {
        asientosCine[fila-1][columna-1]=1;
        console.log(`Asiento reservado con éxito.`)
    }
    else {
        console.log(`El asiento seleccionado (fila ${fila}, columna ${columna}) ya está ocupado.`)
    }
}

// Función de impresión en pantalla de la matriz de asientos.

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

// Función de conversión de la matriz de datos al formato de visualización (L = libre, X = ocupado).

function visualizarSala(matriz) {
    const verSala = [];
    for (let ele = 0; ele < matriz.length ; ele++) {
        const filaTemp=[];
        for (let asiento = 0; asiento < matriz[ele].length; asiento++){
            if (matriz[ele][asiento] === 0){
                filaTemp.push("L");
            }
            else {
                filaTemp.push("X");
            }}
        verSala.push(filaTemp);
    }
    return verSala;
}

// Función de cálculo de asientos vacíos y asientos ocupados.

function estadoSala(matriz) {
    let suma_libres = 0;
    let suma_ocupados = 0;
    for (let fila in matriz) {
        let suma_temp = 0;
        for (let caso = 0; caso < matriz[fila].length; caso++){
            if (matriz[fila][caso] === 0){
                suma_libres++;
            }
            else {
                suma_ocupados++;
            }
        }
    }
    console.log(`Hay un total de ${suma_libres} asientos libres y ${suma_ocupados} asientos ocupados.`);
}

// Función de búsqueda de dupla de asientos vacíos.

function buscarDupla (matriz) {
    for (let fila in matriz) {
        for (let i = 0; i < matriz[fila].length; i++){
            if (matriz[fila][i] === 0 && matriz[fila][i+1] === 0){
                console.log(`Están disponibles los asientos contiguos ${i+1} y ${i+2} de la fila ${parseInt(fila)+1}.`);
                return;
            } 
        }  
    }
    console.log(`No hay asientos contiguos disponibles.`);
    return;
}

// Visualización de resultados de funciones. 

imprimirAsientos(visualizarSala(asientosCine));
estadoSala(asientosCine);
buscarDupla(asientosCine);