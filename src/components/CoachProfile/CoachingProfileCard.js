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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const CoachingProfileCard = ({ coachData }) => {
    const classes = useStyles();
    const { name, imageURL, categories, coachStyle, email, linkedIn, certification, services, introduction } = coachData
    return (
        <Card className={`${classes.root} CoachingProfileCard`}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title={imageURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <p className="coachCategorySection">
                        {
                            categories.map((data) => {
                                return (
                                    <CoachCategoriesCard categories={data} />
                                )
                            })
                        }
                    </p>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {introduction}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
