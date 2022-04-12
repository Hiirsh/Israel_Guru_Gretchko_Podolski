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

export async function addEventToGuide(guideId, eventId) {
    const ref = /* await */ fb.firestore().collection('users').doc(guideId);
    // ref.set({tasks: [{title, status: false}]}); //ссылка на нужный документ
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            events: firebase.firestore.FieldValue.arrayUnion(eventId),
        });
    else await ref.set({events: eventId});
}

export async function getEvents(eventId) {
    const doc = await fb.firestore().collection('events').doc(eventId).get();
    if (doc.exists) return doc.data();
    else return '';
}
