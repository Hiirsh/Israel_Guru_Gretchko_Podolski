import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {eventPage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
import tour1 from '..//..//images/tour1.jpg';

import style from '..//..//componentStyles/TitleStyle.css';
import {useJsApiLoader} from '@react-google-maps/api';
import Map, {MODES} from '../../GoogleMap/Map';
import {getBrowserLocation} from '../../utils/geo';
const libraries = ['places'];
const defaultCenter = {
    lat: -36.804381,
    lng: -34.655314,
};
const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export default function Event(props) {
    const navigate = useNavigate();
    const ev = props.ev;
    const isExtended = props.extended;
    const [center, setCenter] = useState(defaultCenter);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY,
        libraries,
    });
    useEffect(() => {
        getBrowserLocation()
            .then(currentLocation => setCenter(currentLocation))
            .catch(defaultLocation => setCenter(defaultLocation));
    }, []);
    return (
        <>
            <div className={`${isExtended ? 'usual' : 'img_title_location'}`}>
                <div>
                    {isExtended ? (
                        <img className="eventImage" src={`${tour1}`} />
                    ) : (
                        <img
                            className="imageActive"
                            onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                            src={`${tour1}`}
                        />
                        // src={`${ev.image}`}/>
                    )}
                </div>
                {/* {isExtended && ev.marker && isLoaded && (
                    <Map center={center} mode={MODES.MOVE} marker={ev.marker} />
                )} */}
                <div>
                    {isExtended ? (
                        <h1 className="eventTitle ">{`${ev.title}`}</h1>
                    ) : (
                        <h1
                            className="eventTitle titleActive"
                            onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                        >{`${ev.title}`}</h1>
                    )}
                </div>
            </div>

            <>
                <EventMainInfo ev={ev} />
                <div className="text-left m-2">
                    <p>{`${ev.preview}`}</p>
                </div>
                <div className="text-left m-2">
                    <p>{`${isExtended ? ev.description : ''}`}</p>
                </div>
                {isExtended && ev.marker && isLoaded && (
                    <Map center={center} mode={MODES.MOVE} marker={ev.marker} />
                )}
            </>
        </>
    );
}
