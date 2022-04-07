import {getAuth} from 'firebase/auth';
import React from 'react';

export default function TestBar() {
    const auth = getAuth();
    return (
        <div>
            <button onClick={() => console.log(auth.currentUser)}>
                GetCurrentUser
            </button>
        </div>
    );
}
