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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material';

export default function MyEvents() {
    const {userId: guideId} = useParams();
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const arr = [];

    //Диалоговое окно
    const [eventIdToDialog, setEventIdToDialog] = useState('');
    const [openCopy, setOpenCopy] = useState(false);
    // const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleClickOpenCopy = () => {
        setOpenCopy(true);
    };
    const handleCloseCopy = () => {
        setOpenCopy(false);
    };
    /* const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    }; */
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const handleClickCopy = eventId => {
        const id = uuidv4();
        const userData = JSON.parse(localStorage.getItem('userData'));
        userData.events.push(id);
        localStorage.setItem('userData', JSON.stringify(userData));
        addEventToGuide(userData.userId, id);
        getEventById(eventId).then(data => {
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
    const handleClickDelete = eventId => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        userData.events.splice(userData.events.indexOf(eventId));
        localStorage.setItem('userData', JSON.stringify(userData));
        setRows(rows.filter(el => el.eventId !== eventId));
        deleteEvent(eventId);
        removeEventFromGuide(guideId, eventId);
    };

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
                                        onClick={() =>
                                            handleClickEdit(row.eventId)
                                        }
                                    >
                                        <EditIcon />
                                    </div>
                                </TableCell>
                                <TableCell align="center" sx={{width: '30px'}}>
                                    <div
                                        className="icon"
                                        onClick={() => {
                                            setEventIdToDialog(row.eventId);
                                            handleClickOpenCopy();
                                        }}
                                    >
                                        <CopyIcon />
                                    </div>
                                </TableCell>
                                <TableCell align="center" sx={{width: 30}}>
                                    <div
                                        className="icon"
                                        onClick={() => {
                                            setEventIdToDialog(row.eventId);
                                            handleClickOpenDelete();
                                        }}
                                    >
                                        <DeleteIcon />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Удалить событие'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        После нажатия кнопки “Удалить” данное мероприятие будет
                        удалено, всем участникам будут высланы уведомления и
                        возвращены деньги. Мероприятие будет перенесено в раздел
                        “Прошедшие”
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleCloseDelete();
                            handleClickDelete(eventIdToDialog);
                        }}
                    >
                        Да
                    </Button>
                    <Button onClick={handleCloseDelete} autoFocus>
                        Нет
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openCopy}
                onClose={handleCloseCopy}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Дублировать событие'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        После нажатия кнопки “Дублировать” будет создана копия
                        данного мероприятия, доступная для редактирования.
                        Информации по участникам скопирована не будет.
                        Оригинальное мероприятие останется без изменений.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleCloseCopy();
                            handleClickCopy(eventIdToDialog);
                        }}
                    >
                        Да
                    </Button>
                    <Button onClick={handleCloseCopy} autoFocus>
                        Нет
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
