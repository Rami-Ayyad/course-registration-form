import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB3KNspimVgirJM1Y6kQHxctXjJ6VzwTlU",
    authDomain: "courses-form-3e0e2.firebaseapp.com",
    projectId: "courses-form-3e0e2",
    storageBucket: "courses-form-3e0e2.appspot.com",
    messagingSenderId: "404807497812",
    appId: "1:404807497812:web:1b40fd40908161cb9015c1"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)