var matriz = [[0,1,0,0,0,0,0,0],[1,0,0,0,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,1,0,0,0,1,0],[0,1,1,0,0,0,0,0],[0,1,0,0,0,0,1,0],[0,0,0,1,0,1,0,0],[0,0,0,0,0,0,0,0]];
var lista =[[1],[0,4,5],[3,4],[2,6],[1,2],[1,6],[3,5],[0]];
var aristas =[[0,1],[1,0],[1,4],[1,5],[2,3],[2,4],[3,2],[3,6],[4,1],[4,2],[5,1],[5,6],[6,3],[6,5]];

/*lista de adyacencia*/
//recorridoListaDFS(lista,0);
/*matriz de adyacencia*/
//recorridoGrafoDFS(grafo, 0);
/*lista de aristas*/
//recorridoAristaDFS(aristas,0);

function recorridoAristaDFS(arista, nodoini){
  var pila = [];
  var visitado = [];
  var actual;  
  console.log("Inicio arista DFS");
  pila.push(nodoini);
  visitado[nodoini] = true;
   
  while(pila.length){
    actual = pila.pop();
    console.log(actual);
    for(var i=0; i<arista.length; i++){
      if(arista[i][0]==actual && !visitado[arista[i][1]]){
        visitado[arista[i][1]] = true;
        pila.push(arista[i][1]);
      }
    }
  }
  console.log("Fin arista DFS");
}

function recorridoListaDFS(lista, nodoini){
  var pila= [];
  var visitado = [];
  var actual;
  
  console.log("Inicio Lista DFS");
  pila.push(nodoini);
  visitado[nodoini] = true;
   
  while(pila.length){
    actual = pila.pop();
    console.log(actual);
    for(var i=0; i<lista[actual].length; i++){
      if(!visitado[lista[actual][i]]){
        visitado[lista[actual][i]]= true;
        pila.push(lista[actual][i]);
      }
    }
  }
  console.log("Fin Lista DFS");
}

function recorridoGrafoDFS(grafo, nodoini){
  var pila = [];
  var visitado = [];
  var actual;

  console.log("Inicio Grafo DFS");
  pila.push(nodoini);
  visitado[nodoini] = true;
   
  while(pila.length){
    actual = pila.pop();
    console.log(actual);
    for(var i=0; i<grafo.length; i+=1){
      if(grafo[actual][i] == 1 && !visitado[i]){
        visitado[i] = true;
        pila.push(i);
      }
    }
  }
  console.log("Fin Grafo DFS");
}