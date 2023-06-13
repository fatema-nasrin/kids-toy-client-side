// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYFSsyE8AZ3BkucLwzfp8J3OVCpp9w7Jg",
  authDomain: "kids-toy-market.firebaseapp.com",
  projectId: "kids-toy-market",
  storageBucket: "kids-toy-market.appspot.com",
  messagingSenderId: "701330139622",
  appId: "1:701330139622:web:5783acaf346d64c90a4e27",
  measurementId: "G-43EY7JH0QJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);