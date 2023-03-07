
const { QuerySnapshot } = require("@google-cloud/firestore");
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('users').doc('user1').set({
  name: 'John Doe',
  email: 'johndoe@example.com',
});
let custmerRef = db.collection("1");
custmerRef.get().then((querySnapshot)=>{
  querySnapshot.forEach((document)=>{
    console.log(document.data());
  })
}) 

