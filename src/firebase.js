import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJvX3E6TaTgkq4krOESGm7V5WgtOj9JBo",
  authDomain: "receptari-19859.firebaseapp.com",
  projectId: "receptari-19859",
  storageBucket: "receptari-19859.firebasestorage.app",
  messagingSenderId: "1072138570766",
  appId: "1:1072138570766:web:216726a657ebc28020805f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);