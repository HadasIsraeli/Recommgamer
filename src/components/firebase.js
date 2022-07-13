import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIXXfFq9qe2SEoQ2G1aHev7ny0qLLlpxk",
  authDomain: "recommgamer-611d0.firebaseapp.com",
  projectId: "recommgamer-611d0",
  storageBucket: "recommgamer-611d0.appspot.com",
  messagingSenderId: "871935510675",
  appId: "1:871935510675:web:05d6b04c90f3f9cd082566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;