import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderMUI from './components/HeaderMUI';
import Main from './components/Main';
import TestBar from './components/TestBar';
import {homePage} from './utils/constants';
import {signingAction} from './reduxFiles/actions/isSignedAction';
import {setUserIdAction} from './reduxFiles/actions/setUserIdAction';

function App() {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log(auth);
    onAuthStateChanged(auth, user => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(signingAction(true));
            dispatch(setUserIdAction(user.uid));
        } else {
            dispatch(signingAction(false));
            dispatch(setUserIdAction(''));
        }
    });

    return (
        <div className="body">
            <TestBar />
            <HeaderMUI />
            {/* <Header /> */}
            <Main />
            <Footer />
        </div>
    );
}
export default App;
