import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from '../libs/AvatarStyle';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LOGOUT } from '../redux/constants/actionTypes';
import './Avatar.css';
// import decode from 'jwt-decode';

const AvatarIcon = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = () => {
		dispatch({ type: LOGOUT });
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
						alt={user.result.name}
						src={user.result.imageUrl}
					>
						{user.result.name.charAt(0)}
					</Avatar>
					<Typography className={classes.userName} variant='h6'>
						{user.result.name}
					</Typography>
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
					Sign In
				</Link>
			)}
		</Toolbar>
	);
};

export default AvatarIcon;
