import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAygMdkwlZMPUzo8_xhxFrs-6mGmojrFfo",
  authDomain: "domoticajs-14f49.firebaseapp.com",
  projectId: "domoticajs-14f49",
  storageBucket: "domoticajs-14f49.appspot.com",
  messagingSenderId: "545225242492",
  appId: "1:545225242492:web:00f4ab5efca49dc6fb56f9"
});

const db = getFirestore(firebaseApp);