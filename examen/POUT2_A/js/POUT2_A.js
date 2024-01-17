const DOM = {
    PrimerImput: document.querySelector('#numero_ventas'),
    SegundoImput: document.querySelector('#sueldo_mensual'),
    Resultado: document.querySelector('form p:last-child')
}
let ventasN;
let sueldoN;
let Coeficiente;
let Texto;
let Bonus;

//----------------------------
function calcula_bonif(){
    PrimerImput = DOM.PrimerImput; 
        ventasN = PrimerImput.value;
    SegundoImput = DOM.SegundoImput; 
        sueldoN = SegundoImput.value;
    Texto = DOM.Resultado;
    if (!isNaN(ventasN) && /^\d+$/.test(ventasN)){
        if (!isNaN(sueldoN) && sueldoN > 0){
            Coeficiente = CalcularCoeficiente(ventasN);
            Bonus = CalcularBonus(sueldoN,Coeficiente); 
            Texto.innerHTML = 'El comercial ha realizado ' + ventasN 
                            + ' ventas, por lo que supone un coeficiente ' + Coeficiente 
                            + ' que le ha generado una bonificación de ' + Bonus 
                            + '€, lo que hace un total de ' + (parseInt(Bonus)+parseInt(sueldoN)) + '€';
        }
        else {
            SegundoImput.value = "";
            alert("El sueldo tiene que ser un número real positivo")
        }
    }
    else {
        PrimerImput.value = "";
        alert("El número de ventas tiene que ser un número entero mayor que 0")
    }
    console.log('final');
}
function CalcularBonus(base, potencia){
    let aux = Math.pow(base,potencia);
    Bonus = Math.round(Math.sqrt(aux));
    return Bonus;
}
function CalcularCoeficiente(PrimerImput){
    switch (true){
        case PrimerImput < Ventas.Rango1.Nventas: 
            Coeficiente = Ventas.Rango1.Coeficiente; 
            return Coeficiente;
        case PrimerImput < Ventas.Rango2.Nventas: 
            Coeficiente = Ventas.Rango2.Coeficiente;
            return Coeficiente;
        case PrimerImput < Ventas.Rango3.Nventas: 
            Coeficiente = Ventas.Rango3.Coeficiente;
            return Coeficiente;
        case PrimerImput < Ventas.Rango4.Nventas: 
            Coeficiente = Ventas.Rango4.Coeficiente;
            return Coeficiente;
        case PrimerImput < Ventas.Rango5.Nventas: 
            Coeficiente = Ventas.Rango5.Coeficiente;
            return Coeficiente;
    }
}

//--------------------- JASON ---------------------
const Ventas = {
    Rango1: {
        Nventas: 1000,
        Coeficiente: 1
    },
    Rango2: {
        Nventas: 5000,
        Coeficiente: 1.5
    },
    Rango3: {
        Nventas: 10000,
        Coeficiente: 2
    },
    Rango4: {
        Nventas: 20000,
        Coeficiente: 2.25
    },
    Rango5: {
        Nventas: 99999999, //Si pones Math.max() tienes -Infinity, lo que hace que al meter cosas grandes peta
        Coeficiente: 2.5
    }
}