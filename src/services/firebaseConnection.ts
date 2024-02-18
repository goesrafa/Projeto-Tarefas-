import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCO0z975j7-t_0Dwq-vOLJvCSY-WGq-J_w",
    authDomain: "db-tarefas.firebaseapp.com",
    projectId: "db-tarefas",
    storageBucket: "db-tarefas.appspot.com",
    messagingSenderId: "1082520419293",
    appId: "1:1082520419293:web:1f5844590b90ec3a3a5434"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };