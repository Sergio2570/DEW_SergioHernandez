const DOM = {
    dTabla: document.querySelector('#zonadibujo'),
    dColor1: document.querySelector('.color1'),
    dColor2: document.querySelector('.color2'),
    dColor3: document.querySelector('.color3'),
    dColor4: document.querySelector('.color4'),
    dColor5: document.querySelector('.color5'),
    dColor6: document.querySelector('.color6'),
    dPincel: document.querySelector('#pincel')
}
let estado = 0;
function Carga() {
    let tabla = document.createElement('table');
    tabla.classList.add('tablerodibujo')
    for (let i = 1; i <= 30; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= 30; j++) {
            let td = document.createElement('td');
            td.id = 'pos-'+i+'-'+j;
            td.setAttribute('onclick', 'ChangePincelStatus()')
            td.setAttribute('onmouseover', 'Pintar('+i+','+j+')');
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    DOM.dTabla.appendChild(tabla);
    estado = 0;
    PincelStatus(false);
}
function CambioColor(n) {
    let celdasColor = document.querySelector('table tr');
    celdasColor.querySelectorAll('td').forEach( td => {
        td.classList.remove('seleccionado');
    });
    switch (n) {
        case 1: DOM.dColor1.classList.add('seleccionado'); break;
        case 2: DOM.dColor2.classList.add('seleccionado'); break;
        case 3: DOM.dColor3.classList.add('seleccionado'); break;
        case 4: DOM.dColor4.classList.add('seleccionado'); break;
        case 5: DOM.dColor5.classList.add('seleccionado'); break;
        case 6: DOM.dColor6.classList.add('seleccionado'); break;
    }
}
function PincelStatus(b) {
    if (b == true){
        DOM.dPincel.textContent = 'PINCEL ACTIVADO...';
    }
    if (b == false){
        DOM.dPincel.textContent = 'PINCEL DESACTIVADO...';
    }
}
function ChangePincelStatus(){
    console.log(estado);
    if (estado == 0){
        estado = 1;
        PincelStatus(true);
    }
    else {
        estado = 0;
        PincelStatus(false);
    }
    
}
function Pintar(fila, columna) {
    if (estado==1){
        let casilla = document.querySelector('#pos-'+fila+'-'+columna);
        let ColorActual = document.querySelector('.seleccionado');
        casilla.style.backgroundColor = window.getComputedStyle(ColorActual).backgroundColor;
    }
}