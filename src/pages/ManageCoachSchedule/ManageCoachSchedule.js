import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookScheduler from '../../components/BookScheduler/BookScheduler'
import { API } from '../../config';

export const ManageCoachSchedule = () => {
    const [events, setEvents] = useState([]);
    const { _id } = JSON.parse(sessionStorage.getItem('profile'));
    useEffect(() => {
        (
            async () => {
                const { data } = await axios.post(`${API}/api/user/getApplication`, {}, {
                    withCredentials: true
                });
                console.log(`_id`, _id)
                const application = data.app.filter((data) => data.user === _id);
                if (application.length > 0) {
                    const events = application[0].events
                    events.map((data) => {
                        data['start'] = new Date(data.start);
                        data['end'] = new Date(data.end);
                    })
                    console.log(`events`, events)
                    setEvents([...events]);
                }
            }
        )();
    }, [])
    return (
        <div>
            manage coach schedule page...
            <BookScheduler events={events} setEvents={setEvents} />
        </div>
    )
}
