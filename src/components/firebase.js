import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig  = {
  apiKey: "AIzaSyDKQK-bsIKlJow8kQ0Cycg89tuhAQaLuTU",
  authDomain: "recommgamer.firebaseapp.com",
  projectId: "recommgamer",
  storageBucket: "recommgamer.appspot.com",
  messagingSenderId: "1043320632557",
  appId: "1:1043320632557:web:9332b8521301d589fd48e4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;