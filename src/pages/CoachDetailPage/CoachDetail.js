import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './CoachDetail.css';

export const CoachDetail = () => {
    const coachData = useLocation().state;
    console.log(`coachData디테일에서`, coachData)
    const { firstName,
        lastName,
        expertiseArea,
        fileUrl,
        categories,
        coachStyle,
        email,
        linkedIn,
        certification,
        services,
        introOfCoach, } = coachData;
    console.log(`coachData`, coachData)
    return (
        <div className="CoachDetailPage">
            <div className="left">
                <div className="leftTop">
                    <div className="leftImg"><img src={fileUrl} alt="coach_face" /></div>
                    <div className="leftName">{`${firstName} ${lastName}`}</div>
                    <div className="leftExpertise">{expertiseArea.map((data) => {
                        return (
                            <span>{data.label}</span>
                        )
                    })}
                    </div>
                </div>
                <div className="leftSubscribeBtn"><button>Subscribe</button></div>
                <div className="leftBottom">
                    <div className="leftEmail">{email}</div>
                    <div className="leftSotialLinks">
                        <div className="leftLinkedInBtn"><LinkedInIcon /></div>
                        <div className="leftEmailBtn"><EmailIcon /></div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="rightTop">
                    <h2 className="righTopTitle">About Me</h2>
                    <p className="rightIntroduction">{introOfCoach}</p>
                </div>
                <div className="rightBottom">
                    <h2 className="rightBottomTitle">Teaching</h2>
                    <div className="bigLink">related contents...</div>
                </div>
            </div>
        </div>
    )
}
