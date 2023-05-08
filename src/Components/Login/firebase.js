import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKpDbFBgHFBk8jzPT_4rsRqytzthg6Jqc",
    authDomain: "online-store-70a78.firebaseapp.com",
    projectId: "online-store-70a78",
    storageBucket: "online-store-70a78.appspot.com",
    messagingSenderId: "520140525567",
    appId: "1:520140525567:web:98a6e828d5f874c113e1ca",
    measurementId: "G-PGPVVH3RMR"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
  