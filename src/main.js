import { inicio } from './Inicio.js';
import { crearCuenta } from './CrearCuenta.js';
import { ingresar } from './Ingresar.js';
import { pagPrincipal } from './PagPrin.js';

const containerRoot = document.getElementById('root');
let rutas = {};

const changeRouter = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  containerRoot.removeChild(containerRoot.firstChild);
  containerRoot.appendChild(rutas[pathname]);
};

rutas = {
  '/': inicio(changeRouter),
  '/crearCuenta': crearCuenta(changeRouter),
  '/ingresar': ingresar(changeRouter),
  '/pagPrincipal': pagPrincipal(changeRouter),
};

const verPost = () => rutas[window.location.pathname];

window.onpopstate = () => {
  containerRoot.removeChild(containerRoot.firstChild);
  containerRoot.append(verPost());
};
containerRoot.appendChild(verPost());

// import { registrar } from 'firebase/auth';
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// import { routes, onNavigate, rootDiv } from './app.js';

// document.addEventListener('DOMContentLoaded', app);
// window.addEventListener('hashchande', app);

// myFunction();

// cambio de pantallas por botones

/* document.getElementById('crearCuenta').addEventListener('click', (e) => {
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

document.getElementById('publicar2').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('modalPublicar').style.display = 'none';
  document.getElementById('cuerpo').style.display = 'block';
});

document.getElementById('publicar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('publicar').style.display = 'none';
  document.getElementById('modalPublicar').style.display = 'block';
});

document.getElementById('perfil').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('publicar').style.display = 'none';
  document.getElementById('modalPublicar').style.display = 'none';
  document.getElementById('modalCierre').style.display = 'block';
});

document.getElementById('cerrar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('pagPrincipal').style.display = 'none';
  document.getElementById('inicio').style.display = 'block';
});

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('modalCierre').style.display = 'none';
  document.getElementById('modalPublicar').style.display = 'none';
  document.getElementById('publicar').style.display = 'block';
});

// CREAR CUENTA

const crearEmail = document.querySelector('#logIn2-email');
const crearPassword = document.querySelector('#logIn2-password');
const crearNickName = document.querySelector('#logIn2-nickName');
const botonIr2 = document.querySelector('#ir2');

botonIr2.addEventListener('click', () => {
  const email = crearEmail.value;
  const password = crearPassword.value;
  const nickName = crearNickName.value;
  console.log(email, password, nickName);
});

/* registrar.then((userCredential) => {
  Signed in
const user = userCredential.user;

})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
 ..
}); */
