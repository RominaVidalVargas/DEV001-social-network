// import { getFirestore, collection, addDoc,getDocs, onSnapshot} from '../controller';
// import { doc } from 'firebase/firestore';
import {
  publicaciones, onGetNotes, DeleteNotes, updateNotes, getNote,
} from '../controller/controladoresfb';

// para leer datos

let editStatus = false;
let id = '';
export const makeWritePubli = () => {
  const publicarMuro = document.createElement('div');
  publicarMuro.classList.add('publicarMuro');
  publicarMuro.innerHTML = `
  <form id ="WritePubli">
  <div class="muro">
  <img class="img" src="imagenes/logo.png"/>
  <textarea id="subject" name="subject" placeholder="Escribe tu Publicación..." ></textarea>
  </div>
  <button type="submit"  id = "btnPublicar">Publicar
  </div>
  </form>`;

  return publicarMuro;
};

export const makeContenPubli = () => {
  const post = document.createElement('div');
  post.classList.add('container');
  post.id = ('contenPost');
  return post;
};

export function pagPrincipal() {
  const contenedor = document.createElement('div');
  const ContenPubli = makeContenPubli();
  onGetNotes((querySnapshot) => {
    ContenPubli.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      ContenPubli.innerHTML += `<div>
      
        <h3>${post.subject}</h3>
        <div id="likes">   
        <p id="counter-label">0
          <img src="imagenes/like.png" id="like" type="button" onclick="incrementClick()"></button>
        <button class='Btnborrar' data-id='${doc.id}'>Borrar</button>
        <button class='Btneditar' data-id='${doc.id}'>Editar</button></p>
        </div> </div>`;
    });

    // borrar publicaciones

    const Btnborrar = ContenPubli.querySelectorAll('.Btnborrar');
    Btnborrar.forEach((Btn) => Btn.addEventListener('click', async ({ target: { dataset } }) => {
      try {
        await DeleteNotes(dataset.id);
      } catch (error) {
        console.log('error');
      }
    }));
    // editar publicaciones
    const Btneditar = ContenPubli.querySelectorAll('.Btneditar');
    Btneditar.forEach((Btn) => {
      Btn.addEventListener('click', async (e) => {
        try {
          const doc = await getNote(e.target.dataset.id);
          const nota = doc.data();
          WritePubli.firstElementChild.subject.value = nota.subject;
          editStatus = true;
          id = doc.id;
          WritePubli.firstElementChild.submit.innerText = 'Update';
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
  // actualizar publicaciones
  contenedor.append(ContenPubli);
  const WritePubli = makeWritePubli();
  WritePubli.addEventListener('submit', async (e) => {
    e.preventDefault();

    const post = e.target.subject;
    console.log(post);

    try {
      if (!editStatus) {
        await publicaciones(subject.value);
      } else {
        await updateNotes(id, {
          subject: subject.value,

        });

        editStatus = false;
        id = '';
        WritePubli.firstElementChild.submit.innerText = 'Save';
      }
      console.log(WritePubli);
      WritePubli.firstElementChild.reset();
      subject.focus();
    } catch (error) {
      // console.log(error);
    }
  });

  contenedor.append(WritePubli);
  return contenedor;
}
