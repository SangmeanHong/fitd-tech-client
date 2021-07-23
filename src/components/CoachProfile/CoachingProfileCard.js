import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CoachCategoriesCard } from './CoachCategoriesCard';
import './CoachingProfileCard.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 360,
	},
});

export const CoachingProfileCard = ({ coachData, index }) => {
	const classes = useStyles();
	const { coach } = coachData;
	const { firstName, lastName, fileUrl, expertiseArea, introOfCoach } =
		coach[0];
	function textLengthOverCut(txt, len, lastTxt) {
		if (len === '' || len === null) {
			// 기본값
			len = 20;
		}
		if (lastTxt === '' || lastTxt === null) {
			// 기본값
			lastTxt = '...';
		}
		if (txt.length > len) {
			txt = txt.substr(0, len) + lastTxt;
		}
		return txt;
	}
	return (
		<div className={`coachingProfileCard`} key={index}>
			<div className='cards__item__link '>
				<CardMedia
					className={`${classes.media} coachImg`}
					image={fileUrl}
					title={fileUrl}
				/>
				<div className='cardActionArea'>
					<div className='cardContent'>
						<h2 className='coachName'>{`${firstName} ${lastName}`}</h2>
						<div className='coachCategories'>
							{expertiseArea.map((data) => {
								return <CoachCategoriesCard categories={data} />;
							})}
						</div>
						<h6 className='coachIntro'>
							{textLengthOverCut(introOfCoach, '200', '...')}
						</h6>
					</div>
					<div className='cardActions'>
						<Link
							className='coachLeanMoreButton'
							to={{
								pathname: `/coaches/${firstName} ${lastName}`,
								state: coach[0],
							}}
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
