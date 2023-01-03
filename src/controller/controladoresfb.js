import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged

} from 'firebase/auth';
import { getFirestore, 
  collection, 
  addDoc, 
  doc,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,

   } from 'firebase/firestore';
import { auth } from './firebase';

// eslint-disable-next-line arrow-body-style
export const nuevoUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = (userEmail, userPassword) => {
  return signInWithEmailAndPassword(auth, userEmail, userPassword);

};
/*
 // saber el status del usuario
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});*/




export const db = getFirestore();
export const saveTask = (nickName, email) => {
  addDoc(collection(db, 'task'), { nickName, email });
};

// Para guardar Posts
export const publicaciones = (subject) => {
  addDoc(collection(db, 'publicaciones'), { subject });
};

// para obtener data de las colecciones

export const getNotes = ()=>getDocs(collection(db, 'publicaciones'));

// para actualizar en tiempo real
export const onGetNotes = (callback)=>onSnapshot(collection(db,'publicaciones',),callback);

// para borrar las publicaciones
export const DeleteNotes = id => deleteDoc(doc(db,'publicaciones',id));

//para editar publicaciones
export const editNote = id => getDoc(doc(db,'publicaciones',id));

//actualizar publicaciones
export const updateNotes= (id, newFile)=>updateDoc(doc(db, 'publicaciones', id), newFile);

export const getNote = (id) => getDoc(doc(db, "publicaciones", id));
