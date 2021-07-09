import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from '../libs/AvatarStyle';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT_REQUEST } from '../redux/constants/actionTypes';
import { AdminDropdown } from './AdminDropdown/AdminDropdown';
import './Avatar.css';
// import decode from 'jwt-decode';

const AvatarIcon = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem('profile'))
	);
	const logout = () => {
		dispatch({ type: LOGOUT_REQUEST });
		history.push('/');
	};

	useEffect(() => {
		setUser(JSON.parse(sessionStorage.getItem('profile')));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sessionStorage.getItem('profile')]);
	return (
		<Toolbar className={classes.toolbar}>
			{user ? (
				<div className={classes.profile}>
					<Avatar
						className={classes.purple}
						alt={user.firstNname}
						src={user.imageUrl}
					>
						{user.firstName.charAt(0)}
					</Avatar>
					<Button
						variant='contained'
						className={classes.logout}
						color='secondary'
						onClick={logout}
					>
						Logout
					</Button>
					{user.role === 2 && <AdminDropdown />}
					{/* {user.role === 1&& <AdminDropdown />} */}
				</div>
			) : (
				<Link className='avatarButton' to='/auth'>
					Get Started
				</Link>
			)}
		</Toolbar>
	);
};

export default AvatarIcon;
