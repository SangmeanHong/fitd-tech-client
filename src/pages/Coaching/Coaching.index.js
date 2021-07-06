import React from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css'

function Coaching() {
    return (
        <div className="Coaching">
            <h1 className="coaching_header">Explore our Coaches</h1>
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