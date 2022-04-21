import {Marker as GoogleMapMarker} from '@react-google-maps/api';
import React from 'react';
export default function Marker({position}) {
    return (
        <div>
            <GoogleMapMarker
                position={position}
                icon={{url: '/placeholder1.svg'}}
                // label={{text: 'You are here', fontSize: '25px', color: 'red'}}
            />
        </div>
    );
}
