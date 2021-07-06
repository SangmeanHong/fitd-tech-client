import React from 'react'
import { useParams } from 'react-router-dom'

export const CoachDetail = () => {
    const coachName = useParams().name;
    return (
        <div>
            coach detail page...
            <h1>{coachName}</h1>
        </div>
    )
}
