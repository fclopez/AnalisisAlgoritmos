var arreglo = [7,5,4,2,3,6,1,0,8];
console.log(arreglo);
iterativeMergesort(arreglo);
console.log(arreglo);


function iterativeMergesort(origen){
  var destino =[origen.length];
  
  for(tamanoActual = 1; tamanoActual<origen.length; tamanoActual*=2){
    for(inicio = 0; inicio<origen.length; inicio+=2*tamanoActual){
      var mitad = inicio+tamanoActual;
      var final = inicio+2*tamanoActual;
      merge(origen, destino, inicio, mitad, final);
    }    
  } 
}


function merge(org, dest, ini, med, fin){
  if(med >= org.length){
    return;
  }
  if(fin >= org.length){
    fin = org.length;
  }
     
  var i = ini, j = med;
  
  /*
  for(k=ini; k<fin; k++){
    dest[k] = (i==med)?dest[k]=org[j++]: (j == fin)?dest[k]=org[i++]: (org[j]<org[i])?dest[k]=org[j++]: dest[k]=org[i++];
  }
  */
  
  
  for(k=ini; k<fin; k++){
    if(i==med)             {dest[k]=org[j]; j++;}
    else if(j == fin)      {dest[k]=org[i]; i++;}
    else if(org[i]<org[j]) {dest[k]=org[i]; i++}
    else                   {dest[k]=org[j]; j++}
  }
  
  console.log(dest);
  for (k = ini; k < fin; k++){
    org[k] = dest[k];
  }
  
}

