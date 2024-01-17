/* TABLA */
const alimentacion=[
    {alimento:"Arandano", tipo:"Fruta", calorias:"41", proteinas:"0,6"},
    {alimento:"Ciruela", tipo:"Fruta", calorias:"36", proteinas:"0,5"},
    {alimento:"Frambuesa", tipo:"Fruta", calorias:"-", proteinas:"1"},
    {alimento:"Fresa", tipo:"Fruta", calorias:"27", proteinas:"0,9"},
    {alimento:"Piñón", tipo:"Fruto Seco", calorias:"568", proteinas:"29,6"},
    {alimento:"Pistacho", tipo:"Fruto Seco", calorias:"600", proteinas:"-"},  
    {alimento:"Ciruela pasa", tipo:"Fruto Seco", calorias:"177", proteinas:""},
    {alimento:"Dátil seco", tipo:"Fruto Seco", calorias:"256", proteinas:"2,7"},
    {alimento:"Aguacate", tipo:"Fruta", calorias:"", proteinas:"1,9"},
    {alimento:"Cereza", tipo:"Fruta", calorias:"48", proteinas:"0,8"},
    {alimento:"Higo seco", tipo:"Fruto Seco", calorias:"270", proteinas:"3,5"},
    {alimento:"Nuez", tipo:"Fruto Seco", calorias:"670", proteinas:"15,6"},
    {alimento:"Albaricoque", tipo:"Fruta", calorias:"52,4", proteinas:"0"}
];
const cuerpoTabla = document.getElementsByTagName('tbody')[0];
let fila;
for (let i = 0; i < alimentacion.length; i++) { 
    fila = `<tr>
                <td>${alimentacion[i].alimento}</td>
                <td>${alimentacion[i].tipo}</td>
                <td>${alimentacion[i].calorias}</td>
                <td>${alimentacion[i].proteinas}</td>
            </tr>`;
    cuerpoTabla.innerHTML += fila;
}
/* PRODUCTOS CALÓRICOS */
const calcular = document.querySelector('div[title=calcular]');
let FrutaName;
let FrutaValue = 0;
let SecoName;
let SecoValue = 0;
let MayFruta;
let MaySeco;
for (let i = 0; i < alimentacion.length; i++) {
    if (alimentacion[i].tipo == "Fruta"){
        if (alimentacion[i].calorias > FrutaValue){
            FrutaName = alimentacion[i].alimento;
            FrutaValue = alimentacion[i].calorias;
        }
    }
    else{
        if (alimentacion[i].calorias > SecoValue){
            SecoName = alimentacion[i].alimento;
            SecoValue = alimentacion[i].calorias;
        }
    }
    MayFruta = `<h2>La fruta con más calorias es ${FrutaName} con ${FrutaValue} calorías</h2>`;
    MaySeco = `<h2>El fruto seco con más calorias es ${SecoName} con ${SecoValue} calorías</h2>`;
}
calcular.appendChild()

/* VENTANA VIAJERA */
const medida = "height=300,width=300";
let pagina;
let time = -1; let intervalo;
let x; let y;
function configTimer(){
    if (time == -1){
        time = document.getElementById("numSeg").value;
        if (!isNaN(time)){
            pagina = window.open("about:blank", "Blanco", medida);
            time = time*1000;
            console.log(time);
            intervalo = setInterval(moveWindow,time);
        }
        else {
            alert("Debe introducir un número válido para indicar los segundos");
            time = -1;
        }
    }
    else {
        alert("Debe parar el primer intervalo");
    }
}
function stopTimer(){
    clearInterval(intervalo);
    intervalo = "a";
    time = -1;
    pagina.close();
    pagina = "";
}
function moveWindow(){
    x = Math.random() * (screen.availWidth - 300);
    y = Math.random() * (screen.availHeight - 300);
    pagina.moveTo(x,y);
    console.log("a");
}