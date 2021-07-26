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
	const [userSelectedSchedule, setUserSelectedSchedule] = useState([]);

	console.log(`events`, events);

	const modifiedEvents = events.map((map) => {
		console.log('events.length', events.length);
		if (events.length > 0) {
			const tempData = events[0];

			const tempStart = tempData.start.slice(0, 16);
			const modifiedStart = tempStart.replace('T', ' ');

			const tempEnd = tempData.end.slice(0, 16);
			const modifiedEnd = tempEnd.replace('T', ' ');
		}

		// return [{ modifiedTitle, modifiedStart, modifiedEnd }];
	});

	console.log(`modifiedEvents`, modifiedEvents);

	return (
		<div className='container-main'>
			<div className='coachInfo'>
				Coach name : {firstName} {lastName}
			</div>
			<DataGrid
				rows={events}
				columns={columns}
				pageSize={10}
				checkboxSelection
				disableSelectionOnClick
				onRowSelected
				onSelectionModelChange={(e) => setUserSelectedSchedule(e)}
			/>
		</div>
	);
};

export default BookTable;
