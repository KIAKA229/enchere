// Import the functions you need from the SDKs you need
const firebase = require('firebase');
const db = firebase.firestore();
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
firebase.initializeApp(firebaseConfig);


// Exemple de création d'un document
db.collection('users').doc('user1').set({
  name: 'John Doe',
  email: 'johndoe@example.com',
});


