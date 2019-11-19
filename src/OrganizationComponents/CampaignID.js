import React from 'react';

const CampaignID = (props) => {
    return (
        <div key={props.id}>
            <h1>test</h1>
            <h2>Individual campaign --> use dynamic ID's{props.campaign_title}</h2>
            <h3>Description: {props.description}</h3>
            <p>Species: {props.species}</p>
            <p>Location:{props.location}</p>
            <p>Urgency Level{props.urgency}</p>
            <p>Donation goal:{props.donation_goal}</p>
            <p>Campaign ends:{props.campaign_end}</p>
            <p>Total raised:</p>
        </div>
    )
}

export default CampaignID;