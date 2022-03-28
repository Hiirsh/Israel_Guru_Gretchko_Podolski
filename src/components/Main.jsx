import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {
    entryPage,
    eventPage,
    homePage,
    paymentPage,
    ticketPage,
} from '../utils/constants';
import EntryPage from './Main/EntryPage';
import PaymentPage from './Main/PaymentPage';
import TicketPage from './Main/TicketPage';

export default function Main() {
    return (
        <Routes>
            <Route path={`${homePage}`} element={<EventsList />} />
            <Route path={`/${eventPage}/:pageId`} element={<EventPage />} />
            <Route path={`/${entryPage}/:pageId`} element={<EntryPage />} />
            <Route path={`/${paymentPage}/:pageId`} element={<PaymentPage />} />
            <Route path={`/${ticketPage}/:pageId`} element={<TicketPage />} />
        </Routes>
    );
}
