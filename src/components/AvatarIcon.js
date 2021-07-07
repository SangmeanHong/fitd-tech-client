import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from '../libs/AvatarStyle';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LOGOUT_REQUEST } from '../redux/constants/actionTypes';
import './Avatar.css';
// import decode from 'jwt-decode';

const AvatarIcon = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = () => {
		dispatch({ type: LOGOUT_REQUEST });
		history.push('/');
		setUser(null);
	};

	useEffect(() => {
		// const token = user?.token;

		// if (token) {
		//     const decodedToken = decode(token);

		//     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		// }

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

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
