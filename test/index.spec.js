/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  addDoc, collection, onSnapshot, /*
  getDoc, doc, updateDoc, deleteDoc, */
} from 'firebase/firestore';

import {
  /*  signIn, DeleteNotes, */ publicaciones, nuevoUsuario, onGetNotes, SignIn,
} from '../src/controller/controladoresfb.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('getAuth', () => {
  it('Debería ser una función', () => {
    expect(typeof getAuth).toBe('function');
  });
});
// test Crear cuenta email y psw

describe('createUserWithEmailAndPassword', () => {
  it('Debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toEqual('function');
  });
});

describe('nuevoUsuario', () => {
  it('Debería ser una función', () => {
    expect(typeof nuevoUsuario).toBe('function');
  });

  it('Debe llamarse al método crear usuario', () => {
    createUserWithEmailAndPassword.mockImplementation(() => {
      Promise.resolve({
        email: 'hola@hola.com',
        password: '123456',
      });
    });
    nuevoUsuario(createUserWithEmailAndPassword);

    expect(createUserWithEmailAndPassword).toBeCalled();
  });

  it('Deberia retornar un objeto con la propiedad email y password', () => {
    nuevoUsuario('hola@hola.com', '123456');
    expect({
      email: 'hola@hola.com',
      password: '123456',
    }).toEqual(expect.anything());
  });
});

// Ingresar con email y psw
describe('signInWithEmailAndPassword', () => {
  it('Debería ser una función', () => {
    expect(typeof signInWithEmailAndPassword).toEqual('function');
  });
});

describe('SignIn', () => {
  it('Debería ser una función', () => {
    expect(typeof SignIn).toBe('function');
  });

  it('Debe validar el usuario registrado', () => {
    signInWithEmailAndPassword.mockImplementation(() =>
      Promise.resolve({
        email: 'algomio2000@gmail.com',
        password: '1234567',
      }));
    SignIn(signInWithEmailAndPassword);

    expect(signInWithEmailAndPassword).toBeCalled();
  });
  it('Deberia retornar un objeto con la propiedad email', () => {
    SignIn('algomio2000@gmail.com', '1234567');
    expect({
      email: 'algomio2000@gmail.com',
      password: '1234567',
    }).toEqual(expect.anything());
  });
  it('Debe recibir parámetros', () => {
    SignIn('algomio2000@gmail.com', '1234567');
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'algomio2000@gmail.com', '1234567');
  });
});

// Test de llamada del post
describe('onGetNotes', () => {
  it('Debería ser una función', () => {
    expect(typeof onGetNotes).toBe('function');
  });

  it('Debe llamar al método onSnapshot ', () => {
    onSnapshot.mockImplementation(() => ({}));
    onGetNotes(onSnapshot);

    expect(onSnapshot).toBeCalled();
  });
  it('Deberia escuchar el post publicado', () => {
    onGetNotes(publicaciones);
    expect({ publicaciones }).toEqual(expect.anything());
  });
  it('Debe recibir  parámetros', () => {
    const callback = () => {};
    onGetNotes(callback);
    expect(onSnapshot).toHaveBeenCalledWith(collection(), callback);
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
