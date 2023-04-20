/*2- Crear una matriz de 3x4 (tres filas, cuatro columnas) e imprimir en la consola por filas.
*/
//alterativa declarar matriz vacia
//let matriz = [[1,2,3], [4,3,2,1],[5,6,7,8]];
//declaro matriz

let matriz =[];
//declaro dimensiones
const nFilas = 3;// parseInt(prompt("ingrese numero de fila"))
const nColumnas = 4;


for (let i = 0; i < nFilas ; i++){
    let fila = [];
  //  matriz[i] = fila;
//ingresa primero la fila y luego pide 4 elemtos de columna llenas esa fila 
    for(let j = 0; j < nColumnas ; j++){
        //completo la fila
       fila[j]=(prompt(`elemento [${i}] [${j}]`));
       //fila[j]= Math.ceil(Math.random() * 100);// si pedimso datos ramdon en vez pedirle al usuario
    }
    //agrego la fila en matriz
   // matriz.push(fila);
   matriz[i] = fila;
}
//muestreo por filas
for(let fila of matriz){
    console.log(fila);
}


