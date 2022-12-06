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
    changeRouter('/pagPrincipal');
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

/* export function CrearCuenta() {
  return '<h1> CREAR CUENTA </h1>';
}
 export function crearCuenta() {
  const $crearCuenta = document.createElement('section');
  $crearCuenta.classList.add('crearCuenta');
  $crearCuenta.innerHTML = `
      <div clas="logIn2" id="logIn2">
        <img src="imagenes/patitasArr.png" class="patitasArr">
        <img src="imagenes/cerdo.png" class="animal">
        <h2>Crear Cuenta</h2>
    </header>
    <main>
      <div>
        <p class="frase1"> Crea una cuenta con tu correo</p>
        <div>
          <input type="email" class="email" name="email" id="logIn2-email"
          placeholder="ejemplo@gmail.com">
        </div>
        <div>
          <label for="password" class="frase2">Crea una Clave:</label>
          <div><input type="password" class="password" name="password"
          id="logIn2-password" minlength="8"
              placeholder="clave"></div>
        </div>
        <div>
          <label for="nickname" class="frase2">Como te llamaremos:</label>
          <div><input type="text" class="nickname" id="logIn2-nickName"
          placeholder="NickName"></div>
        </div>
        <div><img src="imagenes/perro.png" class="animal"></div>
        <button type="button" class="ir" id="ir2"> Ir</button>
        <div class="vinculoGoogle">
          <p class="frase">o</p>
          <button type="button" class="google"> <img class="googleImg"
          src="imagenesgoogle.png" /> Ingresa con tu
            Cuenta</button>
          <div><button type="button" class="regresar" id="regresar2">Regresar</button></div>
        </div>`;
  return crearCuenta;
} */
