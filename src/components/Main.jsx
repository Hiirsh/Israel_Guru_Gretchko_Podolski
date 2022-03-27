import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {eventPage, homePage} from '../utils/constants';

export default function Main() {
    return (
        <Routes>
            <Route path={`${homePage}`} element={<EventsList />} />
            <Route path={`/${eventPage}/:pageId`} element={<EventPage />} />
        </Routes>
    );
}
