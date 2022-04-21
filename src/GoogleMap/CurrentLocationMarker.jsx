import {Marker} from '@react-google-maps/api';
import React from 'react';
export default function CurrentLocationMarker({position}) {
    return (
        <div>
            <Marker
                position={position}
                icon={{url: '/placeholder2.svg'}}
                // label={{text: 'You are here', fontSize: '25px', color: 'red'}}
            />
        </div>
    );
}
