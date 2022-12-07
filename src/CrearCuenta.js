import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const crearCuenta = (changeRouter) => {
  const contenedorCrea = document.createElement('div');
  contenedorCrea.classList.add('logIn2');
  contenedorCrea.innerHTML = `
    <img src="imagenes/patitasArr.png" class="patitasArr">
    <img src="imagenes/cerdo.png" class="animal">
    <h2>Crear Cuenta</h2>
</header>
<main>
  <div>
    <p class="frase1"> Crea una cuenta con tu correo</p>
    <div>`;
  const contenedorBotones = document.createElement('div');
  contenedorBotones.classList.add('logIn3');
  const nickName = document.createElement('input');
  nickName.classList.add('nickName');
  nickName.id = 'nickName';
  nickName.type = 'text';
  nickName.name = 'nickName';
  nickName.placeholder = 'nickName';
  const email = document.createElement('input');
  email.classList.add('email');
  email.id = 'email';
  email.type = 'email';
  email.name = 'email';
  email.placeholder = 'ejemplo@gmail.com';
  const password = document.createElement('input');
  password.classList.add('password');
  password.id = 'password';
  password.type = 'password';
  password.name = 'password';
  password.placeholder = 'clave';
  const BtnIr2 = document.createElement('button');
  BtnIr2.textContent = 'Ir';
  BtnIr2.classList.add('ir');
  const imgGoogle = document.createElement('div');
  imgGoogle.classList.add('imgGoogle');
  imgGoogle.innerHTML = `
    <img src="imagenes/google.png">`;
  const Btngoogle = document.createElement('button');
  Btngoogle.textContent = 'Ingresa con tu cuenta';
  Btngoogle.classList.add('google');

  BtnIr2.addEventListener('click', () => {
    const userEmail = email.value;
    const userPassword = password.value;
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        changeRouter('/pagPrincipal');
        // ...
      })

      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Este usuario ya se encuentra registrado', 'error');
        } else if (error.code === 'auth/invalid-email') {
          alert('El correo ingresado no es válido');
        } else if (error.code === 'auth/weak-password') {
          alert('La clave debe tener al menos seis caracteres');
        } else if (error.code) {
          alert('El usuario o la clave son incorrectos');
        }
      });
  });

  contenedorBotones.appendChild(nickName);
  contenedorBotones.appendChild(email);
  contenedorBotones.appendChild(password);
  contenedorBotones.appendChild(BtnIr2);
  contenedorBotones.appendChild(imgGoogle);
  contenedorBotones.appendChild(Btngoogle);
  contenedorCrea.append(contenedorBotones);
  return contenedorCrea;
};
