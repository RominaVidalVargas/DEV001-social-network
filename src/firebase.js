// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfplKqiik6VzgOnF-PcjmDxrgkJeGvDWM',
  authDomain: 'mascotaland-dev001.firebaseapp.com',
  projectId: 'mascotaland-dev001',
  storageBucket: 'mascotaland-dev001.appspot.com',
  messagingSenderId: '847904093549',
  appId: '1:847904093549:web:7b0308d2d7074a1ac39664',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registrar = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
  // .then(function (userCredential) {
  // console.log(userCredential)
};

/* .catch(function (error) {
  console.log("hay un error aquí")
})
}; */
