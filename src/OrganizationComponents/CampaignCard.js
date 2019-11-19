import React from 'react';

// {
//     campaign_title: 'Save the Florida Bonneted Bat',
//     description: 'saving the endangered bonneted bat',
//     species: 'bat',
//     location: 'Southern Florida',
//     urgency: 'medium',
//     donation_goal: 10000,
//     organization_id: 1,
// },

const CampaignCard = (props) => {

    const { organization_id, campaign_title, description, location, urgency, donation_goal } = props.campaign;
    return (
        <div>
            <p>{organization_id}</p>
            <p>{campaign_title}</p>
            <p>{description}</p>
            <p>{location}</p>
            <p>{urgency}</p>
            <p>{donation_goal}</p>
        </div>
    )
}

export default CampaignCard;