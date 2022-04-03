import 'firebase/compat/auth';
import {fb} from '../config/firebaseConfig';

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
        console.log(responce.user);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export function logout() {
    fb.auth().signOut();
}
