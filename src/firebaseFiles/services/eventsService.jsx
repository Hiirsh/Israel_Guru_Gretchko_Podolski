import 'firebase/compat/auth';
import {fb} from '../config/firebaseConfig';
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import firebase from 'firebase/compat/app';

export async function updateEvent(eventData) {
    const ref = fb.firestore().collection('events').doc(eventData.id);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            events: firebase.firestore.FieldValue.arrayUnion(eventData),
        });
    else await ref.set(eventData);
}
