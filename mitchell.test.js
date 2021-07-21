import React, { Fragment, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dateArthmetic from 'date-arithmetic';

import './styles.css';

const BookScheduler = () => {
	// const [events, setEvents] = useState([
	// 	{
	// 		title: '',
	// 		start: Date,
	// 		end: Date,
	// 		allDay: false,
	// 		resource: '',
	// 	},
	// ]);

	// const [events, setEvents] = useState([
	// 	{
	// 		title: 'bbbb',
	// 		start: '2021-07-20T10:00:00Z',
	// 		end: '2021-07-20T12:15:00Z',
	// 	},
	// ]);
	const [events, setEvents] = useState([]);

	// provide localization with the momentLocalizer function.
	const localizer = momentLocalizer(moment);

	const DnDCalendar = withDragAndDrop(Calendar);

	// const onEventResize = (data) => {
	// 	console.log(`data`, data);
	// 	const { start, end } = data;

	// 	setEvents((state) => {
	// 		setEvents[0].start = start;
	// 		setEvents[0].end = end;
	// 		return { events: setEvents };
	// 	});
	// };

	// const onEventDrop = (data) => {
	// 	console.log(data);
	// };

	const handleSelect = ({ start, end, allDay, resource }) => {
		console.log(`data`, start, end, allDay, resource);
		const title = window.prompt('Coaching Title Name');
		console.log(`title`, title);
		//const [data] = data;
		if (title) {
			setEvents([...events, { title, start, end, allDay, resource }]);
		}
	};

	// test
	// const eventSelected = (e) => {
	// 	const title = window.prompt('Coaching Title Name');
	// };
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

	//Clicking an existing event allows you to remove it
	// onSelectEvent(pEvent) {
	// 	const r = window.confirm("Would you like to remove this event?")
	// 	if(r === true){

	// 		this.setState((prevState, props) => {
	// 			const events = [...prevState.events]
	// 			const idx = events.indexOf(pEvent)
	// 			events.splice(idx, 1);
	// 			return { events };
	// 		});
	//	}
	//}

	return (
		<div className='container-main'>
			<Calendar
				selectable
				//selected={(e) => console.log('동작되라고')}
				defaultDate={moment().toDate()}
				defaultView='week'
				localizer={localizer}
				events={events}
				titleAccessor={events.title}
				startAccessor={events.start}
				// endAccessor={events.end}
				// allDayAccessor={events.allDay}
				// resourceAccessor={events.resource}
				// event handler
				//onSelectEvent={(e) => alert(e.title)}
				onSelectEvent={(e) => handleEventResult(e)}
				//onSelectSlot={(e) => handleSelect}
				onSelectSlot={handleSelect}
				// options
				// resizable
				// onEventDrop={onEventDrop}
				// onEventResize={onEventResize}
				//showMultiDayTimes={true}
				//views={['month', 'day', 'agenda']}
				//onDoubleClickEvent={true}
				// min={30}
				// max={60}
			/>
			{console.log(`Title test`, events)}
			{console.log(`타입체크 events.start`, typeof events[0].start)}
		</div>
	);
};

export default BookScheduler;
