import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';
import axios from 'axios';



const CampaignList = (props) => {
    //set initial state using fake data from 'data'file
    const [campaignData, setCampaignData] = useState([])
    const campId = localStorage.getItem('id');
    console.log(campId, props);

    // set useEffect-- > connect to API
    useEffect(() => {
        axios.get(`https://saveananimal.herokuapp.com/api/users/${campId}/campaigns`)
            .then(response => {

                console.log(response.data)
                setCampaignData(response.data);
            })
            .catch(error => {
                console.log('No campaign data returned', error)
            })
    }, [])

    console.log(campaignData)
    return (
        <div>
            <h1>Current campaigns created by your organization</h1>
            <h3>Campaigns searching for donations</h3>
            {campaignData.map((campaign, id) => {
                return <CampaignCard key={id} campaign={campaign} />;
            })}
        </div>
    )
}

export default CampaignList;