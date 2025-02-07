// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZP2GIkceosv40oR2bmnH4njf_rJHXQHY",
  authDomain: "carejoa-motionbit.firebaseapp.com",
  databaseURL: "https://carejoa-motionbit-default-rtdb.firebaseio.com",
  projectId: "carejoa-motionbit",
  storageBucket: "carejoa-motionbit.appspot.com",
  messagingSenderId: "752483696215",
  appId: "1:752483696215:web:c644e45306ce147f73ed12",
  measurementId: "G-VHEB9BPRJR",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Realtime Database 인스턴스 가져오기
const database = getDatabase(app);

export default database;
