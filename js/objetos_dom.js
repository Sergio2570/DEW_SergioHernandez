const DOM = {
    tabla: document.querySelector("#datos_tabla"),
    cabeza: document.querySelector('#datos_tabla thead'),
    cuerpo: document.querySelector('#datos_tabla tbody'),
    pie: document.querySelector('#datos_tabla tfoot')
};

function Inicio(){
    Colorear();
    NumerosANegro();
    Presidente();
    Policia();
    ClearEmptyNodes();
    AddCorreo();
    CorreoValido();
    DuplicarCabecera();
    Alinear();
}
//-----------------------------------------------------------------------------
function Colorear (){
    const cabeza = DOM.cabeza;
    let fila = cabeza.querySelector("tr");
    fila.className = `cabecera`;
    const cuerpo = DOM.cuerpo;
    let filas = cuerpo.querySelectorAll("tr");
    filas.forEach((tr, i) => { tr.classList.add(i%2===0?'filaImpar' : 'filaPar')});
}
function NumerosANegro(){
    const cuerpo = DOM.cuerpo;
    let firstTD = cuerpo.querySelectorAll('tr td:first-child');
    firstTD.forEach(td => { td.classList.add(`primeraColumna`)});
}
function Presidente(){
    const cuerpo = DOM.cuerpo;
    const tdPresi = cuerpo.querySelectorAll('td');
    tdPresi.forEach(td => { 
        if (td.textContent.toLowerCase() == 'presidente'){
            td.classList.add(`presidente`);
        }
    });
}
function Policia(){
    const cuerpo = DOM.cuerpo;
    const tdPoli = cuerpo.querySelectorAll('td');
    tdPoli.forEach(td => { 
        if (td.textContent.toLowerCase() == 'policía'){
            td.parentNode.classList.add(`policia`);
        }
    });
}
function ClearEmptyNodes (){
    const cabeza = DOM.cabeza;
    let fila = cabeza.querySelector("tr");
    fila.childNodes.forEach((hijo) => {
        if (hijo.nodeName !== "TH") {
            hijo.remove();
        }
    });
}
function AddCorreo(){
    const cuerpo = DOM.cuerpo;
    let fila;
    cuerpo.childNodes.forEach(buscar => {
        buscar.childNodes.forEach(hijo => {
            if(hijo.textContent == 8){
                fila = hijo.parentNode;
            }
        });
    });
    fila.childNodes.forEach(hijo => {
        if (hijo.textContent == ''){
            hijo.textContent = 'jaqueline.power@yahoo.com';
        }
    });
}
function CorreoValido(){
    const cuerpo = DOM.cuerpo;
    const RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let correo = cuerpo.querySelectorAll('tr td:nth-child(5)');
    correo.forEach(buscar => {
        const td = buscar.textContent;
        if(!RegExp.test(td)){
            buscar.textContent = '';
        }
    });
}
function DuplicarCabecera(){
    const cabeza = DOM.cabeza;
    let cabecera = cabeza.querySelector("tr");
    let copia = cabecera.cloneNode(true);
    const pie = DOM.pie;
    pie.appendChild(copia);
}
//Aquí iba el 6 pero no me daba la cabeza para pensar
function Alinear(){
    const cuerpo = DOM.cuerpo;
    const filas = cuerpo.querySelectorAll('tr');
    filas.forEach((fila) => {
        const td = fila.querySelector('td:nth-child(2)');
        const valorTD = td.textContent;
        if (valorTD.startsWith('M') || valorTD.startsWith('G')) {
            td.style.textAlign = 'right';
        }  
    });
}
function CambiarFoot(){
    const cuerpo = DOM.cuerpo;
    const pie = DOM.pie;
    let fila = pie.querySelector('tr');
    while (pie.rows.length > 0) {
        pie.deleteRow(0);
    };
    
}

/*a
.cabecera
.filaPar
.filaImpar
.primeraColumna
.presidente
.policia
.borde_rojo
.destaca
.escudo
.logo
*/