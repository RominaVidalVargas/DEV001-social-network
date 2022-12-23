/* eslint-disable arrow-body-style */
const firestore = () => {
  return {
    // eslint-disable-next-line arrow-body-style
    collection: (namecollection) => {
      return {
        // eslint-disable-next-line arrow-body-style
        add: (objData) => {
          return new Promise((resolve) => {
            resolve('El usuario fue registrado')
          })
        }
      }
    }
  }
}

const firebase = {
  firestore: firestore
};

export default jest.fn(() => {
  return firebase;
});
