import {
  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider
} from 'firebase/auth';

import {
  addDoc, collection, onSnapshot,
  getDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';

import{
  nuevoUsuario, signIn, DeleteNotes, publicaciones
} from'../src/controller/controladoresfb.js'

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('signIn', () => {
  it('Debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
})