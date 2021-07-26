import React from 'react';
import { useSelector } from 'react-redux';
import Pricing from '../Home/Pricing';

const Payment = ({}) => {
	// const userId = userId;

	const userInfo = JSON.parse(sessionStorage.getItem('profile'));
	// const user = useSelector(user.isMembership);
	// const { user } = useSelector((state) => state.getUsersReducer);
	//const userInfo = localStorage.getItem('profile');
	// const user = JSON.parse(localStorage.getItem('profile'));

	//const user = useSelector((state) => state.getUsersReducer);
	console.log(`userInfo`, userInfo.isMembership);

	return (
		<div>
			{/* {
                !userId && */}
			<Pricing />
			{/* } */}
		</div>
	);
};

export default Payment;

//const { users, applications, loading, err } = useSelector(state => state.getUsersReducer);

// const [user, setUser] = useState(
// 	JSON.parse(sessionStorage.getItem('profile'))
// );
