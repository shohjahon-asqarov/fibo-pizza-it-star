import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVbR7o05eP1y_T8wfsTYAu0ILmL5of2b0",
    authDomain: "it-start-2c40d.firebaseapp.com",
    projectId: "it-start-2c40d",
    storageBucket: "it-start-2c40d.appspot.com",
    messagingSenderId: "667042547896",
    appId: "1:667042547896:web:a4e0a57fc438b24cf8cc4d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };