import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {entryPage} from '../../utils/constants';
import styles from '..//..//componentStyles/Event.css';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';

export default function EventMainInfo(props) {
    const ev = props.ev;
    const navigate = useNavigate();
    return (
        <div className="eventMainInfo">
            {/* <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2"></div> */}
            <h3 className="eventData">{`${ev.date}`}</h3>
            <div className="costTicketsPlace">
                <h4>Место: {`${ev.place}`}</h4>{' '}
                <h4>Осталось мест: {`${ev.freeSpace}`}</h4>
                <h4>Цена:{`${ev.price}`} NIS</h4>
                <h4>{props.noButton && `${ev.timeStart}-${ev.timeEnd}`}</h4>
            </div>
            {!props.noButton && (
                <div className="timeAndButton">
                    <h4>{`${ev.timeStart}-${ev.timeEnd}`}</h4>
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
