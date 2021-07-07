import React, { useState } from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css';
import { useHistory } from 'react-router';

function Coaching() {
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem('profile'))
	);

	const history = useHistory();

	const userInfo = JSON.parse(sessionStorage.getItem('profile'));
	console.log(`userInfo`, userInfo && userInfo.role);
	const onClickBtn = () => {
		history.push('/newcoach');
	};

	return (
		<div className='Coaching'>
			<div>
				<h1 className='coaching_header'>Explore our Coaches</h1>
				{userInfo && userInfo.role === 0 ? (
					<div className='flex-header'>
						<button onClick={onClickBtn}>Apply new coach</button>
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
