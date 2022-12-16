export const inicio = (changeRouter) => {
  const contenedorIni = document.createElement('div');
  contenedorIni.classList.add('inicio');
  contenedorIni.innerHTML = `
  <header>
      <h1>Bienvenidos a</h1>
      <img src="imagenes/logo.png" class="logo">
      <p class="frase">El mundo de tu Mascota</p>
      </div>
      </header>
  `;
  const Btning = document.createElement('button');
  Btning.textContent = 'Ingresar';
  Btning.classList.add('ingresar');
  const crear = document.createElement('button');
  crear.textContent = 'Crear cuenta';
  crear.classList.add('crearCuenta');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
  <footer class="footer">
    <img src="imagenes/patitasAba.png" class="patitasAba">
  </footer>`;

  Btning.addEventListener('click', () => {
    changeRouter('/ingresar');
  });
  crear.addEventListener('click', () => {
    changeRouter('/crearCuenta');
  });
  contenedorIni.append(Btning, crear, footer);
  return contenedorIni;
};
