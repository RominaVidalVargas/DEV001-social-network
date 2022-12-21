// import { nuevoUsuario, saveTask } from '../controller/controladoresfb';
// import { publicaciones } from '../controller/controladoresfb.js';
// import { modal } from './PagPrin.js';

/* export const usuarioNuevo = () => {
  const BtnIr2 = document.querySelector('#BtnIr2');
  BtnIr2.addEventListener('click', () => {
    const userNickName = document.querySelector('#nickName').value;
    const userEmail = document.querySelector('#email').value;
    const userPassword = document.querySelector('#password').value;
    nuevoUsuario(userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })

      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          document.getElementById('errorInfo').innerHTML = 'Este usuario ya se encuentra registrado';
        } else if (error.code === 'auth/invalid-email') {
          document.getElementById('errorInfo').innerHTML = 'El correo ingresado no es válido';
        } else if (userPassword.length < 6) {
          document.getElementById('errorInfo').innerHTML = 'Password mínimo 6 caracteres';
        } else if (error.code === 'auth/weak-password') {
          document.getElementById('errorInfo').innerHTML = 'La clave debe tener al menos seis caracteres';
        }
      });

    saveTask(userNickName, userEmail);
    console.log(saveTask);
  });
}; */
