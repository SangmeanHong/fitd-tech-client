import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './CoachDetail.css';
import Pricing from '../Home/Pricing';
import Button from '../../pages/Home/Button';
import { TextField } from '@material-ui/core';
import Rating, { RatingProps } from '@material-ui/lab/Rating';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import { API } from '../../config';

export const CoachDetail = () => {
    const coachData = useLocation().state;
    const [rating, setRating] = useState('Select');
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);
    const [submittedReview, setSubmittedReview] = useState(false);
    const [noMoreReviews, setNoMoreReviews] = useState(false);
    const profile = JSON.parse(sessionStorage.getItem('profile'));
    const history = useHistory();
    // console.log(`useLocation()`, useLocation());
    // console.log(`coachData`, coachData);
    const {
        firstName,
        lastName,
        expertiseArea,
        fileUrl,
        categories,
        coachStyle,
        email,
        linkedIn,
        certification,
        services,
        introOfCoach,
    } = coachData;

    const onClickBookBtn = () => {
        history.push(`/payment/${firstName} ${lastName}`);
    };
    const ratingChange = (event, value) => {
        setRating(value?.toString());
    }

    const handleSubmitReview = async () => {
        setSubmittedReview(false);
        if (profile) {
            const { _id, firstName: logginUserFirstName, lastName: logginUserLastName } = profile;
            console.log(`rating`, rating);
            console.log(`comment`, comment);
            console.log(`coachData`, coachData);
            const coachId = coachData._id;
            const loginUserFullname = `${logginUserFirstName} ${logginUserLastName}`;
            const reviewObj = {
                review: comment,
                rating,
                userId: _id,
                userName: loginUserFullname,
                coachId,
            }
            const result = await axios.post(`${API}/api/review/coach-review`, reviewObj, { withCredentials: true })
            console.log(`result 코치데이터에서`, result);
            setComment("");
        }
        setSubmittedReview(true);
    };

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`${API}/api/review/${coachData._id}/coach-reviews`, {
                    withCredentials: true
                });
                const reviews = data.reviews;
                console.log(`reviews 리뷰찾기`, reviews);
                setReviews(reviews);
                if (profile) {
                    const { _id } = profile;
                    const alreadyReviewed = reviews.filter((data) => data.creator === _id).length > 0 ? true : false;
                    console.log(`alreadyReviewed`, alreadyReviewed);
                    setNoMoreReviews(alreadyReviewed);
                }
            }
        )();
    }, [submittedReview]);


    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const dataLimit = 5;
    const indexOfLast = page * dataLimit;
    const indexOfFirst = indexOfLast - dataLimit;
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        if (reviews) {
            // setPageData(createdReviews.slice(0, 4) as reviewType[]); // 0 2 , 1 3, 2 4           0 2 , 2 4, 4 6
            // 우선 먼저 sort 를 해서 순서를 바꿔주고 slice 로 data를 나눠준다.
            setPageData(reviews.slice(indexOfFirst, indexOfLast)); // 0 2 , 1 3, 2 4           0 2 , 2 4, 4 6
        }
    }, [indexOfFirst, indexOfLast, reviews]);


    return (
        <div className='CoachDetailPage'>
            <div className='left'>
                <div className='leftTop'>
                    <div className='leftImg'>
                        <img src={fileUrl} alt='coach_face' />
                    </div>
                    <div className='leftName'>{`${firstName} ${lastName}`}</div>
                    <div className='leftExpertise'>
                        {expertiseArea.map((data) => {
                            return <span>{data.label}</span>;
                        })}
                    </div>
                </div>
                <div className='btnFlex'>
                    <div className='leftSubscribeBtn'>
                        <button onClick={onClickBookBtn}>Book Coach</button>
                    </div>
                    <div className='leftSubscribeBtn'>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='leftBottom'>
                    <div className='leftEmail'>{email}</div>
                    <div className='leftSotialLinks'>
                        <div className='leftLinkedInBtn'>
                            <LinkedInIcon />
                        </div>
                        <div className='leftEmailBtn'>
                            <EmailIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='rightTop'>
                    <h2 className='righTopTitle'>About Me</h2>
                    <p className='rightIntroduction'>{introOfCoach}</p>
                </div>
                <div className='rightMiddle'>
                    <h2 className='rightMiddleTitle'>Teaching</h2>
                    <div className='bigLink'>related contents...</div>
                </div>
                <div className="rightReviews">
                    <h2 className='rightReviewsTitle'>Reviews</h2>
                    <div>
                        {
                            reviews.length > 0 ? (
                                <>
                                    {
                                        pageData.map((review) => {
                                            return (
                                                <div className="reviews">
                                                    <div className="reviewTop">
                                                        <div className="creatorName">{review.creatorName}</div>
                                                        <Rating name="half-rating" readOnly value={review.rating} size="small" style={{ fontSize: "20px" }} />
                                                    </div>
                                                    <div className="reviewContent">{review.review}</div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '30px auto',
                                        }}
                                    >
                                        <Pagination
                                            count={Math.ceil(reviews.length / dataLimit)}
                                            color='secondary'
                                            onChange={handlePageChange}
                                            page={page}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div> No reviews...</div>
                            )
                        }
                    </div>

                </div>
                <div className='rightBottom'>
                    <h2 className='rightBottomTitle'>Rating</h2>

                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={ratingChange} size="large" style={{ fontSize: "30px" }} />

                    <div className="">
                        <h2 className='rightBottomSubTitle'>Comment</h2>
                        <TextField
                            id="outlined-multiline-static"
                            label={profile ? 'Comment' : 'Need to login'}
                            disabled={profile && !noMoreReviews ? false : true}
                            multiline
                            rows={4}
                            variant="outlined"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className={profile && !noMoreReviews ? 'on' : 'off'}
                            onClick={() => handleSubmitReview()}
                            type="submit"
                            disabled={profile && !noMoreReviews ? false : true}

                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
