// import { getFirestore, collection, addDoc,getDocs, onSnapshot} from '../controller';
import { doc } from 'firebase/firestore';
import {
  publicaciones, getNotes, onGetNotes, DeleteNotes, editNote, updateNotes, getNote,
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
          WritePubli.subject.value = nota.subject;
          editStatus = true;
          id = doc.id;
          WritePubli.submit.innerText = 'Update';
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

    const post = e.target[' subject '];

    try {
      if (!editStatus) {
        await publicaciones(subject.value);
      } else {
        await updateNotes(id, {
          subject: subject.value,

        });

        editStatus = false;
        id = '';
        WritePubli['btn-task-form'].innerText = 'Save';
      }

      WritePubli.reset();
      subject.focus();
    } catch (error) {
      console.log(error);
    }
  });

  contenedor.append(WritePubli);
  return contenedor;
}

/* window.onload = function () {
  const clickDiv = document.getElementById('click-div');
  clickDiv.onclick = incrementClick;

  const resetBtn = document.getElementById('reset-button');
  resetBtn.onclick = resetCounter;
};

let counterVal = 0;

incrementClick = function () {
  updateDisplay(++counterVal);
};

function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
}

function updateDisplay(val) {
  document.getElementById('counter-label').innerHTML = val;
}
 */
