import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './CoachDetail.css';
import Pricing from '../Home/Pricing';
import Button from '../../pages/Home/Button';

export const CoachDetail = () => {
	const coachData = useLocation().state;

	const history = useHistory();
	// console.log(`useLocation()`, useLocation());
	// console.log(`coachData`, coachData);
	const {
		firstName,
		lastName,
		expertiseArea,
		fileUrl,
		categories,
		coachStyle,
		email,
		linkedIn,
		certification,
		services,
		introOfCoach,
	} = coachData;

	const onClickBookBtn = () => {
		history.push(`/payment/${firstName} ${lastName}`);
	};

	return (
		<div className='CoachDetailPage'>
			<div className='left'>
				<div className='leftTop'>
					<div className='leftImg'>
						<img src={fileUrl} alt='coach_face' />
					</div>
					<div className='leftName'>{`${firstName} ${lastName}`}</div>
					<div className='leftExpertise'>
						{expertiseArea.map((data) => {
							return <span>{data.label}</span>;
						})}
					</div>
				</div>
				<div className='btnFlex'>
					<div className='leftSubscribeBtn'>
						<button onClick={onClickBookBtn}>Book Coach</button>
					</div>
					<div className='leftSubscribeBtn'>
						<button>Subscribe</button>
					</div>
				</div>
				<div className='leftBottom'>
					<div className='leftEmail'>{email}</div>
					<div className='leftSotialLinks'>
						<div className='leftLinkedInBtn'>
							<LinkedInIcon />
						</div>
						<div className='leftEmailBtn'>
							<EmailIcon />
						</div>
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='rightTop'>
					<h2 className='righTopTitle'>About Me</h2>
					<p className='rightIntroduction'>{introOfCoach}</p>
				</div>
				<div className='rightBottom'>
					<h2 className='rightBottomTitle'>Teaching</h2>
					<div className='bigLink'>related contents...</div>
				</div>

				<Link to='/payment'>Place Order</Link>
			</div>
		</div>
	);
};
