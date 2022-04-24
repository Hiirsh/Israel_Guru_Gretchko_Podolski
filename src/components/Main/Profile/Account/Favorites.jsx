import React, {useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MyEvents from './MyEvents';
import s from '../../../../componentStyles/MyEventsPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import {getMonthName} from '../../../../utils/dateUtils';
import {
    getEvents,
} from '../../../../firebaseFiles/services/eventsService';

function Favorites() {
    const {userId} = useParams();
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const fav = [];

    const getFavoriteEvents = id =>
        getEvents()
            .then(data => data.filter(ev => ev.guideId === id))
            .then(events =>
                events.forEach((ev, index) => {
                    const date = new Date(ev.timeStart.seconds * 1000);
                    fav.push({
                        id: index + 1,
                        date: `${date.getDate()} ${getMonthName(
                            date.getMonth()
                        )} ${date.getFullYear()}`,
                        title: ev.title,
                        price: ev.price,
                        places: ev.totalSpace,
                        eventId: ev.id,
                    });
                })
            )
            .then(() => setRows([...fav]));

    useEffect(() => {
        getFavoriteEvents();
    }, []);

    return (
        <>
            <TableContainer component={Paper} className={s.table}>
                <Table sx={{width: '100%'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Название</TableCell>
                            <TableCell>Цена</TableCell>
                            <TableCell>Место</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row.eventId}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.places}
                                </TableCell>
                                <TableCell sx={{width: 20}} align="center">
                                    <div
                                        className="icon"
                                        // onClick={() =>
                                        //     handleClickEdit(row.eventId)
                                        // }
                                    >
                                        <FavoriteIcon />
                                    </div>
                                </TableCell>
                            </TableRow> ))}
                        </TableBody>
                        </Table>
                        </TableContainer>
                        </>);
}

export default Favorites