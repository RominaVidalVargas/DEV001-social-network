import { inicio } from './lib/Inicio';
import { crearCuenta } from './lib/CrearCuenta.js';
import { ingresar } from './lib/Ingresar';
import { pagPrincipal } from './lib/PagPrin';

const containerRoot = document.getElementById('root');

export const changeRouter = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  containerRoot.removeChild(containerRoot.firstChild);
  containerRoot.appendChild(rutas[pathname]);

};

const rutas = {
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
const counterVal = 0;

