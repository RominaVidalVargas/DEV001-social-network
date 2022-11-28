// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// cambio de pantallas por botones
document.getElementById('crearCuenta').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('logIn2').style.display = 'block';
});

document.getElementById('ingresar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('logIn').style.display = 'block';
});

document.getElementById('ir').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('logIn').style.display = 'none';
  document.getElementById('pagPrincipal').style.display = 'block';
});

document.getElementById('ir2').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('logIn2').style.display = 'none';
  document.getElementById('pagPrincipal').style.display = 'block';
});

document.getElementById('regresar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('logIn').style.display = 'none';
  document.getElementById('inicio').style.display = 'block';
});

document.getElementById('regresar2').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('logIn2').style.display = 'none';
  document.getElementById('inicio').style.display = 'block';
});
