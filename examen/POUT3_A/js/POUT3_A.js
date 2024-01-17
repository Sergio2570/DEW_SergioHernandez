const DOM = {
    tabla: document.querySelector("table"),
    cabeza: document.querySelector('thead'),
    cuerpo: document.querySelector('tbody'),
    pie: document.querySelector('tfoot')
};
const cabeza = DOM.cabeza;const cuerpo = DOM.cuerpo;
function Ejecutar(){
    Colorear();BorrarOcho();
}function Ordenar(){
    let filas = cuerpo.querySelectorAll("tr");
    let total = 0;
    filas.forEach(tr => {
        if (parseInt(total) < parseInt(tr.firstChild.textContent)){
            total = tr.firstChild.textContent;
        }
    });
    console.log("Aux: " + total);
    let i = 1;
    let j = 0;
    while (i <= total){
        let tr = filas[total - i];
        if (parseInt(tr.firstChild.textContent) == i){
            let mover = tr;
            cuerpo.appendChild(mover);
            i++;
            j = 0;
        }
        j++;
    };
}
function Testeo(){
    /* console.log(); */
}
/*----------TERMINADO----------*/
/*--------------1--------------*/
function Colorear (){
    let fila = cabeza.querySelector("tr");
    fila.className = `cabecera`;
    let filas = cuerpo.querySelectorAll("tr");
    filas.forEach((tr) => { 
        let columnas = tr.querySelectorAll('td');
        columnas.forEach((td,i) => {
            if (i%2===0){
                td.className = "columnaPar";
            }
            else {
                td.className = "columnaImpar";
            }
        });
    });
}
/*--------------2--------------*/
function BorrarOcho(){
    let filas = cuerpo.querySelectorAll("tr");
    filas.forEach((tr,i) => {
        if (filas[i].children.length == 9){
            filas[i].removeChild(filas[i].children[7]);
        }
    });
}
/*-----------------------------

.cabecera
.columnaPar
.columnaImpar
.primeraColumna
.pie
.borde_rojo
*/