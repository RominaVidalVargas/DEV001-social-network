import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  addDoc, collection, /* onSnapshot,
  getDoc, doc, updateDoc, deleteDoc, */
} from 'firebase/firestore';

import {
  /*  signIn, publicaciones, nuevoUsuario, */ DeleteNotes,
} from '../src/controller/controladoresfb.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('getAuth', () => {
  it('Debería ser una función', () => {
    expect(typeof getAuth).toBe('function');
  });
});

describe('createUserWithEmailAndPassword', () => {
  it('Debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toEqual('function');
  });
});

describe('signInWithEmailAndPassword', () => {
  it('Debería ser una función', () => {
    expect(typeof signInWithEmailAndPassword).toEqual('function');
  });
});

describe('collection', () => {
  it('Debería ser una función', () => {
    expect(typeof collection).toEqual('function');
  });
});

describe('addDoc', () => {
  it('Debería ser una función', () => {
    expect(typeof addDoc).toEqual('function');
  });
});

describe('collection', () => {
  it('Debería ser una función', () => {
    expect(typeof collection).toEqual('function');
  });
});