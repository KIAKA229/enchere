// Import the functions you need from the SDKs you need
const firebase = require('firebase');
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3WFbSH-gOEp3u7KPbIVekyGibqfO7ok8",
  authDomain: "encheredirect-e41cb.firebaseapp.com",
  projectId: "encheredirect-e41cb",
  storageBucket: "encheredirect-e41cb.appspot.com",
  messagingSenderId: "381270720317",
  appId: "1:381270720317:web:166639496f472d9cb88f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const apps = express();

const db = firebase.firestore();
db.collection('users').add({
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
})
.then(docRef => {
  console.log('Le document a été ajouté avec succès avec ID : ', docRef.id);
})
.catch(error => {
  console.error('Erreur lors de l\'ajout du document : ', error);
});
