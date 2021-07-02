import React, { useState } from 'react';
import './newCoach.css';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
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
	SnackbarContent,
} from '@material-ui/core';
import { coachProfileObj } from '../../libs/coachProfileObj';

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

const CoachCheckboxGroup = ({
	values,
	label,
	onChange,
	expertiseAreaOther,
	setExpertiseAreaOther,
}) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<FormGroup>
			{values.map((value, index) => {
				if (index === values.length - 1) {
					return (
						<div className='lastCheckbox'>
							<FormControlLabel
								key={index}
								control={
									<Checkbox
										checked={value.checked}
										onChange={onChange(index)}
									/>
								}
								label={value.label}
							/>
							<TextField
								type='text'
								value={expertiseAreaOther}
								onChange={(e) => setExpertiseAreaOther(e.target.value)}
							/>
						</div>
					);
				}
				return (
					<FormControlLabel
						key={index}
						control={
							<Checkbox checked={value.checked} onChange={onChange(index)} />
						}
						label={value.label}
					/>
				);
			})}
		</FormGroup>
	</FormControl>
);

const ProvideCheckboxGroup = ({
	values,
	label,
	ProvideCheckboxonChange,
	provideCheckedOther,
	setProvideCheckedOther,
}) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<FormGroup>
			{values.map((value, index) => {
				if (index === values.length - 1) {
					return (
						<div className='lastCheckbox'>
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
							<TextField
								type='text'
								value={provideCheckedOther}
								onChange={(e) => setProvideCheckedOther(e.target.value)}
							/>
						</div>
					);
				}
				return (
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
				);
			})}
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
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [linkedIn, setLinkedIn] = useState('');
	const [introOfCoach, setIntroOfCoach] = useState('');
	const [uploadPhoto, setUploadPhoto] = useState({});
	const [coachStyle, setCoachStyle] = useState('');
	const [certification, setCertification] = useState('');
	const [paidOpt, setPaidOpt] = useState(false);
	const [wage, setWage] = useState(0);
	const [numOfPeople, setNumOfPeople] = useState(0);
	const [hoursPerWeek, setHoursPerWeek] = useState(0);
	const [expertiseArea, setExpertiseArea] = useState([
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
	const [expertiseAreaOther, setExpertiseAreaOther] = useState('');
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
	const [provideCheckedOther, setProvideCheckedOther] = useState('');
	const [coachAgreeChecked, setCoachAgreeChecked] = useState([
		{ label: 'I agree', checked: false },
	]);

	const [dialogOpen, setDialogOpen] = useState(false);

	const ExpertiseOnChange =
		(index) =>
		({ target: { checked } }) => {
			const newValues = [...expertiseArea];
			const value = expertiseArea[index];
			newValues[index] = { ...value, checked };
			setExpertiseArea(newValues);
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
		const emailRegEx =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (emailRegEx.test(email)) {
			const obj = coachProfileObj({
				firstName,
				lastName,
				email,
				linkedIn,
				introOfCoach,
				coachStyle,
				certification,
				paidOpt,
				wage,
				numOfPeople,
				hoursPerWeek,
				expertiseArea,
				provideChecked,
				expertiseAreaOther,
				provideCheckedOther,
				uploadPhoto,
			});
			console.log(`obj`, obj);
		} else {
			alert('Please check your email');
		}
		setDialogOpen(true);
	};

	const handleClose = () => {
		setDialogOpen(false);
	};

	const handleSubmit = () => {
		setDialogOpen(false);
	};

	const getUploadParams = ({ meta }) => {
		console.log(`meta`, meta);
		setUploadPhoto(meta);
	};

	const handleChangeStatus = ({ meta, file }, status) => {
		console.log('get photo', status, meta, file);
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
							error={firstName.errorText.length === 0 ? false : true}
							helperText={firstName.errorText}
							label='First name'
							type='text'
							value={firstName}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							id='coach-lastname'
							label='Last name'
							type='text'
							value={lastName}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='E-mail'
							type='email'
							value={email}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AlternateEmail />
									</InputAdornment>
								),
							}}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='LinkedIn Profile'
							type='text'
							value={linkedIn}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LinkedIn />
									</InputAdornment>
								),
							}}
							onChange={(e) => setLinkedIn(e.target.value)}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='Explain yourself'
							type='text'
							multiline
							value={introOfCoach}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
							onChange={(e) => setIntroOfCoach(e.target.value)}
						/>
					</div>
					<div className='textField'>
						<TextField
							required
							label='Your Photo'
							defaultValue='Upload your photo or logo'
							InputProps={{
								readOnly: true,
							}}
						/>
						<Dropzone
							required
							getUploadParams={getUploadParams}
							onChangeStatus={handleChangeStatus}
							maxFiles={1}
							value={uploadPhoto}
							accept='image/*'
						/>
					</div>
					<br /> <br />
					<div className='title_02'>Coaching Experience:</div>
					<div className='flex-2row'>
						<div className='question_01'>
							Have you had paid coaching clients?
						</div>
						<div className='paid_radio'>
							<PaidRadioGroup
								required
								value={paidOpt}
								options={options}
								name='radio1'
								paidonChange={(e) => setPaidOpt(e.target.value)}
							/>
						</div>
					</div>
					<div className='question_01'>What is your coaching hourly rate?</div>
					<div className='textField_01'>
						<TextField
							required
							type='number'
							value={wage}
							style={{ width: '100%' }}
							helperText='Without a decimal point'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AttachMoney />
									</InputAdornment>
								),
							}}
							onChange={(event) =>
								event.target.value < 0
									? setWage(0)
									: setWage(event.target.value)
							}
						/>
					</div>
					<div className='question_01'>
						Please describe your coaching style.
					</div>
					<div className='textField_01'>
						<TextField
							required
							type='text'
							value={coachStyle}
							style={{ width: '100%' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
							onChange={(e) => setCoachStyle(e.target.value)}
						/>
					</div>
					<div className='question_01'>How many people have you coached?</div>
					<div className='textField_01'>
						<TextField
							type='number'
							value={numOfPeople}
							helperText='Allow only integer'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
							onChange={(event) =>
								event.target.value < 0
									? setNumOfPeople(0)
									: setNumOfPeople(event.target.value)
							}
						/>
					</div>
					<div className='question_01'>
						How many hours per week will you be available to coach on FITD?
					</div>
					<div className='textField_01'>
						<TextField
							required
							type='number'
							value={hoursPerWeek}
							helperText='Allow only integer'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
							onChange={(event) =>
								event.target.value < 0
									? setHoursPerWeek(0)
									: setHoursPerWeek(event.target.value)
							}
						/>
					</div>
					<div className='question_01'>Coaching Certifications</div>
					<div className='textField_01'>
						<TextField
							type='text'
							value={certification}
							helperText='(e.g. ICF, CTI - If applicable)'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Create />
									</InputAdornment>
								),
							}}
							onChange={(e) => setCertification(e.target.value)}
						/>
					</div>
					<div className='question_01'>
						Please choose areas of expertise you would be most comfortable
						coaching on?
					</div>
					<div className='checkbox'>
						<CoachCheckboxGroup
							required
							values={expertiseArea}
							onChange={ExpertiseOnChange}
							expertiseAreaOther={expertiseAreaOther}
							setExpertiseAreaOther={setExpertiseAreaOther}
						/>
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
							provideCheckedOther={provideCheckedOther}
							setProvideCheckedOther={setProvideCheckedOther}
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
								<Button onClick={handleSubmit} color='primary' autoFocus>
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
