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
    const ref = fb.firestore().collection('users').doc(guideId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            events: firebase.firestore.FieldValue.arrayUnion(eventId),
        });
    else await ref.set({events: eventId});
}
export async function removeEventFromGuide(guideId, eventId) {
    const ref = fb.firestore().collection('users').doc(guideId);
    await ref.update({
        events: firebase.firestore.FieldValue.arrayRemove(eventId),
    });
}
export async function getEventById(eventId) {
    const doc = await fb.firestore().collection('events').doc(eventId).get();
    if (doc.exists) return doc.data();
    else return '';
}
export async function getEvents() {
    const doc = await fb.firestore().collection('events').get();
    return doc.docs.map(events => events.data());
}

export async function deleteEvent(eventId) {
    fb.firestore().collection('events').doc(eventId).delete();
}

export async function deleteFromFav(eventId) {
    fb.firestore().collection('fav').doc(eventId).delete();
}
