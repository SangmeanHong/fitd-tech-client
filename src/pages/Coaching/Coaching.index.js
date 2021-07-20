import React, { useState } from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css';
import { useHistory } from 'react-router';
import axios from 'axios';

function Coaching() {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem('profile'))
    );

    const history = useHistory();

    const userInfo = JSON.parse(sessionStorage.getItem('profile'));
    const onClickBtn = () => {
        history.push('/newcoach');
    };

    const handleSearch = async (e) => {
        const search = e.target.value;
        const result = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/search/coach/${search}`, {
            withCredentials: true,
        })
        console.log(`result`, result)
    };

    return (
      <div className='Coaching'>
        <div>
          <h1 className='coaching_header'>Explore our Coaches</h1>
          {userInfo && userInfo.role === 0 ? (
            <div className='flex-header'>
              <button className='coachbtn' onClick={onClickBtn}>Want to become a coach?</button>
            </div>
          ) : (
            <div>
              {userInfo && userInfo.role === 3 ? (
                <div>You already applied</div>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        <div className='coachingCards'>
          {coachData.map((data, index) => {
            return <CoachingProfileCard coachData={data} index={index} />;
          })}
        </div>
      </div>
    );

}

export default Coaching;
