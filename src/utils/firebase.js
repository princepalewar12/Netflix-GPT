// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH1W_NB-TmbRAeMTQb2STJrVzSGlH0FWs",
  authDomain: "netflix-gpt-87774.firebaseapp.com",
  projectId: "netflix-gpt-87774",
  storageBucket: "netflix-gpt-87774.appspot.com",
  messagingSenderId: "614783254286",
  appId: "1:614783254286:web:900e36e84c54134cdd615f",
  measurementId: "G-L7P162BK7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();