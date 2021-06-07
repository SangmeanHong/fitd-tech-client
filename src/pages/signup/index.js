import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import Input from './input';
import useStyles from './styles';
import actionSignup from '../../redux/actions/signup';
import authIcon from './authIcon';

import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUp = () => {
	console.log(`### SIGN-UP ###`);

	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const [isSignup, setIsSignup] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(actionSignup(formData));
		} else {
			console.log(`actionSignup`, actionSignup);
			//dispatch(signin(formData, history));
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		handleShowPassword(false);
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;
		try {
			dispatch({ type: 'AUTH', data: { result, token } });
			history.pushState('/');
		} catch (error) {
			console.error(error);
		}
	};

	const googleError = () =>
		console.error('Google Sign In was unsuccessful. Try again later');

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<Fragment>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name='lastName'
									label='Last Name'
									handleChange={handleChange}
									half
								/>
							</Fragment>
						)}
						<Input
							name='email'
							label='Email Address'
							handleChange={handleChange}
							type='email'
						/>
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name='confirmPassword'
								label='Repeat Password'
								handleChange={handleChange}
								type='password'
							/>
						)}
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>
					<GoogleLogin
						clientId='GOOGLE_ID'
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color='primary'
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<authIcon />}
								variant='contained'
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleError}
						cookiePolicy='single_host_origin'
					/>
					<Grid container justify='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? 'Already have an account? Sign In'
									: 'Do not have an account? Sign Up'}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default SignUp;
