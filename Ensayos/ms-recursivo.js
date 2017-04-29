/*
 * Este es un borrador de JavaScript.
 *
 * Ingrese algo en JavaScript, luego haga clic derecho o seleccione del menú Ejecutar:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar un inspector de objetos sobre el resultado (Ctrl+I) o
 * 3. Mostrar para insertar el resultado  en un comentario después de la selección. (Ctrl+L)
 */

var array = [5,9,3,7,1,2,4,8,6,0];
var array1 = [5,9,3,7,1,2,4];
var mitad = Math.ceil(array1.length/2);
var indexMitad = Math.floor(array1.length/2);

console.log("Index Mitad :"+indexMitad);
console.log("Mitad :"+mitad);

var arrayIzq = array1.slice(0, mitad);
var arrayDer = array1.slice(mitad, array.length);

console.log("Izq: "+arrayIzq);
console.log("Der: "+arrayDer);


console.log("ejecucion ms: "+ mergeSort(array1));



function mergeSort(array){
  if(array.length < 2){
    return array;
  }
   
  var mitad = Math.ceil(array.length/2);
  var arrayIzq = array.slice(0, mitad);
  var arrayDer = array.slice(mitad, array.length);
  
  return mezcla(mergeSort(arrayIzq),mergeSort(arrayDer));
}

function mezcla(Izq,Der){
  var resultado = new Array();
  
  while(Izq.length && Der.length){
    if(Izq[0] <= Der[0]){
       resultado.push(Izq.shift());     
    }else{
       resultado.push(Der.shift());
    }  
  }
  
  while(Izq.length){
    resultado.push(Izq.shift());
  }
  
  while(Der.length){
    resultado.push(Der.shift());
  }
  
  return resultado;
}
