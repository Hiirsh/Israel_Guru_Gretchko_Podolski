import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Context} from './utils/Context';
import {useState} from 'react';

function App() {
    return (
        <div className="body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
export default App;
