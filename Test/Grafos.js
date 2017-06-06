var graph = [[0,1,0,0,0,0,0,0],
[1,0,0,0,1,1,0,0],
[0,0,0,1,1,0,0,0],
[0,0,1,0,0,0,1,0],
[0,1,1,0,0,0,0,0],
[0,1,0,0,0,0,1,0],
[0,0,0,1,0,1,0,0],
[0,0,0,0,0,0,0,0]];

var list =[[1],[0,4,5],[3,4],[2,6],[1,2],[1,6],[3,5],[0]];

var aristas =[[0,1],[1,0],[1,4],[1,5],[2,3],[2,4],[3,2],[3,6],[4,1],[4,2],[5,1],[5,6],[6,3],[6,5]];

//for(var i = 0; i<aristas.length; i++){
// console.log(aristas[i][0]+" - "+aristas[i][1]);
//}

//aristas.forEach(function(item){
//  console.log(item[0] +" - "+item[1]);
//});

/*lista de adyacencia*/
//recorridoListaBFS(list,0);
//recorridoListaDFS(list,0);

/*matriz de adyacencia*/
//recorridoGrafoDFS(graph, 0);
//recorridoGrafoBFS(graph, 0);

/*lista de aristas*/
//recorridoAristaBFS(aristas,0);
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

function recorridoAristaBFS(arista, nodoini){
  var cola = [];
  var visitado = [];
  var actual;
  
  console.log("Inicio arista BFS");
  cola.push(nodoini);
  visitado[nodoini] = true;
   
  while(cola.length){
    actual = cola.shift();
    console.log(actual);
    for(var i=0; i<arista.length; i++){
      //debugger;
      if(arista[i][0]==actual && !visitado[arista[i][1]]){
        visitado[arista[i][1]] = true;
        cola.push(arista[i][1]);
      }
    }
  }
  console.log("Fin arista BFS");
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

function recorridoListaBFS(lista, nodoini){
  var cola = [];
  var visitado = [];
  var actual;
  
  console.log("Inicio Lista BFS");
  cola.push(nodoini);
  visitado[nodoini] = true;
   
  while(cola.length){
    actual = cola.shift();
    console.log(actual);
    for(var i=0; i<lista[actual].length; i++){
      if(!visitado[lista[actual][i]]){
        visitado[lista[actual][i]]= true;
        cola.push(lista[actual][i]);
      }
    }
  }
  console.log("Fin Lista BFS");
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

function recorridoGrafoBFS(grafo, nodoini){
  var cola = [];
  var visitado = [];
  var actual;
  
  console.log("Inicio Grafo BFS");
  cola.push(nodoini);
  visitado[nodoini] = true;
   
  while(cola.length){
    actual = cola.shift();
    console.log(actual);
    //debugger;
    for(var i=0; i<grafo.length; i+=1){
      if(grafo[actual][i] ==1 && !visitado[i]){
        //debugger;
        visitado[i] = true;
        cola.push(i);
      }
    }
  }
  console.log("Fin Grafo BFS");
}
