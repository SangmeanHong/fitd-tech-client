import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const ShowScheduler = ({ open, setOpen, events, setEvents, selectedEvent }) => {
	const onConfirm = () => {
		setOpen(false);
	};

	const onDeleteDate = (selectedEvent) => {
		if (events.length > 0) {
			const nextEvents = events.filter((events) => {
				return events.id !== selectedEvent.id;
			});
			setEvents(nextEvents);
			setOpen(false);
		}
	};

	return (
		<>
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				maxWidth='xs'
				open={open}
			>
				<DialogTitle>Booked Schedule</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<div>
							<b>TITLE : </b>
							{selectedEvent?.title}
						</div>
						<div>
							<b>START TIME : </b>
							{selectedEvent?.start.toString()}
						</div>
						<div>
							<b>END TIME : </b>
							{selectedEvent?.end.toString()}
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={(e) => onDeleteDate(selectedEvent)} color='primary'>
						Delete
					</Button>
					<Button variant='contained' onClick={onConfirm} color='primary'>
						Check
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ShowScheduler;

//onClick={onDialogClose}
