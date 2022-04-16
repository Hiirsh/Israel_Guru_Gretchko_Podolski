import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {entryPage} from '../../utils/constants';
import {getMonthName, getWeekName} from '../../utils/dateUtils';
import styles from '..//..//componentStyles/Event.css';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';

export default function EventMainInfo(props) {
    const ev = props.ev;
    const navigate = useNavigate();
    const dateStart = new Date(ev.timeStart.seconds * 1000);
    const hoursStart = dateStart.getHours();
    const minutesStart =
        dateStart.getMinutes() < 10
            ? '0' + dateStart.getMinutes()
            : dateStart.getMinutes();
    const dateEnd = new Date(ev.timeEnd.seconds * 1000);
    const hoursEnd = dateEnd.getHours();
    const minutesEnd =
        dateEnd.getMinutes() < 10
            ? '0' + dateEnd.getMinutes()
            : dateEnd.getMinutes();

    return (
        <div className="eventMainInfo">
            {/* <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2"></div> */}
            <h3 className="eventData">{`${dateStart.getDate()} ${getMonthName(
                dateStart.getMonth()
            )}, ${getWeekName(dateStart.getDay())}`}</h3>
            <div className="costTicketsPlace">
                <h4>Место: {`${ev.place}`}</h4>{' '}
                <h4>Осталось мест: {`${ev.freeSpace || ev.totalSpace}`}</h4>
                <h4>Цена:{`${ev.price}`} NIS</h4>
                <h4>
                    {props.noButton &&
                        `${hoursStart}:${minutesStart}-${hoursEnd}:${minutesEnd}
                    `}
                </h4>
            </div>
            {!props.noButton && (
                <div className="timeAndButton">
                    <h4>{`${hoursStart}:${minutesStart}-${hoursEnd}:${minutesEnd}`}</h4>
                    <Button
                        variant="contained"
                        className="go"
                        onClick={() => navigate(`../${entryPage}/${ev.id}`)}
                    >
                        Я пойду
                    </Button>
                </div>
            )}
        </div>
    );
}
