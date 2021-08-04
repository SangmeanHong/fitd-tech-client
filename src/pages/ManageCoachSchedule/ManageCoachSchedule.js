import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookScheduler from '../../components/BookScheduler/BookScheduler'
import { API } from '../../config';
import './ManageCoachSchedule.css';

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
    }, []);

    const handleSubmit = async () => {
        const result = await axios.post(`${API}/api/schedule/manage-coach-schedule`, { changedEvents: events }, {
            withCredentials: true
        });
        console.log(`result`, result)
    }

    return (
        <div className='manageCoachSchdule-container'>
            <div className='manageCoachSchdule-title'>
                Manage Schedule
            </div>
            <div className='manageCoachSchdule-scheduler'>
                <BookScheduler events={events} setEvents={setEvents} />
            </div>
            <div className='manageCoachSchdule-btn'>
                <button className='sendBtn' onClick={() => handleSubmit()}>
                    Send
                </button>
            </div>
        </div>
    )
}
