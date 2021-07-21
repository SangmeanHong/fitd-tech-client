import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './styles.css';

const BookScheduler = () => {
	const [events, setEvents] = useState([]);

	// provide localization with the momentLocalizer function.
	const localizer = momentLocalizer(moment);

	const handleSelect = ({ start, end, allDay, resource }) => {
		const title = window.prompt('Coaching Title Name');
		if (title) {
			setEvents([...events, { title, start, end, allDay, resource }]);
		}
	};

	const convertDate = (time) => {
		const timeStr = time.toString();
		return timeStr.slice(0, 21);
	};

	const handleEventResult = (e) => {
		const title = e.title;
		const startTime = convertDate(e.start);
		const endTime = convertDate(e.end);

		alert(`title: ${title}, start: ${startTime}, end: ${endTime}
		`);
	};

	return (
		<div className='container-main'>
			<Calendar
				selectable
				defaultDate={moment().toDate()}
				defaultView='week'
				localizer={localizer}
				events={events}
				titleAccessor={events.title}
				startAccessor={events.start}
				onSelectEvent={(e) => handleEventResult(e)}
				onSelectSlot={handleSelect}
			/>
		</div>
	);
};

export default BookScheduler;
