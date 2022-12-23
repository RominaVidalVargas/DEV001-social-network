import MockFirestore from '../_mocks_/firebase-mock.js'
import { nuevoUsuario } from '../src/controller/controladoresfb.js';

global.firebase = MockFirestore();

describe('nuevoUsuario', () => {
  // eslint-disable-next-line arrow-body-style
  it('Deberia crear un nuevo usurio', () => {
    return nuevoUsuario('email').then((userCredential) => {
      expect(userCredential).toBe('email');
    });
  });
});
