/* import { CrearCuenta } from './componentes/CrearCuenta.js';
import { Ingresar } from './componentes/Ingresar.js';
import { Inicio } from './componentes/Inicio.js';

const routes = {
  '/': Inicio,
  '/ingresar': Ingresar,
  '/crear-cuenta': CrearCuenta,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname]();

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,

  );
  rootDiv.innerHTML = routes[pathname];
};
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

/* import { inicio } from './inicio.js';
import { router } from './router.js';

// export function App() {
// document.root = document.getElementById('root');

// document.root.appendChild(PagPrincipal());
// }

export function app() {
  document.root = document.getElementById('root');
  document.root.appendChild(inicio()),

  router();
} */
