/* eslint-disable arrow-body-style */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from './firebase';

// eslint-disable-next-line arrow-body-style
export const nuevoUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = (userEmail, userPassword) => {
  return signInWithEmailAndPassword(auth, userEmail, userPassword);
};

const db = getFirestore();
export const saveTask = (nickName, email) => {
  addDoc(collection(db, 'task'), { nickName, email });
};

// Para guardar Posts
export const publicaciones = (modal) => {
  addDoc(collection(db, 'publicaciones'), { modal });
};

// Salir de la app
export const salir = (getAuth, user) => {
  return signOut(auth, user);
};
