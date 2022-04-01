import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderMUI from './components/HeaderMUI';
import Main from './components/Main';

function App() {
    return (
        <div className="body">
            <HeaderMUI />
            {/* <Header /> */}
            <Main />
            <Footer />
        </div>
    );
}
export default App;
