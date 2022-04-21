import React from 'react';
import EventsList from './Main/EventsList';
import {Routes, Route} from 'react-router-dom';
import EventPage from './Main/EventPage';
import {
    accountPage,
    createEventPage,
    editEventPage,
    entryPage,
    errorPage,
    eventPage,
    homePage,
    myEventsPage,
    paymentPage,
    profilePage,
    regConfirmPage,
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
import AccountPage from './Main/Profile/AccountPage';
import RegConfirm from './Main/Profile/RegConfirm';
import {useSelector} from 'react-redux';
import PleaseWaitPage from './Main/PleaseWaitPage';
import EditEventPage from './Main/Profile/Account/EditEventPage';
import CreateEventPage from './Main/Profile/Account/CreateEventPage';
import MyEventsPage from './Main/Profile/Account/MyEventsPage';
export default function Main() {
    const isAutorised = useSelector(state => state.isSignedIn);
    return (
        <Routes>
            <Route path={`${homePage}`} element={<EventsList />} />
            <Route path={`/${eventPage}/:eventId`} element={<EventPage />} />
            <Route path={`/${entryPage}/:eventId`} element={<EntryPage />} />
            <Route
                path={`/${paymentPage}/:eventId`}
                element={<PaymentPage />}
            />
            <Route path={`/${ticketPage}/:eventId`} element={<TicketPage />} />
            {!isAutorised && (
                <Route path={`/${signInPage}/`} element={<SignInPage />} />
            )}
            {!isAutorised && (
                <Route path={`/${signUpPage}/`} element={<SignUpPage />} />
            )}
            {isAutorised && (
                <Route
                    path={`/${profilePage}/:userId`}
                    element={<ProfilePage />}
                />
            )}
            {isAutorised && (
                <Route
                    path={`/${accountPage}/:userId`}
                    element={<AccountPage />}
                />
            )}
            {isAutorised && (
                <Route
                    path={`/${editEventPage}/:userId/:eventId`}
                    element={<EditEventPage />}
                />
            )}
            {isAutorised && (
                <Route
                    path={`/${createEventPage}/:userId/`}
                    element={<CreateEventPage />}
                />
            )}
            {isAutorised && (
                <Route
                    path={`/${myEventsPage}/:userId/`}
                    element={<MyEventsPage />}
                />
            )}
            <Route
                path={`/${regConfirmPage}/:userId`}
                element={<RegConfirm />}
            />

            <Route path={`/${errorPage}`} element={<ErrorPage />} />
            <Route path={`*`} element={<PleaseWaitPage />} />
        </Routes>
    );
}
