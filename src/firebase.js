import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDYxc1h3P-h-z8Ut5p3BNNuocEMq9TBwRo",
  authDomain: "netflixclone-40cdc.firebaseapp.com",
  projectId: "netflixclone-40cdc",
  storageBucket: "netflixclone-40cdc.appspot.com",
  messagingSenderId: "565233178890",
  appId: "1:565233178890:web:4ec35a4b3a39fbde6ec2f3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = () => {
    signOut(auth)
}


export {auth, db, login, signup, logout}