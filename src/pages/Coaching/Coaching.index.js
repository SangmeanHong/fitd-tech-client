import React from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css'

function Coaching() {
    return (
        <div className="Coaching">
            <div className="coaching_header">Explore our Coaches</div>
            <div className="coachingCards">
                {
                    coachData.map((data) => {
                        return (
                            <CoachingProfileCard coachData={data} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Coaching;