import 'firebase/compat/auth';
import {fb} from '../config/firebaseConfig';
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import {doc, deleteDoc} from 'firebase/firestore';

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

// export async function getEventsRowsArrarById(eventsId) {
//     console.log(eventsId);
//     const arr = eventsId.map((item, index) =>
//         getEventById(item).then(data => ({
//             key: index,
//             id: index + 1,
//             date: data.timeStart,
//             title: data.title,
//             price: data.price,
//             places: data.totalSpace,
//         }))
//     );
//     console.log(arr);
//     return arr;
// }
