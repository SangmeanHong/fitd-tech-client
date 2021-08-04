import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import ShowScheduler from '../Modal_BookScheduler/Modal_ShowScheduler';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';

const BookScheduler = ({ events, setEvents }) => {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState();

    const localizer = momentLocalizer(moment);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('Coaching Title Name');
        if (title) {
            setEvents([...events, { title, start, end, id: uuidv4(), booked: false }]);
        }
    };

    const handleEventResult = (eventData) => {
        setSelectedEvent(eventData);
        setOpen(true);
    };

    const checkBtn = () => {
        console.log(`events`, events)
    }

    return (
        <div className='container-main'>
            <ShowScheduler
                open={open}
                setOpen={setOpen}
                events={events}
                setEvents={setEvents}
                selectedEvent={selectedEvent}
            />
            <Calendar
                selectable
                defaultDate={moment().toDate()}
                defaultView='week'
                localizer={localizer}
                events={events}
                titleAccessor={events?.title}
                startAccessor={events?.start}
                endAccessor={events?.end}
                onSelectEvent={(e) => handleEventResult(e)}
                onSelectSlot={handleSelect}
            />
            <button onClick={() => checkBtn()}>check</button>
        </div>
    );
};

export default BookScheduler;
