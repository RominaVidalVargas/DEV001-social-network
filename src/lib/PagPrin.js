import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { publicaciones } from '../controller/controladoresfb';

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
  document.getElementById('Publicar');
  btnPublicar.addEventListener('click', () => {
    const publicacion = modal.value;
    publicaciones(publicacion);
    console.log(publicacion);
  });
  tarjeta.append(modal, btnPublicar);
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
