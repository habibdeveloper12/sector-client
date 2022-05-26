// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTE1j2JFyLw4n5gCWeKoYk9k3s1wlLZ8",
  authDomain: "manufacturer-site-3b624.firebaseapp.com",
  projectId: "manufacturer-site-3b624",
  storageBucket: "manufacturer-site-3b624.appspot.com",
  messagingSenderId: "553850959600",
  appId: "1:553850959600:web:e72cd7c976b5bfbd65f435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;