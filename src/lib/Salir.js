import { changeRouter } from '../main.js'

const mostrarPost = document.getElementById ('modal');
const salir = document.getElementById ('salir');


export const fuera = (user) => {
  if (user) {
    // eslint-disable-next-line no-return-assign
    mostrarPost.forEach((modal) => modal.style.display = 'block');
    console.log('mostrar post')
  } else {
    changeRouter('/inicio');
  }
  console.log('salir');
};
