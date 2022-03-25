import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {eventPage} from '../utils/constants';

export default function Main() {
    const url = new URL(window.location.href);
    // console.log(url);
    const pageId = url.searchParams.get('id');
    // console.log(pageId);

    return (
        <Routes>
            <Route path={`/`} element={<EventsList />} />
            <Route
                path={`/${eventPage}/:pageId`}
                // path={`${pageId}`}
                element={<EventPage id={pageId} />}
            />
        </Routes>
    );
}
