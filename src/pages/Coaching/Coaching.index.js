import React, { useEffect, useState } from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css';
import { useHistory } from 'react-router';
import { getCoaches } from '../../libs/getCoaches';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core';

const styles = {
	root: {
		border: 'green',
	},
	input: {
		color: 'green',
	},
};

// const useStyles = makeStyles({
// 	underline: {
// 		// normal style
// 		'&::before': {
// 			borderBottom: '4px solid green',
// 		},
// 		// hover style
// 		'&:hover:not(.Mui-disabled):before': {
// 			borderBottom: '4px solid blue',
// 		},
// 		// focus style
// 		'&::after': {
// 			borderBottom: '4px solid red',
// 		},
// 	},
// });

function Coaching() {
	//const {classes} = props;
	// const classes = useStyles();
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem('profile'))
	);
	const [coaches, setCoaches] = useState([]);

	const history = useHistory();

	const userInfo = JSON.parse(sessionStorage.getItem('profile'));
	const onClickBtn = () => {
		history.push('/newcoach');
	};

	const handleSearch = async (e) => {
		const search = e.target.value;
		const coaches = await getCoaches(search);
		setCoaches(coaches);
	};

	useEffect(() => {
		(async () => {
			const coaches = await getCoaches();
			setCoaches(coaches);
		})();
	}, []);

	return (
		<div className='Coaching'>
			<h1 className='coaching_header'>Explore our Coaches</h1>
			<div className='container-search_btn'>
				<div className='input'>
					<TextField
						//className={classes.textField}
						id='outlined-basic'
						label='Search Coach'
						variant='outlined'
						size='small'
						color='primary'
						onChange={handleSearch}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
							//className: classes.input,
						}}
					/>
				</div>
				{userInfo && userInfo.role === 0 ? (
					<div className='flex-header'>
						<button className='coachbtn' onClick={onClickBtn}>
							Want to become a coach?
						</button>
					</div>
				) : (
					<div>
						{userInfo && userInfo.role === 3 ? (
							<div>You already applied</div>
						) : (
							''
						)}
					</div>
				)}
			</div>
			<div className='coachingCards'>
				{coaches &&
					coaches.length > 0 &&
					coaches.map((coach, index) => {
						return <CoachingProfileCard coachData={coach} index={index} />;
					})}
			</div>
		</div>
	);
}

export default Coaching;
