import 'firebase/compat/auth';
import {fb} from '../config/firebaseConfig';
import {getAuth, signOut} from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import firebase from 'firebase/compat/app';

let auth = getAuth();

export async function login(email, password) {
    try {
        const responce = await fb
            .auth()
            .signInWithEmailAndPassword(email, password);
        return responce.user.uid;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function registration(email, password) {
    try {
        const responce = await fb
            .auth()
            .createUserWithEmailAndPassword(email, password);
        return responce.user.uid;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

export async function updateUserProfileInDB(userData) {
    const ref = fb.firestore().collection('users').doc(userData.userId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update(
            /* users: */ firebase.firestore.FieldValue.arrayUnion(userData)
        );
    else await ref.set(userData);
}

export async function getUserData(userId) {
    const doc = await fb.firestore().collection('users').doc(userId).get();
    if (doc.exists) return doc.data();
}

export function logout() {
    signOut(auth).then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
        localStorage.removeItem('eventToPay');
    });
}
