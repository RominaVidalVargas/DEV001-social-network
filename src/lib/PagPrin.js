/* eslint-disable max-len */
// import { Firestore, collection, addDoc } from 'firebase/firestore';
// import { onAuthStateChanged, auth } from 'firebase/auth';
// import { Auth } from 'firebase/auth';
import { publicaciones, salir } from '../controller/controladoresfb';
import { auth } from '../controller/firebase';

/* onAuthStateChanged(auth, async (user) => {
  console.log(user);
}); */

export function pagPrincipal() {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add = 'tarjeta';
  tarjeta.innerHTML = '<p> Encabezado </p>';

  const modal = document.createElement('input');
  modal.classList.add('modal');
  modal.id = 'modal';
  modal.type = 'textarea';
  modal.name = 'modal';
  modal.row = '33';
  modal.cols = '33';
  modal.placeholder = 'escribe a quí tu publicaicón';
  const btnPublicar = document.createElement('button');
  btnPublicar.textContent = 'Publicar';
  btnPublicar.classList.add('Publicar');
  btnPublicar.id = 'Publicar';
  // document.getElementById('Publicar');
  const btnSalir = document.createElement('button');
  btnSalir.textContent = 'Salir';
  btnSalir.classList.add('nav-item');
  btnSalir.id = 'Salir';

  // Eventos
  btnPublicar.addEventListener('click', () => {
    const publicacion = modal.value;
    publicaciones(publicacion);
    console.log(publicacion);
  });
  btnSalir.addEventListener('click', async () => {
    await salir(auth);
  });
  /* btnSalir.addEventListener('click', () => {
    salir (user) {
      if (user) {
        const uid = user.uid;
      } else {

      }

    }
  })

    publicaciones(publicacion);
    console.log(publicacion);
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
      }); */

  tarjeta.append(modal, btnPublicar, btnSalir);
  return tarjeta;
}

/* document.getElementById('publicar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('publicar').style.display = 'none';
  document.getElementById('modalPublicar').style.display = 'block';
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
}); */
