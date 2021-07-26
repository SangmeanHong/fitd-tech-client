import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { InputAdornment } from '@material-ui/core';

const AddressForm = () => {
	return (
		<Fragment>
			<Typography variant='h6' gutterBottom>
				Purchase Information
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label='First name'
						defaultValue='Mitchell'
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label='Last name'
						defaultValue='Sung'
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label='Email address'
						defaultValue='mitchell.sung@gmail.com'
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label='Price'
						defaultValue='99.99'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AttachMoneyIcon />
								</InputAdornment>
							),
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Content or membership name'
						defaultValue='Gold membership'
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default AddressForm;
