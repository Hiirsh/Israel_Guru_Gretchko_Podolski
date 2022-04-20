import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getEvents} from '../../../../firebaseFiles/services/eventsService';
import {getMonthName} from '../../../../utils/dateUtils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MyEventsTable() {
    const guideId = useParams().userId;
    const [rows, setRows] = useState([]);

    const arr = [];

    const getGuidesEvents = id =>
        getEvents()
            .then(data => data.filter(ev => ev.guideId === id))
            .then(events =>
                events.forEach((ev, index) => {
                    const date = new Date(ev.timeStart.seconds * 1000);
                    arr.push({
                        id: index + 1,
                        date: `${date.getDate()} ${getMonthName(
                            date.getMonth()
                        )} ${date.getFullYear()}`,
                        title: ev.title,
                        price: ev.price,
                        places: ev.totalSpace,
                    });
                })
            )
            .then(() => setRows([...arr]));

    useEffect(() => {
        getGuidesEvents(guideId);
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{/* minWidth: 650 */ width: '100%'}}
                aria-label="simple table"
            >
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
                            key={row.title}
                            sx={{
                                '&:last-child td, &:last-child th': {border: 0},
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="right">{row.places}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
