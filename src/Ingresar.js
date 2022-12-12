import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
  const BtnIr = document.createElement('button');
  BtnIr.textContent = 'Ir';
  BtnIr.classList.add('ir');
  const imgGoogle = document.createElement('div');
  imgGoogle.classList.add('imgGoogle');
  imgGoogle.innerHTML = `
    <img src="imagenes/google.png">`;
  const Btngoogle = document.createElement('button');
  Btngoogle.textContent = 'Ingresa con tu cuenta';
  Btngoogle.classList.add('google');
  // Btngoogle.img = 'src="imagenes/google.png"';

  BtnIr.addEventListener('click', () => {
    changeRouter('/pagPrincipal');
  });

  Btngoogle.addEventListener('click', async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      changeRouter('/PagPrincipal');
    } catch (error) {
      console.log(error);
    }
  });
  /* signInWithPopup(auth, provider)
    // signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        changeRouter('/pagPrincipal');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
     // The email of the user's account used.
        if (error.code === 'auth/email-already-in-use') {
          alert('Error 1 ingresar', 'error');
        } else if (error.code === 'auth/invalid-email') {
          alert('Error 2 ingresar');
        };
        }
      });
  });
 */
  contenedorIng.append(email, password, BtnIr, imgGoogle, Btngoogle);
  return contenedorIng;
};
