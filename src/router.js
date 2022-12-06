// importar cada archivo de template hacia aca
/*import { inicio} from './inicio.js';
import { ingresar} from './ingresar.js';
import { crearCuenta } from './crearCuenta.js';

const containerRoot = document.getElementById('root');
let rutas = {};
// Efectivamente mostrar los hash
 const changeRouter = (pathname) => {
 window.history.pushState(
  {},
  pathname,
  window.location.origin + pathname,
  ); 
  containerRoot.removeChild(containerRoot.firstChild);
  containerRoot.appendChild(rutas[pathname]);
};

  
  rutas= {
    '/': inicio(changeRouter),
  '/crearCuenta': crearCuenta(changeRouter),
  '/ingresar': ingresar(changeRouter),
  };
  
const components = () => rutas[window.location.pathname];

window.onpopstate = () => {
  containerRoot.removeChild(containerRoot.firstChild);
  containerRoot.append(components());
};
containerRoot.appendChild(components());*/

  
