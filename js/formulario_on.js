let DOM;
let Freddy;
let fila;

const iniciar = () => { 
  carga_datos();
  DOM = {
    "tabla": document.querySelector('.table'),
    "cabeza": document.querySelector('.table thead'),
    "cuerpo": document.querySelector('.table tbody'),
    "formulario": document.querySelector('#formulario'),
    "nuevo": document.querySelector('#nuevo')
  };
  DOM.formulario.style.display = 'none';
  DOM.nuevo.addEventListener('click',NewUser);
  DOM.cuerpo.addEventListener('click',CargarAForm);
};
window.addEventListener("load", iniciar, false); 
const carga_datos = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then(response => response.json())
    .then(json => {
      Freddy = json;
      CargarTabla(Freddy);
    });
};
function CargarTabla (jason) {
  let body = document.querySelector('.table tbody');
  jason.forEach(columnas => {
    let tr = document.createElement('tr');
    let userId = document.createElement('td');
    userId.textContent = columnas.userId; 
    tr.appendChild(userId);
    let ide = document.createElement('td');
    ide.textContent = columnas.id;
    tr.appendChild(ide);
    let title = document.createElement('td');
    title.textContent = columnas.title;
    tr.appendChild(title);
    let completed = document.createElement('td');
    completed.textContent = columnas.completed;
    tr.appendChild(completed);
    body.appendChild(tr);
  });
};
//-------------------------------------
function NewUser() {
  DOM.formulario.style.display = 'block';
  let iUseri = document.querySelector('#userId');
  iUseri.parentNode.style.display = 'none';
  ClearForm();
  let Aceptar = document.querySelector('#formulario .btn-primary');
  let Cancelar = document.querySelector('#formulario .btn-secondary');
  Aceptar.addEventListener('click', AceptarForm);
  Cancelar.addEventListener('click', CerrarForm);
}
function AbrirForm(){
  DOM.formulario.style.display = 'block';
  let iUseri = document.querySelector('#userId');
  iUseri.parentNode.style.display = 'none';
}
function CerrarForm(){
  ClearForm();
  DOM.formulario.style.display = 'none';
}
function ClearForm(){
  let iId = document.querySelector('#id');
  iId.value = '';
  let iTitulo = document.querySelector('#title');
  iTitulo.value = '';
  let iCompleted = document.querySelector('#completed');
  iCompleted.checked = false;
}
function AceptarForm(){
  let body = document.querySelector('.table tbody');
  let tr = document.createElement('tr');
  //UserID
  let userId = document.createElement('td');
  userId.textContent = body.lastChild.querySelector('td:nth-child(1)').textContent; 
  tr.appendChild(userId);
  //ID
  let ide = document.createElement('td');
  ide.textContent = parseInt(body.lastChild.querySelector('td:nth-child(2)').textContent) + 1;
  tr.appendChild(ide);
  //Titulo
  let iTitulo = document.querySelector('#title');
  let title = document.createElement('td');
  title.textContent = iTitulo.value;
  tr.appendChild(title);
  //Completo
  let iCompleted = document.querySelector('#completed');
  let completed = document.createElement('td');
  completed.textContent = iCompleted.checked;
  tr.appendChild(completed);
  //Fin
  body.appendChild(tr);
  CerrarForm();
}
function CargarAForm(){
  fila = event.target.closest('tr');
  AbrirForm();
  document.querySelector('#id').value = fila.querySelector('td:nth-child(2)').textContent;
  document.querySelector('#title').value = fila.querySelector('td:nth-child(3)').textContent;
  if (fila.querySelector('td:nth-child(4)').textContent == 'true'){
    document.querySelector('#completed').checked = true;
  }
  else {
    document.querySelector('#completed').checked = false;
  }
  let Aceptar = document.querySelector('#formulario .btn-primary');
  let Cancelar = document.querySelector('#formulario .btn-secondary');
  Aceptar.addEventListener('click', () => {EditarForm(fila);});
  Cancelar.addEventListener('click', CerrarForm);
}
function EditarForm(fila){
  fila.querySelector('td:nth-child(3)').textContent = document.querySelector('#title').value;
  fila.querySelector('td:nth-child(4)').textContent = document.querySelector('#completed').checked;
  fila = '';
}