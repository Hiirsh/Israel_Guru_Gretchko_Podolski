import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import HeaderMUI from './components/HeaderMUI';
import Main from './components/Main';
import {signingAction} from './reduxFiles/actions/isSignedAction';
import {setUserIdAction} from './reduxFiles/actions/setUserIdAction';
import {getUserData} from './firebaseFiles/services/authService';
import {useEffect} from 'react';
import {getEventsAction} from './reduxFiles/actions/eventActions';

function App() {
    const auth = getAuth();
    const dispatch = useDispatch();
    useEffect(() => dispatch(getEventsAction()), []);

    onAuthStateChanged(auth, user => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));

            dispatch(signingAction(true));
            dispatch(setUserIdAction(user.uid));
            getUserData(user.uid).then(data =>
                localStorage.setItem('userData', JSON.stringify(data))
            );
        } else {
            dispatch(signingAction(false));
            dispatch(setUserIdAction(''));
        }
    });

    return (
        <div className="body">
            <HeaderMUI />
            <Main />
            <Footer />
        </div>
    );
}
export default App;
