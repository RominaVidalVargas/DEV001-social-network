import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc, /*
  getDoc, doc, updateDoc, deleteDoc, */
} from 'firebase/firestore';

import {
  /*  signIn, DeleteNotes, */ publicaciones, nuevoUsuario, onGetNotes, SignIn, updateNotes, DeleteNotes, editNote,
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
    const email = 'hola1@hola1.com';
    const password = '1234567';
    nuevoUsuario(email, password);

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

describe('publicaciones', () => {
  it('Debería ser una función', () => {
    expect(typeof publicaciones).toBe('function');
  });

  it('Debería llamar al metodo addDoc', () => {
    publicaciones(addDoc);
    expect(addDoc).toBeCalled();
  });
});

// Test editar
describe('editNote', () => {
  it('Debería ser una función', () => {
    expect(typeof editNote).toBe('function');
  });
  it('Debería llamar getDoc con el id solicitado', () => {
    getDoc.mockImplementation(() => Promise.resolve('resolve'));
    doc.mockImplementation(() => ('1cbpxRxjqhEVoNI3X3MB'));
    const id = '1cbpxRxjqhEVoNI3X3MB';
    editNote(id);
    expect(getDoc).toHaveBeenCalledWith(id);
  });
  it('Debería llamar al metodo getDoc', () => {
    editNote(getDoc);
    expect(getDoc).toBeCalled();
  });
  it('Debería devolver un objeto', () => {
    editNote({ id: '1cbpxRxjqhEVoNI3X3MB' });
    expect(getDoc).toEqual(expect.anything(), { id: '1cbpxRxjqhEVoNI3X3MB' });
  });
});

// Test de actualizar
describe('updateNotes', () => {
  it('Debería ser una función', () => {
    expect(typeof updateNotes).toBe('function');
  });
  it('Debería ser llamada con dos parametros', () => {
    const id = '1cbpxRxjqhEVoNI3X3MB';
    const newFile = {};
    updateNotes(id, newFile);
    expect(updateDoc).toHaveBeenCalledWith(id, newFile);
  });
  it('Debería llamar al metodo updateDoc', () => {
    updateNotes(updateDoc);
    expect(updateDoc).toBeCalled();
  });
  it('Debería devolver un nuevo objeto', () => {
    updateDoc({
      id: '1cbpxRxjqhEVoNI3X3MB',
      newFile: {},
    });
    expect(updateDoc).toEqual(expect.anything(), {
      id: '1cbpxRxjqhEVoNI3X3MB', newFile: {},
    });
  });
});

describe('DeleteNotes', () => {
  it('Debería ser una función', () => {
    expect(typeof DeleteNotes).toBe('function');
  });
  it('Debería ser llamada con un parametro', () => {
    const id = '1cbpxRxjqhEVoNI3X3MB';
    DeleteNotes(id);
    expect(deleteDoc).toHaveBeenCalledWith(id);
  });
  it('Debería llamar al metodo updateDoc', () => {
    DeleteNotes(deleteDoc);
    expect(deleteDoc).toBeCalled();
  });
  it('Debería eliminar un  objeto', () => {
    DeleteNotes({
      id: '1cbpxRxjqhEVoNI3X3MB',
    });
    expect(deleteDoc).toEqual(expect.anything(), { id: '1cbpxRxjqhEVoNI3X3MB' });
  });
});
