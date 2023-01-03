import { getAuth, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { SignIn } from '../controller/controladoresfb';


export const ingresar = (changeRouter) => {
  const contenedorIng = document.createElement('div');
  contenedorIng.classList.add('logIn');
  contenedorIng.innerHTML = `
  <header>
    <img src="imagenes/patitasArr.png" class="patitasArr">
    <div clas="logIn" id="logIn">
      <div><img src="imagenes/gato.png" class="animal" />
  </header>
  <main>
    <p class="frase1"> Ingresa con tu cuenta de correo</p>
    <div>`;
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
  const errorInfo2 = document.createElement('p');
  errorInfo2.id = 'errorInfo2';
  // errorInfo2.innerText = 'Aquí deben aparecer los errores';

  const BtnOjo = document.createElement('button');
  BtnOjo.textContent = 'Mostrar';
  BtnOjo.classList.add('Ojo');
  const BtnIr = document.createElement('button');
  BtnIr.textContent = 'Ir';
  BtnIr.classList.add('ir');
  const imgGoogle = document.createElement('div');
  imgGoogle.classList.add('imgGoogle');
  imgGoogle.innerHTML = `
    <img src="imagenes/google.png" class="imgGoogle">`;
  const Btngoogle = document.createElement('button');
  Btngoogle.textContent = 'Ingresa con tu cuenta';
  Btngoogle.classList.add('google');
 
  BtnIr.addEventListener('click', () => {
    const userEmail = email.value;
    const userPassword = password.value;
    SignIn(userEmail, userPassword, changeRouter)
      .then((userCredential) => {
        changeRouter('/pagPrincipal');
        
        const user = userCredential.user;
        console.log(user);
     })
     
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          document.getElementById.innerHTML = 'Este usuario ya se encuentra registrado';
        } else if (error.code === 'auth/invalid-email') {
          document.getElementById('errorInfo2').innerHTML = 'El correo ingresado no es válido';
        } else if (password.length < 6) {
          document.getElementById('errorInfo2').innerHTML = 'Password mínimo 6 caracteres';
        } else if (error.code === 'auth/weak-password') {
          document.getElementById('errorInfo2').innerHTML = 'La clave debe tener al menos seis caracteres';
        }
        
      });


  });

  BtnIr.addEventListener('click', () => {
    const verFormulario = document.getElementsByClassName('formulario').style.display = 'block';
  });
  
  BtnOjo.addEventListener('click', () => {
    const tipo = document.getElementById('password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  });
  Btngoogle.addEventListener('click', async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
      changeRouter('/pagPrincipal');
    } catch (error) {
      console.log(error);
    }
  });
 
  contenedorIng.append(email, password, BtnOjo, BtnIr, imgGoogle, Btngoogle);
  return contenedorIng;
};
