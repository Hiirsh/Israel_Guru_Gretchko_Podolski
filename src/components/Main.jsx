import React from 'react';
import Events from './Main/Events';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import EventExtended from './Main/EventExtended';

export default function Main() {
    const url = new URL(window.location.href);
    console.log(url);
    const pageId = url.searchParams.get('id');
    console.log(pageId);

    return (
        <Routes>
            <Route path={`/`} element={<Events />}>
                <Route
                    path={`?id=${pageId}`}
                    // path={`${pageId}`}
                    element={<EventExtended id={pageId} />}
                />
            </Route>
        </Routes>
    );
}
