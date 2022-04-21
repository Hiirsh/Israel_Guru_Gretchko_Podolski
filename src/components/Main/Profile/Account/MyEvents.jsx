import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {
    getEventById,
    getEvents,
} from '../../../../firebaseFiles/services/eventsService';
import {getMonthName} from '../../../../utils/dateUtils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CopyIcon from '../../../../icons/CopyIcon';
import DeleteIcon from '../../../../icons/DeleteIcon';
import EditIcon from '../../../../icons/EditIcon';
import {editEventPage} from '../../../../utils/constants';
import s from '../../../../componentStyles/MyEventsPage.css';
import {v4 as uuidv4} from 'uuid';
import {
    addEventToGuide,
    updateEvent,
} from '../../../../firebaseFiles/services/eventsService';

export default function MyEvents() {
    const {userId: guideId} = useParams();
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const arr = [];

    const handleClickCopy = eventId => {
        const id = uuidv4();
        const userData = JSON.parse(localStorage.getItem('userData'));
        localStorage.setItem(
            'userData',
            JSON.stringify(userData.events.push(id))
        );
        addEventToGuide(userData.userId, id);
        getEventById(eventId).then(data => {
            console.log(data);
            updateEvent({...data, id});
            const date = new Date(data.timeStart.seconds * 1000);
            setRows([
                ...rows,
                {
                    id: rows.length + 1,
                    date: `${date.getDate()} ${getMonthName(
                        date.getMonth()
                    )} ${date.getFullYear()}`,
                    title: data.title,
                    price: data.price,
                    places: data.totalSpace,
                    eventId: id,
                },
            ]);
        });
    };

    const handleClickEdit = eventId => {
        navigate(`../${editEventPage}/${guideId}/${eventId}`);
    };
    const handleClickDelete = eventId => {};

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
                        eventId: ev.id,
                    });
                })
            )
            .then(() => setRows([...arr]));

    useEffect(() => {
        getGuidesEvents(guideId);
    }, []);

    return (
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
                            <TableCell align="center">{row.places}</TableCell>
                            <TableCell sx={{width: 20}} align="center">
                                <div
                                    className="icon"
                                    onClick={() => handleClickEdit(row.eventId)}
                                >
                                    <EditIcon />
                                </div>
                            </TableCell>
                            <TableCell align="center" sx={{width: '30px'}}>
                                <div
                                    className="icon"
                                    onClick={() => handleClickCopy(row.eventId)}
                                >
                                    <CopyIcon />
                                </div>
                            </TableCell>
                            <TableCell align="center" sx={{width: 30}}>
                                <div
                                    className="icon"
                                    onClick={() =>
                                        handleClickDelete(row.eventId)
                                    }
                                >
                                    <DeleteIcon />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
