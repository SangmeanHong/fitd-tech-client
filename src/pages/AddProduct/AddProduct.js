import 'date-fns';
import React, { Fragment, useState } from 'react';
import { Grid, Container, TextField, InputAdornment } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import useStyles from './addProduct.styles';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const AddProduct = () => {
	const classes = useStyles();

	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleChange = () => {
		// write
	};

	return (
		<Fragment>
			<main className={classes.body}>
				<Container className={classes.container}>
					<form>
						<TextField
							required
							autoFocus
							label='Title'
							placeholder='Please write down title'
							variant='outlined'
							className={classes.textField}
						/>
						<TextField
							required
							autoFocus
							label='Description'
							placeholder='Description of the content'
							variant='outlined'
							className={classes.textField}
						/>
					</form>
				</Container>

				<div>
					<input
						acccept='image/*'
						onchange={handleChange('image')}
						type='file'
						// style={display: 'none'}
					/>
					<label htmlFor='icon-button-file'>
						<Button variant='out' color='secondary' component='span'>
							Upload Photo
						</Button>
					</label>
				</div>
			</main>
		</Fragment>
	);
};

export default AddProduct;
