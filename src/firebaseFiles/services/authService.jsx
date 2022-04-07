import 'firebase/compat/auth';
import {fb, storageFB} from '../config/firebaseConfig';
import {getAuth, signOut} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';

let auth = getAuth();

export async function login(email, password) {
    try {
        const responce = await fb
            .auth()
            .signInWithEmailAndPassword(email, password);
        // console.log(auth.currentUser);
        return (await responce.user.getIdToken()).slice(0, 20);
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
        return (await responce.user.getIdToken()).slice(0, 20);
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function createUserProfileInDB(userData) {
    await setDoc(doc(storageFB, 'users', userData.userId), userData);
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
