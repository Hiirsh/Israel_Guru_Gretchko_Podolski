import Calendar from './Main/Calendar.jsx';
import styles from '..//componentStyles/Search.css';

export default function Search() {
    return (
        <div className="searchBlock">
            <div className="searchInput">
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="searchCalendar">
                {' '}
                <Calendar />{' '}
            </div>
            <div>
                {' '}
                <button className="btnSearch">Поиск</button>{' '}
            </div>
        </div>
    );
}
