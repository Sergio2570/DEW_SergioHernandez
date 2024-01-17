let DOM;
document.addEventListener('load',Inicio());
function Inicio(){
    let firstDiv = document.querySelector('.g-3');
    let firstDivArr = firstDiv.querySelectorAll('div');
    let secondDiv = document.querySelector('#tarjeta_credito');
    let secondDivArr = secondDiv.querySelectorAll('div');
    let options = document.querySelectorAll('.form-check');
    DOM ={
        Nombre: firstDivArr[0].querySelector('input'),
        Apellido: firstDivArr[2].querySelector('input'),
        Nick: firstDivArr[4].querySelector('input'),
        Isla: firstDivArr[7].querySelector('select'),
        Municipio: firstDivArr[9].querySelector('select'),
        CP: firstDivArr[11].querySelector('input'),
        //------
        Envio: options[0].querySelector('input'),
        Enviar: options[1].querySelector('input'),
        Empaquetar: options[2].querySelector('input'),
        //------
        Credito: options[3].querySelector('input'),
        Debito: options[4].querySelector('input'),
        Paypal: options[5].querySelector('input'),
        //------
        DivTarjetas: secondDiv,
        NombreTarjeta: secondDivArr[0].querySelector('input'),
        NumeroTarjeta: secondDivArr[2].querySelector('input'),
        FechaTarjeta: secondDivArr[4].querySelector('input'),
        CCVTarjeta: secondDivArr[6].querySelector('input'),
        //------
        Resetear: document.querySelector('form button.btn-secondary')
    };
    Islas();
    DOM.Isla.addEventListener('change',Municipios);
    //DOM.Resetear.addEventListener('click',Limpiar); Al pulsar Resetear se reinicia la página
    Radiobuttons();
    DOM.Nick.addEventListener('change',ValidarNick);
}
function Islas(){
    let gomera = document.createElement('option');
    gomera.textContent = 'La Gomera';
    gomera.value = 'La Gomera';
    gomera.id = 'Gomera';
    let hierro = document.createElement('option');
    hierro.textContent = 'El Hierro';
    hierro.value = 'El Hierro';
    hierro.id = 'Hierro';
    DOM.Isla.appendChild(gomera);
    DOM.Isla.appendChild(hierro);
    Municipios();
}
function Municipios(){
    let aux = DOM.Municipio.firstElementChild;
    while (DOM.Municipio.firstElementChild){
        DOM.Municipio.removeChild(DOM.Municipio.firstElementChild);
    }
    DOM.Municipio.appendChild(aux);
    if (DOM.Isla.value === 'La Gomera'){
        AddMunicipio('Agulo','LaGomera');
        AddMunicipio('Alajero','LaGomera');
        AddMunicipio('Hermigua','LaGomera');
        AddMunicipio('San Sebastián de la Gomera','LaGomera');
        AddMunicipio('Valle Gran Rey','LaGomera');
        AddMunicipio('Vallehermoso','LaGomera');
    }
    else if (DOM.Isla.value === 'El Hierro')
    {
        AddMunicipio('El Pinar','ElHierro');
        AddMunicipio('Frontera','ElHierro');
        AddMunicipio('Valverde','ElHierro');
    }
    else{
        /* El apartado 7 me pide que si no hay isla seleccionada los muestre todos.
        Por como está mi código no podía sin hacer esto*/
        AddMunicipio('Agulo','LaGomera');
        AddMunicipio('Alajero','LaGomera');
        AddMunicipio('Hermigua','LaGomera');
        AddMunicipio('San Sebastián de la Gomera','LaGomera');
        AddMunicipio('Valle Gran Rey','LaGomera');
        AddMunicipio('Vallehermoso','LaGomera');
        AddMunicipio('El Pinar','ElHierro');
        AddMunicipio('Frontera','ElHierro');
        AddMunicipio('Valverde','ElHierro');
    }
}
function AddMunicipio(nomMuni, isla){
    let option = document.createElement('option');
    option.textContent = nomMuni;
    option.setAttribute('Isla',isla);
    DOM.Municipio.appendChild(option);
}
function Limpiar(){
    DOM.Nombre.value = '';
    DOM.Apellido.value = '';
    DOM.Nick.value = '';
    DOM.Isla.value = '1';
    Municipios();
    DOM.CP.value = '';
    DOM.Envio.checked = false;
    DOM.Enviar.checked = false;
    DOM.Empaquetar.checked = false;
    DOM.Credito = false;
    DOM.Debito = false;
    DOM.Paypal = false;
    DOM.DivTarjetas.style.display = 'flex';
    DOM.NombreTarjeta.value = '';
    DOM.NumeroTarjeta.value = '';
    DOM.FechaTarjeta.value = '';
    DOM.CCVTarjeta.value = '';
}
function Radiobuttons(){
    const radios = document.querySelectorAll('input[type="radio');
    radios.forEach(nodo => {
        nodo.addEventListener('change',Pago);
    });
}
function Pago(){
    if (DOM.Paypal.checked == true)
    {
        DOM.DivTarjetas.style.display = 'none';
    }
    else {
        DOM.DivTarjetas.style.display = 'flex';
    }
}
function ValidarNick() {
    let regex = /^[a-z][a-z0-9 ]*$/;
    if (regex.test(DOM.Nick.value)){
        DOM.Nick.style.borderColor = 'green';
    }
    else{
        DOM.Nick.style.borderColor = 'red';
    }
}







