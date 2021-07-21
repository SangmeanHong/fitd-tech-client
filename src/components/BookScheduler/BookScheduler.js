import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './styles.css';

import { useDispatch } from 'react-redux';
import actionAddContent from '../../redux/actions/actionAddContent';
import axios from 'axios';

const BookScheduler = () => {
	const dispatch = useDispatch();

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

	useEffect(() => {
		const getContent = async () => {
			const result = await axios.get('http://localhost:8080/api/content');
			console.log(`result.data`, result.data);
			result.data.map((data) => {
				if (data.events.length > 0) {
					console.log(`data.events`, data.events);
					const preDate = data.events[0];
					console.log(`preDate`, preDate);
					const startDateObj = new Date(preDate.start);
					const hours = startDateObj.getUTCHours();
					const minutes = startDateObj.getUTCMinutes();
					const second = startDateObj.getUTCSeconds();
					const year = startDateObj.getFullYear();
					const month = startDateObj.getMonth();
					const date = startDateObj.getDate();

					const endDateObj = new Date(preDate.end);
					const endhours = endDateObj.getUTCHours();
					const endminutes = endDateObj.getUTCMinutes();
					const endsecond = endDateObj.getUTCSeconds();
					const endyear = endDateObj.getFullYear();
					const endmonth = endDateObj.getMonth();
					const enddate = endDateObj.getDate();

					preDate.start = new Date(year, month, date, hours, minutes);
					preDate.end = new Date(
						endyear,
						endmonth,
						enddate,
						endhours,
						endminutes
					);
					setEvents(data.events);
				}
			});
		};
		getContent();
	}, []);

	// const addContentObj = {
	// 	title: 'title',
	// 	description: 'desc',
	// 	contentPrice: 30,
	// 	duration: 40,
	// 	via: 'video',
	// 	type: 'group',
	// 	detail: 'details',
	// 	fileUrl: 'uploadFile',
	// 	events,
	// };
	// console.log(`addContentObj`, addContentObj);
	// dispatch(actionAddContent(addContentObj));

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
