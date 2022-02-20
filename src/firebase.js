// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXC4b4fsdfa0_Yyr9sYm1QnrtoPkOzdCY",
  authDomain: "ametmovie.firebaseapp.com",
  projectId: "ametmovie",
  storageBucket: "ametmovie.appspot.com",
  messagingSenderId: "120019804905",
  appId: "1:120019804905:web:7dfefd02669aacedd14678",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const storage = getStorage(app);

export { db, storage };
