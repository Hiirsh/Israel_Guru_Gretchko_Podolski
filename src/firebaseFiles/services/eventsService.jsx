import 'firebase/compat/auth';
import {fb} from '../config/firebaseConfig';
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import {doc, updateDoc} from 'firebase/firestore';

export async function updateEvent(eventData) {
    const ref = fb.firestore().collection('events').doc(eventData.id);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            events: firebase.firestore.FieldValue.arrayUnion(eventData),
        });
    else await ref.set(eventData);
}
export async function addParticipantsToEvent(eventId, participants) {
    const ref = fb.firestore().collection('events').doc(eventId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            participants:
                firebase.firestore.FieldValue.arrayUnion(participants),
        });
    else await ref.set(participants);
}
export async function updateNumParticipants(eventId, freeSpace) {
    const event = fb.firestore().collection('events').doc(eventId);
    await updateDoc(event, {freeSpace: freeSpace});
}
export async function addEventToTourist(userId, eventId) {
    const ref = fb.firestore().collection('users').doc(userId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            eventsToGo: firebase.firestore.FieldValue.arrayUnion(eventId),
        });
    else await ref.set({eventsToGo: eventId});
}

export async function addEventToFavorites(userId, eventId) {
    const ref = fb.firestore().collection('users').doc(userId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            favoriteEvents: firebase.firestore.FieldValue.arrayUnion(eventId),
        });
    else await ref.set({favoriteEvents: eventId});
}
export async function removeEventFromFavorites(userId, eventId) {
    const ref = fb.firestore().collection('users').doc(userId);
    const doc = await ref.get();
    if (doc.exists)
        await ref.update({
            favoriteEvents: firebase.firestore.FieldValue.arrayRemove(eventId),
        });
    // else await ref.set({favoriteEvents: eventId});
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
    fb.firestore().collection('favoriteEvents').doc(eventId).delete();
}
