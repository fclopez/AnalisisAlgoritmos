/*
* Esto es un borrador de JavaScript.
*
* Escribe algún código JavaScript. Después haz clic secundario o elige del menú Ejecutar:
* 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
* 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
* 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
*/


var numero = 0
console.log("Inicio del programa");
numero = prompt("Ingrese el numero de iteraciones",""); 

inicioPrograma(numero);


function inicioPrograma(numero){
  for(i=0; i<=numero; i++){
    console.log("" + fibonacci(i));
  }
}

function fibonacci(n){
  if(n==0 || n==1){
    return n;
  }else{
    return (fibonacci(n-1) + fibonacci(n-2)); 
  }
}