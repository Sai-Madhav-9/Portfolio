import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    // apiKey: "AIzaSyB2gPxv2vmcZ7o3uF_jcGFOtt6PwL82T28",
    // authDomain: "portfolio-website-487c3.firebaseapp.com",
    // projectId: "portfolio-website-487c3",
    // storageBucket: "portfolio-website-487c3.appspot.com",
    // messagingSenderId: "617614438573",
    // appId: "1:617614438573:web:8e104d3058f457566c1624",
    // measurementId: "G-8P11Y452GB"


    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTD
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);