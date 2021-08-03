import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const ManageUserSchedule = ({ events }) => {
	const localizer = momentLocalizer(moment);
	return (
		<React.Fragment>
			<div>general user schedule.</div>
			{/* <div>
				<Calendar
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
			</div> */}
		</React.Fragment>
	);
};

export default ManageUserSchedule;
