import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './bookTableStyles.css';

const columns = [
	{
		field: 'title',
		headerName: 'Title',
		width: 300,
		editable: false,
	},
	{
		field: 'start',
		headerName: 'Start Time',
		width: 200,
		editable: false,
	},
	{
		field: 'end',
		headerName: 'End Time',
		width: 200,
		editable: false,
	},
];

const BookTable = ({ events, firstName, lastName }) => {
	const [eventIds, setEventIds] = useState([]);

	// MEMO MEMO
	// events.map((event, index) => {
	// 	console.log(`event.id`, event.id);
	// 	// if (event.id === events) {
	// 	// 	setUserSelectedSchedule(events);
	// 	// }
	// });
	const handleSend = async () => {
		const selectedEvents = events.filter((event) =>
			eventIds.includes(event.id)
		);
		console.log(`seselectedEventsle`, selectedEvents);
		// const result = await axios.post()
	};

	const modifiedEvents = events.reduce((acc, curr) => {
		if (curr.start) {
			const tempStart = curr.start.slice(0, 16);
			const modifiedStart = tempStart.replace('T', ' ');
			const tempEnd = curr.end.slice(0, 16);
			const modifiedEnd = tempEnd.replace('T', ' ');
			curr['start'] = modifiedStart;
			curr['end'] = modifiedEnd;
			acc.push(curr);
		}
		return acc;
	}, []);

	return (
		<div className='container-main'>
			<div className='coachInfo'>
				Coach name : {firstName} {lastName}
			</div>
			<DataGrid
				rows={modifiedEvents}
				columns={columns}
				pageSize={10}
				checkboxSelection
				disableSelectionOnClick
				onRowSelected
				// onSelectionModelChange={(e) => setUserSelectedSchedule(e)}
				onSelectionModelChange={(e) => setEventIds(e)}
			/>
			<button onClick={() => handleSend()}>Send</button>
		</div>
	);
};

export default BookTable;
