import React from 'react';
import { useLocation } from 'react-router-dom';
import Pricing from '../Home/Pricing';
import BookScheduler from '../../components/BookScheduler/BookScheduler';
import BookTable from '../../components/BookTable/BookTable';

const Payment = () => {
	//console.log(`useLocation`, useLocation());
	const { firstName, lastName, events } = useLocation().state;

	const userInfo = JSON.parse(sessionStorage.getItem('profile'));

	return (
		<div>
			{userInfo.isMembership === 0 && userInfo._id && <Pricing />}
			{/* {userInfo.isMembership > 0 && <BookScheduler events={events} />} */}
			{userInfo.isMembership > 0 && (
				<BookTable events={events} firstName={firstName} lastName={lastName} />
			)}
		</div>
	);
};

export default Payment;
