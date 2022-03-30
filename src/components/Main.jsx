import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {
    entryPage,
    eventPage,
    homePage,
    paymentPage,
    signInPage,
    signUpPage,
    ticketPage,
} from '../utils/constants';
import EntryPage from './Main/EntryPage';
import PaymentPage from './Main/PaymentPage';
import TicketPage from './Main/TicketPage';
import SignInPage from './Main/SignInPage';
import SignUpPage from './Main/SignUpPage';

export default function Main() {
    return (
        <Routes>
            <Route path={`${homePage}`} element={<EventsList />} />
            <Route path={`/${eventPage}/:pageId`} element={<EventPage />} />
            <Route path={`/${entryPage}/:pageId`} element={<EntryPage />} />
            <Route path={`/${paymentPage}/:pageId`} element={<PaymentPage />} />
            <Route path={`/${ticketPage}/:pageId`} element={<TicketPage />} />
            <Route path={`/${signInPage}/`} element={<SignInPage />} />
            <Route path={`/${signUpPage}/`} element={<SignUpPage />} />
        </Routes>
    );
}
