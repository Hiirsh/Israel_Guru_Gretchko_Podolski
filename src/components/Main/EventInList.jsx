import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Context} from '../../utils/Context';
import style from '..//..//componentStyles/Event.css';

export default function EventInList(props) {
    const navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault();
        navigate(`?id=${props.id}`);
    };
    const pageToRender = useContext(Context);

    return (
        <div>
            <Link
                to={`?id=${props.id}`}
                // to={`${props.id}`}
                onClick={/* () => navigate(`?id=${props.id}`) */ handleClick}
            >
                <h1
                    className="text-center m-2 eventTitle"
                    href="*"
                >{`${props.title}`}</h1>
            </Link>
            <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2">
                <h3 className="d-flex align-items-center">{`${props.date}`}</h3>
                <div>
                    <h4>Осталось мест: {`${props.place}`}</h4>{' '}
                    <h4>Цена:{`${props.price}`} NIS</h4>
                </div>
                <div>
                    <h4>{`${props.timeStart}-${props.timeEnd}`}</h4>
                    <h4>Осталось мест: {`${props.freeSpace}`}</h4>
                </div>
            </div>
            <div className="text-left m-2">{`${props.shortDesctiption}`}</div>
            <div className="text-left m-2">{`${
                props.fullDescription || ''
            }`}</div>
        </div>
    );
}
