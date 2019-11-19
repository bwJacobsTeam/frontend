import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';
// import { data } from './data';
import axios from 'axios';



const CampaignList = () => {
    //set initial state using fake data from 'data'file
    const [campaignData, setCampaignData] = useState([])

    // set useEffect-- > connect to API
    useEffect(() => {
        axios.get('https://saveananimal.herokuapp.com/api/users/campaigns')
            .then(response => {
                console.log(response.data)
                setCampaignData(response.data)
            })
            .catch(error => {
                console.log('No campaign data returned', error)
            })
    }, [])


    return (
        <div>
            <h1>Current Campaign --> Displays list of all current campaigns</h1>
            <h3>All current and campaigns</h3>
            {campaignData.map((campaign, index) => {
                return <CampaignCard key={index} campaign={campaign} />;
            })}
        </div>
    )
}

export default CampaignList;