import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from 'react';
import {getEventById} from '../../../../firebaseFiles/services/eventsService';
import {getMonthName} from '../../../../utils/dateUtils';

export default function MyEventsTable(props) {
    const [rows, setRows] = useState([]);
    const eventsId = props.eventsId;
    const columns = [
        {field: 'id', headerName: '№', width: 50},
        {field: 'date', headerName: 'Date', width: 150},
        {field: 'title', headerName: 'Title', width: 150},
        {field: 'price', headerName: 'Price', width: 70},
        {
            field: 'places',
            headerName: 'Places',
            // type: 'number',
            width: 90,
        },
    ];

    const arr = [];
    useEffect(() => {
        // getEvents().then(events => console.log(events || 'error'));

        eventsId.map((id, index) => {
            getEventById(id)
                .then(data => {
                    const date = new Date(data.timeStart.seconds * 1000);
                    arr.push({
                        id: index + 1,
                        date: `${date.getDate()} ${getMonthName(
                            date.getMonth()
                        )} ${date.getFullYear()}`,
                        title: data.title,
                        price: data.price,
                        places: data.totalSpace,
                    });
                })
                .then(() => {
                    setRows([...arr]);
                });
            // .then(() => console.log(arr));
        });
    }, []);

    return (
        <div style={{height: 400, width: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
                // autoHeight={true}
                // autoPageSize={true}
                // pageSize={5}
                // rowsPerPageOptions={[5]}
                // checkboxSelection
            />
        </div>
    );
}
