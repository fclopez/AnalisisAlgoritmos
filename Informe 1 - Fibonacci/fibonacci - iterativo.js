/*
* Escribe algún código JavaScript. Después haz clic secundario o elige del menú Ejecutar:
* 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
* 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
* 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
*/

var numero = 0;
var array = [0,1];
numero = prompt("Ingrese el numero de iteraciones","");
fibonacciIterativo(numero);


function fibonacciIterativo(n){
  for(i=2; i<=n; i++){
    if(n==0 || n==1){
      console.log(array);
    }
    else {
      var item = array[i-1]+array[i-2];
      array.push(item);
    }
  }
  console.log(array);
}
