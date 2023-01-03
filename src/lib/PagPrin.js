//import { getFirestore, collection, addDoc,getDocs, onSnapshot} from '../controller';
import { doc } from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import { publicaciones, getNotes, onGetNotes, DeleteNotes, editNote, updateNotes, getNote } from '../controller/controladoresfb';






//para leer datos
const WritePubli = document.getElementById('WritePubli');
const ContenPubli = document.getElementById('contenPost');


let editStatus = false;
let id = '';

export function pagPrincipal() {
  onGetNotes((querySnapshot) => {
    ContenPubli.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      ContenPubli.innerHTML += `<div>
        <h3>${post.subject}</h3>
        <button class='Btnborrar' data-id='${doc.id}'>Borrar</button>
        <button class='Btneditar' data-id='${doc.id}'>Editar</button>
       
       
    
   
        </div>`;
    });

    //borrar publicaciones

    const Btnborrar = ContenPubli.querySelectorAll(".Btnborrar");
    Btnborrar.forEach((Btn) => 
      Btn.addEventListener('click', async ({ target: { dataset } }) => {
        try {
          await DeleteNotes(dataset.id);
        } catch (error) {
          console.log('error');
        }

      })
    );
    //editar publicaciones
    const Btneditar = ContenPubli.querySelectorAll(".Btneditar");
    Btneditar.forEach((Btn) => {
      Btn.addEventListener('click', async (e) => {
        try {
          const doc = await getNote(e.target.dataset.id);
          const nota = doc.data();
          WritePubli['subject'].value = nota.subject;
          editStatus = true;
          id = doc.id;
          WritePubli["submit"].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
 
   
  }
  
  
  


//actualizar publicaciones
WritePubli.addEventListener("submit", async (e) => {
  e.preventDefault();

  const post = WritePubli["subject"];

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


