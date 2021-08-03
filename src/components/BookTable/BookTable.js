import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionUserSchedule from '../../redux/actions/actionUserSchedule';
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
	const dispatch = useDispatch();
	const history = useHistory();

	const [eventIds, setEventIds] = useState([]);

	const handleSend = async () => {
		const selectedEvents = events.filter((event) =>
			eventIds.includes(event.id)
		);
		if (selectedEvents) {
			dispatch(actionUserSchedule(selectedEvents));
			history.push('/');
		} else {
			alert('Please check the time you want to take the coach');
			return;
		}
	};
	const copiedEvents = JSON.parse(JSON.stringify(events));

	const modifiedEvents = copiedEvents.reduce((acc, curr) => {
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
			<div className='data-grid'>
				<DataGrid
					rows={modifiedEvents}
					columns={columns}
					pageSize={10}
					checkboxSelection
					disableSelectionOnClick
					onRowSelected
					onSelectionModelChange={(e) => setEventIds(e)}
				/>
			</div>
			<div className='container-btn'>
				<button className='sendBtn' onClick={() => handleSend()}>
					Send
				</button>
			</div>
		</div>
	);
};

export default BookTable;
