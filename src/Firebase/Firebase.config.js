// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeJdZ_HYszU-q-o53lGJoA22kqejwT0q4",
  authDomain: "programetor.firebaseapp.com",
  projectId: "programetor",
  storageBucket: "programetor.appspot.com",
  messagingSenderId: "391399064182",
  appId: "1:391399064182:web:6f4ea44a0995bd995bd557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;