import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from './firebase';

// eslint-disable-next-line arrow-body-style
export const nuevoUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const db = getFirestore();
export const saveTask = (nickName, email) => {
  addDoc(collection(db, 'task'), { nickName, email });
};

// Para guardar Posts
export const publicaciones = (modal) => {
  addDoc(collection(db, 'publicaciones'), { modal });
};
