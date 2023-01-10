import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
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
export const db = getFirestore();
export const saveTask = (nickName, email) => {
  addDoc(collection(db, 'task'), { nickName, email });
};

// Para guardar Posts
export const publicaciones = (subject) => {
  addDoc(collection(db, 'publicaciones'), { subject });
};

// para obtener data de las colecciones
export const getNotes = () => getDocs(collection(db, 'publicaciones'));

// para actualizar en tiempo real
export const onGetNotes = (callback) => onSnapshot(collection(db, 'publicaciones'), callback);

// para borrar las publicaciones
export const DeleteNotes = id => deleteDoc(doc(db, 'publicaciones', id));

// para editar publicaciones
export const editNote = id => getDoc(doc(db, 'publicaciones', id));

// actualizar publicaciones
export const updateNotes = (id, newFile) => updateDoc(doc(db, 'publicaciones', id), newFile);

export const getNote = (id) => getDoc(doc(db, 'publicaciones', id));

export const editLike = (id) => getDoc(doc(db, 'publicaciones', id));