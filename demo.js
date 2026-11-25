const estado = document.querySelector('#estado-prueba');
document.querySelector('#cambiar').addEventListener('click', () => {
  estado.textContent = estado.textContent === 'Solicitud recibida' ? 'Solicitud atendida' : 'Solicitud recibida';
  estado.hidden = false;
});
document.querySelector('#ocultar').addEventListener('click', () => {
  estado.hidden = true;
});
document.querySelector('#restaurar').addEventListener('click', () => {
  estado.textContent = 'Solicitud recibida';
  estado.hidden = false;
});
