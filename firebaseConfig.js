import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';


const config = {
    apiKey: "AIzaSyBmAObxO0YvUpV6IoIVDCo3FRfEiGTFU-Y",
    authDomain: "lms-react-version.firebaseapp.com",
    projectId: "lms-react-version",
    storageBucket: "lms-react-version.appspot.com",
    messagingSenderId: "311182650753",
    appId: "1:311182650753:web:123640ecd92bb47f140c80",
    measurementId: "G-VBP89RXXKQ"
}

const app = initializeApp(config);

export const projectFirestore = getFirestore(app);
export const projectAuth = getAuth(app);

