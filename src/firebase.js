import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyACAqmCbkCqYiT0_kbS4qno_wKtcPNZf2Q",
  authDomain: "smartagroconnect-6749a.firebaseapp.com",
  projectId: "smartagroconnect-6749a",
  storageBucket: "smartagroconnect-6749a.firebasestorage.app",
  messagingSenderId: "105932679333",
  appId: "1:105932679333:web:7fb63138fed2e18d5a054c",
  measurementId: "G-2QMHH82HEG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
