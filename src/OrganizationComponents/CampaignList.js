import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';
import { data } from './data';


const CampaignList = () => {
    //set initial state using fake data from 'data'file
    const [campaigns, setCampaigns] = useState(data)

    //set useEffect


    return (
        <div>
            <h1>Current Campaign --> Displays list of all current campaigns</h1>
            <h3>All current and new campaigns</h3>
            {campaigns.map((campaign, index) => {
                return <CampaignCard key={index} campaign={campaign} />;
            })}
        </div>
    )
}

export default CampaignList;