// Inicialización del esquema general.
type Asiento = 0 | 1 | "L" | "X";
type Sala = Asiento[][];

let salaCine : Sala= [];
const filas : number = 8;
const asientosPorFila : number = 10;

for (let i = 0; i < filas; i++) {
    const fila : Asiento[] = [];
    for (let j = 0; j < asientosPorFila; j++) {
        fila.push(0);
    }
    salaCine.push(fila);
}

// Función de asignación de asiento indicando fila y columna. 

function asignarAsientos(fila : number, columna : number) {
    if (typeof fila === "number" && typeof columna === "number" && fila > 0 && fila <= filas && columna > 0 && columna <= asientosPorFila) {
        if (salaCine[fila-1][columna-1] === 0) {
            salaCine[fila-1][columna-1] = 1;
            console.log(`Asiento reservado con éxito.`)
        }
        else {
            console.log(`El asiento seleccionado (fila ${fila}, columna ${columna}) ya está ocupado.`)
        }
    }
    else {
        console.log(`Los valores indicados no son correctos.`);
    }
}

// Función de impresión en pantalla de la matriz de asientos.

function imprimirAsientos(matriz : Sala) {
  console.log("Mapa de asientos del Cine:");
  let impFilas = "Col.    ";
  for (let col = 0; col < asientosPorFila; col++) {
    impFilas = impFilas.concat(`${col+1}`+"   ");
  }
  console.log(impFilas);
  for (let i = 0; i < matriz.length; i++) {
    console.log(`Fila ${i+1}: ` + matriz[i].join(" | "));
  }
}

// Función de conversión de la matriz de datos al formato de visualización (L = libre, X = ocupado).

function visualizarSala(matriz : Sala) {
    const verSala : Sala = [];
    for (let ele = 0; ele < matriz.length ; ele++) {
        const filaTemp : Asiento[]= [];
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

function estadoSala(matriz : Sala) {
    let suma_libres = 0;
    let suma_ocupados = 0;
    for (let fila in matriz) {
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

function buscarDupla (matriz : Sala) {
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

imprimirAsientos(visualizarSala(salaCine));
estadoSala(salaCine);
buscarDupla(salaCine);