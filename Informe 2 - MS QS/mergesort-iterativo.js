  console.log("MergeSort Iterativo");

/*****************************************************************************************************/
/***************************************Ejecucion*****************************************************/
/*consutruye e imprime una lista de numeros aleatorios*/
var listaOrig = new Array();
construirArrayAleatorio(listaOrig, 30000000, 1, 50000000);
console.log("listaInicial: "+ listaOrig);

/*ejecuta el algoritmo al tiempo que calcula e imprime el tiempo registrado*/
var startTime = new Date();
mergeSortIterativo(listaOrig);
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

/*funcion de mezcla iterativo con incrementos x2*/
function mergeSortIterativo(array){
  var from = array;
  var to = new Array(array.length);
  
  for(tamanoBloque=1; tamanoBloque<array.length; tamanoBloque*=2){
    for(inicio=0; inicio<array.length; inicio+=2*tamanoBloque){  
      var lo = inicio;
      var mid = inicio+tamanoBloque;
      var hi = inicio+2*tamanoBloque;
      merge(from, to, lo, mid, hi);
    }
    var temp = from;
    from = to;
    to = temp;
  }
  console.log("listaOrdenada: "+ from);
}

/*funcion de mezcla de numeros al array de destino*/
function merge(arrayOrigen, arrayDestino, izq, mitad, der){
  
  if(mitad > arrayOrigen.length){
    mitad = arrayOrigen.length;
  }
  
  if(der > arrayOrigen.length){
    der = arrayOrigen.length;
  }
  
  var i = izq, j = mitad;
  
  for(k = izq; k < der; k++){
    if(i == mitad){
      arrayDestino[k]= arrayOrigen[j++];
    }else if(j == der){
      arrayDestino[k]= arrayOrigen[i++];
    }else if(arrayOrigen[j]<arrayOrigen[i]){
      arrayDestino[k]= arrayOrigen[j++];
    }else{
      arrayDestino[k]= arrayOrigen[i++];
    }
  }
  
}
