import { nuevoUsuario, saveTask } from '../controller/controladoresfb';

// import { changeRouter } from '../main.js';
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const crearCuenta = (changeRouter) => {
  const contenedorCrea = document.createElement('div');
  contenedorCrea.classList.add('logIn2');
  contenedorCrea.innerHTML = `
    <img src="imagenes/patitasArr.png" class="patitasArr">
    <img src="imagenes/cerdo.png" class="animal">
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
  password.minlength = '6 required';
  password.placeholder = 'clave';
  const errorInfo = document.createElement('p');
  errorInfo.id = 'errorInfo';
  const BtnOjo = document.createElement('button');
  BtnOjo.textContent = 'Mostrar';
  BtnOjo.classList.add('Ojo');
  const BtnIr2 = document.createElement('button');
  BtnIr2.textContent = 'Crear Cuenta';
  BtnIr2.classList.add('ir');

  BtnOjo.addEventListener('click', () => {
    const tipo = document.getElementById('password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  });
  BtnIr2.addEventListener('click', () => {
    const userNickName = nickName.value;
    const userEmail = email.value;
    const userPassword = password.value;
    nuevoUsuario(userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        changeRouter('/pagPrincipal');
        // ...
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          document.getElementById('errorInfo').innerHTML = 'Este usuario ya se encuentra registrado';
        } else if (error.code === 'auth/invalid-email') {
          document.getElementById('errorInfo').innerHTML = 'El correo ingresado no es válido';
        } else if (password.length < 6) {
          document.getElementById('errorInfo').innerHTML = 'Password mínimo 6 caracteres';
        } else if (error.code === 'auth/weak-password') {
          document.getElementById('errorInfo').innerHTML = 'La clave debe tener al menos seis caracteres';
        }
      });
    saveTask(userNickName, userEmail, userPassword);
    console.log(saveTask);
  });
  contenedorBotones.appendChild(nickName);
  contenedorBotones.appendChild(email);
  contenedorBotones.appendChild(password);
  contenedorBotones.appendChild(BtnOjo);
  contenedorBotones.appendChild(errorInfo);
  contenedorBotones.appendChild(BtnIr2);
  contenedorCrea.append(contenedorBotones);
  return contenedorCrea;
};