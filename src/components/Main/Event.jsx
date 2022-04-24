import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {eventPage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
import tour1 from '..//..//images/tour1.jpg';

// import 'firebase/compat/auth';
// import {fb} from '../config/firebaseConfig';
// import 'firebase/compat/firestore';
// import 'firebase/compat/app';
// import firebase from 'firebase/compat/app';

import style from '..//..//componentStyles/TitleStyle.css';
import {useJsApiLoader} from '@react-google-maps/api';
import Map, {MODES} from '../../GoogleMap/Map';
import {getBrowserLocation} from '../../utils/geo';
import InFavorites from '../../icons/InFavorites'
import AddToFavorites from '../../icons/AddToFavorites'
import {
    removeEventFromFavorites,
    addEventToFavorites,
} from '../../firebaseFiles/services/eventsService';
// import {useState} from 'react';

const libraries = ['places'];
const {userId} = useParams;

const defaultCenter = {
    lat: -36.804381,
    lng: -34.655314,
};
const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export default function Event(props) {
    const navigate = useNavigate();
    const ev = props.ev;
    const isExtended = props.extended;
    const userData=JSON.parse(localStorage.getItem('userData'))
    
    const [center, setCenter] = useState(defaultCenter);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY,
        libraries,
    });
    const[{ favoriteEvents},setFavoriteEvents] =useState(JSON.parse(localStorage.getItem('userData'))||[])
    

    function handleClickAddToFavorites(e){
        e.preventDefault()
    try        
    {if(userData.userId) {
            addEventToFavorites(userData.userId, ev.id)
            userData.favoriteEvents.push(ev.id)
            console.log(userData)
            localStorage.setItem('userData', JSON.stringify(userData))
                       setFavoriteEvents(favoriteEvents.push(ev.id))
            console.log(favoriteEvents);}
        }catch(error) {console.log(error.message)}
    }

    function handleClickRemoveFromFavorites(e){
        e.preventDefault()
        if(userId) removeEventFromFavorites(userData.userId, ev.id)
    }

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
                <div>
                    {isExtended ? (
                        <h1 className={"eventTitle "}>
                        {`${ev.title}`}{favoriteEvents.includes(ev.id)&&<div
                        onClick={handleClickRemoveFromFavorites} //userId, eventId
                        ><InFavorites/></div>}
                        {!favoriteEvents.includes(ev.id)&&<div
                         onClick={handleClickAddToFavorites} //userId, eventId
                        ><AddToFavorites/></div>}</h1>
                    ) : (
                        <h1
                            className={"eventTitle titleActive"}
                            onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                        >{`${ev.title}`}
                        {favoriteEvents.includes(ev.id)&&<div
                            onClick={handleClickRemoveFromFavorites} //userId, eventId
                            ><InFavorites/></div>}
                        {!favoriteEvents.includes(ev.id)&&<div
                         onClick={handleClickAddToFavorites} //userId, eventId
                        ><AddToFavorites/></div>}</h1>
                    )}
                </div>
               </div>

            <>
                <EventMainInfo ev={ev} />
                <div className={"text-left m-2"}>
                    <p>{`${ev.preview}`}</p>
                </div>
                <div className={"text-left m-2"}>
                    <p>{`${isExtended ? ev.description : ''}`}</p>
                </div>
                {isExtended && ev.marker && isLoaded && (
                    <Map
                        center={ev.marker}
                        mode={MODES.MOVE} /*  marker={ev.marker}  */
                    />
                )}
            </>
        </>
    );
}
