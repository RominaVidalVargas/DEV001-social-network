// import { getFirestore, collection, addDoc,getDocs, onSnapshot} from '../controller';
import { doc } from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import { publicaciones, getNotes, onGetNotes, DeleteNotes, editNote, updateNotes, getNote } from '../controller/controladoresfb';

// para leer datos

 const ContenPubli = document.getElementById('contenPost');
 const WritePubli = document.getElementById('WritePubli');

let editStatus = false;
let id = '';

/* export const WritePubli = () => {
  const publicarMuro = document.createElement('div');
  publicarMuro.classList.add('publicarMuro');
  publicarMuro.innerHTML = `
  <form id ="WritePubli">
  <div class="muro">
  <textarea id="subject" name="subject" placeholder="Escribe tu publicación..." style="height:200px"></textarea>
  </div>

  <div class="boton">
  <input type="submit" value="Publicar" id = "submit">
  </div>
  </form>`;

 WritePubli.append(publicarMuro);
 return WritePubli
};

export const ContenPubli = () => {
  const post = document.createElement('div');
  post.classList.add('container');
  post.id = ('contenPost');
  ContenPubli.append(post);
  return ContenPubli
};*/ 

export function pagPrincipal() {
  onGetNotes((querySnapshot) => {
    ContenPubli.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      ContenPubli.innerHTML += `<div>
      
        <h3>${post.subject}</h3>
        
        <button class='Btnborrar' data-id='${doc.id}'>Borrar</button>
        <button class='Btneditar' data-id='${doc.id}'>Editar</button>
      </div>`;
    });

    // borrar publicaciones

    const Btnborrar = ContenPubli.querySelectorAll('.Btnborrar');
    Btnborrar.forEach((Btn) => 
      Btn.addEventListener('click', async ({ target: { dataset } }) => {
        try {
          await DeleteNotes(dataset.id);
        } catch (error) {
          console.log('error');
        }
      })
    );
    // editar publicaciones
    const Btneditar = ContenPubli.querySelectorAll(".Btneditar");
    Btneditar.forEach((Btn) => {
      Btn.addEventListener('click', async (e) => {
        try {
          const doc = await getNote(e.target.dataset.id);
          const nota = doc.data();
          WritePubli[' subject '].value = nota.subject;
          editStatus = true;
          id = doc.id;
          WritePubli["submit"].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
};

// actualizar publicaciones
WritePubli.addEventListener('submit', async (e) => {
  e.preventDefault();

  const post = WritePubli[' subject '];

  try {
    if (!editStatus) {
      await publicaciones(subject.value);
    } else {
      await updateNotes(id, {
        subject: subject.value,

      });

      editStatus = false;
      id = "";
      WritePubli["btn-task-form"].innerText = "Save";
    }

    WritePubli.reset();
    subject.focus();
  } catch (error) {
    console.log(error);
  }
});
