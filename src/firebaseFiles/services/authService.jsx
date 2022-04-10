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
        // console.log(auth.currentUser);
        console.log(responce.user.uid);
        return responce.user.uid;
        // return (await responce.user.getIdToken()).slice(0, 20);
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
        console.log(responce.user);
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
        await ref.update({
            users: firebase.firestore.FieldValue.arrayUnion(userData),
        });
    else await ref.set(userData);
}

/* 
    userId,
    email,
    firstName,
    lastName,
    phone,
    aboutUser,
    license
*/

/* 
    export async function updateUserProfile(
        email,
        firstName,
        lastName,
        phone,
        aboutUser,
        license,
        photo,
        userId
 ) {}
 */
export function logout() {
    // fb.auth().signOut();
    signOut(auth).then(() => localStorage.removeItem('user'));
}
