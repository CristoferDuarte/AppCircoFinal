import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCczlE6dqBoJnhhnhWlaixU5ZuT_vml_Tk",
  authDomain: "circusapp-3a18f.firebaseapp.com",
  databaseURL: "https://circusapp-3a18f-default-rtdb.firebaseio.com",
  projectId: "circusapp-3a18f",
  storageBucket: "circusapp-3a18f.firebasestorage.app",
  messagingSenderId: "606221020146",
  appId: "1:606221020146:web:cb9648e14d1058dc2a596b",
  measurementId: "G-VF7Z6T8D1F"
};
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore
const db = getFirestore(app);

export { db };
