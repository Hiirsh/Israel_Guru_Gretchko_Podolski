import {GoogleMap} from '@react-google-maps/api';
import React, {useCallback, useRef} from 'react';
import Marker from './Marker';
import CurrentLocationMarker from './CurrentLocationMarker';
import defaultTheme from './Theme';
import style from './Map.module.css';
export const MODES = {
    MOVE: 0,
    SET_MARKER: 1,
};

const containerStyle = {
<<<<<<< HEAD
    width: '1000px',
    height: '1000px'
  };
=======
    width: '100%',
    height: '100%',
};
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    // styles: defaultTheme,
};
>>>>>>> upstream/develop

export default function Map({center, mode, marker, onMarkerAdd}) {
    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined;
    }, []);
    const onClickHandler = useCallback(
        loc => {
            if (mode === MODES.SET_MARKER) {
                const lat = loc.latLng.lat();
                const lng = loc.latLng.lng();
                onMarkerAdd({lat, lng});
            }
        },
        [mode, onMarkerAdd]
    );
    return (
        <div className={`${style.container}`}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
                onClick={onClickHandler}
            >
                <>
                    <CurrentLocationMarker position={center} />
                </>
                <Marker position={marker} />
                {/* {marker.map((pos, index) => {
                    return <Marker key={index} position={pos} />;
                })} */}
            </GoogleMap>
        </div>
    );
}
