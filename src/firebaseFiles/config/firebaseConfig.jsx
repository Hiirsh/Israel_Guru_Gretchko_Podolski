import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyCCtE7IoR4mtZYW0XBhQ-c8e9Ul5-0v0ao',
    authDomain: 'israel-guru-gretchko-podolski.firebaseapp.com',
    projectId: 'israel-guru-gretchko-podolski',
    storageBucket: 'israel-guru-gretchko-podolski.appspot.com',
    messagingSenderId: '379752363181',
    appId: '1:379752363181:web:daa528f2a17bed4d4cc224',
    measurementId: 'G-WV0H7ZT61R',
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_MESUREMENT_ID,
};
export const fb = firebase.initializeApp(firebaseConfig);
export const storageFB = getFirestore(fb);
export const storage = getStorage();
