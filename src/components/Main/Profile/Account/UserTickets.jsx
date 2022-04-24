import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {
    deleteEvent,
    getEventById,
    getEvents,
    removeEventFromGuide,
} from '../../../../firebaseFiles/services/eventsService';
import {getMonthName} from '../../../../utils/dateUtils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from '../../../../componentStyles/MyEventsPage.css';
import {Box, Button, CircularProgress} from '@mui/material';
import {getUserData} from '../../../../firebaseFiles/services/authService';

export default function UserTickets() {
    const {userId} = useParams();
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const arr = [];

    function getEventsToGo() {
        getEvents().then(data =>
            data.forEach(event =>
                event.participants.forEach((participant, index) => {
                    const date = new Date(event.timeStart.seconds * 1000);
                    console.log(participant);
                    if (participant.userId === userId) {
                        arr.push({
                            id: index + 1,
                            title: event.title,
                            price: event.price,
                            place: event.place,
                            ticketNum: participant.numParticipants,
                            date: `${date.getDate()} ${getMonthName(
                                date.getMonth()
                            )} ${date.getFullYear()}`,
                        });
                        setRows([...arr]);
                    }
                })
            )
        );
    }
    useEffect(() => {
        getEventsToGo(userId);
        console.log(userId);
    }, []);

    return (
        <>
            {rows ? (
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
                                    <TableCell>Число билетов</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow
                                        key={row.eventId}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
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
                                        <TableCell align="left">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.place}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.ticketNum}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ) : (
                <div>
                    <h1>Please Wait</h1>
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress />
                    </Box>
                </div>
            )}
        </>
    );
}
