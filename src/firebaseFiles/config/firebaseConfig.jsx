import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyCCtE7IoR4mtZYW0XBhQ-c8e9Ul5-0v0ao',
    authDomain: 'israel-guru-gretchko-podolski.firebaseapp.com',
    projectId: 'israel-guru-gretchko-podolski',
    storageBucket: 'israel-guru-gretchko-podolski.appspot.com',
    messagingSenderId: '379752363181',
    appId: '1:379752363181:web:daa528f2a17bed4d4cc224',
    measurementId: 'G-WV0H7ZT61R',
};
export const fb = firebase.initializeApp(firebaseConfig);
export const storageFB = getFirestore(fb);
