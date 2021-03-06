console.log("MergeSort Recursivo");

/*****************************************************************************************************/
/***************************************Ejecucion*****************************************************/
/*consutruye e imprime una lista de numeros aleatorios*/
var listaOrig = new Array();
construirArrayAleatorio(listaOrig, 20000000, 1, 40000000);
console.log("listaInicial: "+ listaOrig);

/*ejecuta el algoritmo al tiempo que calcula e imprime el tiempo registrado*/
var startTime = new Date();
console.log("listaFinal: "+ recursiveMergeSort(listaOrig))
var endTime = new Date();
var tiempo = (endTime-startTime)/1000;

console.log("Tiempo de ejecución: "+tiempo+" segundos");


/*****************************************************************************************************/
/***************************************Logica********************************************************/

/*genera un arreglo de numeros aleatorios*/
function construirArrayAleatorio(lnumeros, cantidad, min, max){
  for(i=0; i<cantidad; i++){
    var item = Math.floor(Math.random()*(max - min))+min;
    lnumeros.push(item);
  }
}

/*mezcla recursiva con la condicion base de si el array posee menos de 2 elementos */
function recursiveMergeSort(listaOrg){
  if(listaOrg.length < 2){
    return listaOrg;
  }
  var mitad = parseInt(listaOrg.length/2);
  var izq = listaOrg.slice(0,mitad);
  var der = listaOrg.slice(mitad, listaOrg.length);
 
  return merge(recursiveMergeSort(izq), recursiveMergeSort(der));
}

/*funcion de mezcla de numeros al array de destino*/
function merge(izq, der){
  var result = new Array();
  
   while(izq.length && der.length){
     if(izq[0] <= der[0]){
       result.push(izq.shift());
     }else{
       result.push(der.shift());
     }
   }
  
  while(izq.length){
    result.push(izq.shift());
  }
  
  while(der.length){
    result.push(der.shift());
  }
  
  return result;
}