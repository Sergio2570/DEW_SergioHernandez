function Load(){document.querySelector('#title').textContent = 'Este es el título'}
document.addEventListener('keydown',function(event){
    console.log(event.key);
    let tecla;
    let letra = event.key;
    if (letra == '<'){
        tecla = document.querySelector('#tdMinor');
    }
    else if (letra == ' '){
        tecla = document.querySelector('#tdSpace');
    }
    else {
        tecla = document.querySelector('#td'+letra.toUpperCase());
    }
    Color(tecla);
});
function Color(tecla){
    let color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," +  Math.floor(Math.random() * 256) + ")";
    tecla.style.backgroundColor = color;
}
