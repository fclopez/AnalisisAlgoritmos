/*
 * Este es un borrador de JavaScript.
 *
 * Ingrese un poco de JavaScript, luego clic derecho o escoja desde el menú Ejecutar:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para traer un Inspector de objetos en el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */


var nodes = [
    {
        links: [ 1,6,8 ], // node 0 is linked to node 1
        visited: false
    }, {
        links: [ 0,4,6,8 ], // node 1 is linked to node 0 and 2
        visited: false
    },{
        links: [ 4,6 ], // node 1 is linked to node 0 and 2
        visited: false
    },{
        links: [4,5,8],
        visited
    }
 ];

console.log(nodes);

//dfs( 0 );

function dfs( start ) {
    var listToExplore = [ start ];

    nodes[ start ].visited = true;

    while ( listToExplore.length > 0 ) {
        var nodeIndex = listToExplore.shift();
        nodes[ nodeIndex ].links.forEach( function( childIndex ) {
            if ( !nodes[ childIndex ].visited ) {
                nodes[ childIndex ].visited = true;
                listToExplore.push( childIndex );
            }
        } );
    }
};


/*
Exception: TypeError: nodes[childIndex] is undefined
dfs/<@Scratchpad/1:31:18
dfs@Scratchpad/1:30:9
@Scratchpad/1:21:1
*/