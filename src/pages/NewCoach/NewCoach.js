import React, { useState } from 'react';
import './newCoach.css';
import { useHistory } from 'react-router';
import {
	AccountCircle,
	AlternateEmail,
	LinkedIn,
	AttachMoney,
	Create,
} from '@material-ui/icons';
import {
	TextField,
	InputAdornment,
	FormControlLabel,
	FormControl,
	Radio,
	RadioGroup,
	FormLabel,
	FormGroup,
	Checkbox,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

const options = [
	{ label: 'Yes', value: 'yes' },
	{ label: 'No', value: 'no' },
];

const PaidRadioGroup = ({ value, options, name, paidonChange }) => (
	<FormControl component='fieldset'>
		<RadioGroup row name={name} value={value} onChange={paidonChange} disabled>
			{options.map((option, index) => (
				<FormControlLabel
					key={index}
					control={<Radio color='primary' />}
					value={option.value}
					label={option.label}
				/>
			))}
		</RadioGroup>
	</FormControl>
);

const CoachCheckboxGroup = ({ values, label, onChange }) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<FormGroup>
			{values.map((value, index) => (
				<FormControlLabel
					key={index}
					control={
						<Checkbox checked={value.checked} onChange={onChange(index)} />
					}
					label={value.label}
				/>
			))}
			<TextField type='text' style={{ width: '100%' }} />
		</FormGroup>
	</FormControl>
);

const ProvideCheckboxGroup = ({ values, label, ProvideCheckboxonChange }) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<FormGroup>
			{values.map((value, index) => (
				// if (index === 8) {

				// 	}

				<FormControlLabel
					key={index}
					control={
						<Checkbox
							checked={value.checked}
							onChange={ProvideCheckboxonChange(index)}
						/>
					}
					label={value.label}
				/>
			))}
		</FormGroup>
	</FormControl>
);

const CoachAgreeCheckboxGroup = ({ values, label, CoachAgreeOnChange }) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<FormGroup>
			{values.map((value, index) => (
				<FormControlLabel
					key={index}
					control={
						<Checkbox
							checked={value.checked}
							onChange={CoachAgreeOnChange(index)}
						/>
					}
					label={value.label}
				/>
			))}
		</FormGroup>
	</FormControl>
);

const NewCoach = () => {
	const history = useHistory();

	const [value, setValue] = useState(false);

	const [values, setValues] = useState([
		{ label: 'Software engineering/development', checked: false },
		{ label: 'Design', checked: false },
		{ label: 'Product management', checked: false },
		{ label: 'Marketing', checked: false },
		{ label: 'Operations', checked: false },
		{ label: 'Founders/Startups', checked: false },
		{ label: 'Finance', checked: false },
		{ label: 'Non-profit', checked: false },
		{ label: 'Other:', checked: false },
	]);

	const [provideChecked, setProvideChecked] = useState([
		{ label: 'General Career Coaching', checked: false },
		{
			label: 'Resume Review (where you give feedback on a resume)',
			checked: false,
		},
		{ label: 'Resume Writing (where you write the resume)', checked: false },
		{ label: 'Salary Negotiation', checked: false },
		{
			label: 'Mock Interviews (where you help someone practice interviewing)',
			checked: false,
		},
		{
			label:
				'Portfolio Review (where you give feedback on a designer’s portfolio)',
			checked: false,
		},
		{ label: 'Founder Coaching', checked: false },
		{ label: 'Other:', checked: false },
	]);

	const [coachAgreeChecked, setCoachAgreeChecked] = useState([
		{ label: 'I agree', checked: false },
	]);

	const [dialogOpen, setDialogOpen] = useState(false);

	const paidonChange = (e) => {
		setValue(e.target.value);
	};

	const onChange =
		(index) =>
		({ target: { checked } }) => {
			const newValues = [...values];
			const value = values[index];
			newValues[index] = { ...value, checked };
			setValues(newValues);
		};

	const ProvideCheckboxonChange =
		(index) =>
		({ target: { checked } }) => {
			console.log(`checked`, checked);
			const newValues = [...provideChecked];
			const value = provideChecked[index];
			newValues[index] = { ...value, checked };
			setProvideChecked(newValues);
		};

	const CoachAgreeOnChange =
		(index) =>
		({ target: { checked } }) => {
			const newValues = [...coachAgreeChecked];
			const value = coachAgreeChecked[index];
			newValues[index] = { ...value, checked };
			setCoachAgreeChecked(newValues);
		};

	const handleClickOpen = () => {
		setDialogOpen(true);
	};

	const handleClose = () => {
		setDialogOpen(false);
		history.push('/');
	};

	return (
		<div className='body'>
			<div className='main-container'>
				<div className='title_01'>FITD New Coach Application</div>
				<br /> <br />
				<form>
					<div className='title_02'>Basic Information:</div>
					<div className='textField'>
						<TextField
							required
							label='First name'
							type='text'
							size='Normal'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							id='coach-lastname'
							label='Last name'
							type='text'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='E-mail'
							type='email'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AlternateEmail />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='LinkedIn Profile'
							type='text'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LinkedIn />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<br /> <br />
					<div className='title_02'>Coaching Experience:</div>
					<div className='flex-2row'>
						<div className='question_01'>
							Have you had paid coaching clients?
						</div>
						<div className='paid_radio' style={{ color: '#7c7b7b' }}>
							<PaidRadioGroup
								value={value}
								options={options}
								name='radio1'
								onChange={paidonChange}
							/>
						</div>
					</div>
					<div className='question_01'>What is your coaching hourly rate?</div>
					<div className='textField_01'>
						<TextField
							required
							type='number'
							style={{ width: '100%' }}
							helperText='Without a decimal point'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AttachMoney />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>Please describe your coaching style</div>
					<div className='textField_01'>
						<TextField
							type='text'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>How many people have you coached?</div>
					<div className='textField_01'>
						<TextField
							type='number'
							helperText='Allow only integer'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>
						How many hours per week will you be available to coach on FITD?
					</div>
					<div className='textField_01'>
						<TextField
							required
							type='number'
							helperText='Allow only integer'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>Coaching Certifications</div>
					<div className='textField_01'>
						<TextField
							type='text'
							helperText='(e.g. ICF, CTI - If applicable)'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>Please describe your coaching style</div>
					<div className='textField_01'>
						<TextField
							type='text'
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className='question_01'>
						Please choose areas of expertise you would be most comfortable
						coaching on?
					</div>
					<div className='checkbox'>
						<CoachCheckboxGroup required values={values} onChange={onChange} />
					</div>
					<div className='question_01'>
						What services would you be comfortable providing? (Check all that
						apply)
					</div>
					<div className='checkbox'>
						<ProvideCheckboxGroup
							required
							values={provideChecked}
							ProvideCheckboxonChange={ProvideCheckboxonChange}
						/>
					</div>
					<div className='question_01'>
						I have read and agree to the Coach agreement.
					</div>
					<div className='checkbox'>
						<CoachAgreeCheckboxGroup
							required
							values={coachAgreeChecked}
							CoachAgreeOnChange={CoachAgreeOnChange}
						/>
					</div>
					<div>
						<div className='submitBtn'>
							<Button
								variant='outlined'
								color='primary'
								onClick={handleClickOpen}
								style={{ margin: '0 auto', display: 'flex' }}
							>
								Submit
							</Button>
						</div>
						<Dialog
							open={dialogOpen}
							onClose={handleClose}
							aria-labelledby='alert-dialog-title'
							aria-describedby='alert-dialog-description'
						>
							<DialogTitle id='alert-dialog-title'>
								{'Thank you for submitting the coach application from.'}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id='alert-dialog-description'>
									You need a confirmation procedure to become a coach. It takes
									about business 5 days, and if it is approved, we will contact
									you.
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color='primary'>
									Cancel
								</Button>
								<Button onClick={handleClose} color='primary' autoFocus>
									Process
								</Button>
							</DialogActions>
						</Dialog>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewCoach;
