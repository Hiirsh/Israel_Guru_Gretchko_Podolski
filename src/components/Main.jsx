import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {
    entryPage,
    errorPage,
    eventPage,
    homePage,
    paymentPage,
    profilePage,
    signInPage,
    signUpPage,
    ticketPage,
} from '../utils/constants';
import EntryPage from './Main/EntryPage';
import PaymentPage from './Main/PaymentPage';
import TicketPage from './Main/TicketPage';
import SignInPage from '../components/Main/Profile/SignInPage';
import SignUpPage from '../components/Main/Profile/SignUpPage';
import ProfilePage from '../components/Main/Profile/ProfilePage';
import ErrorPage from './Main/ErrorPage';
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
            <Route path={`/${profilePage}/`} element={<ProfilePage />} />
            <Route path={`/${errorPage}/`} element={<ErrorPage />} />
        </Routes>
    );
}
