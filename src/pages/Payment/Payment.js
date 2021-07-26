import React from 'react';
import Pricing from '../Home/Pricing';

const Payment = ({}) => {
	// const userId = userId;

	const { userInfo } = JSON.parse(sessionStorage.getItem('profile'));
	console.log(`userInfo`, userInfo);

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
