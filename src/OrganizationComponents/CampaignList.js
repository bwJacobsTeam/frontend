import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';
import { data } from './data';



const CampaignList = () => {
    //set initial state using fake data from 'data'file
    const [campaignData, setCampaignData] = useState(data)

    //set useEffect --> connect to API
    // useEffect(() => {
    //     axios.get('https://my.api.mockaroo.com/organizationdata.json?key=08f87dd0')
    //         .then(response => {
    //             const dataSet = Object.values(response)
    //             console.log(response)
    //             setCampaignData(dataSet)
    //         })
    //         .catch(error => {
    //             console.log('No campaign data returned', error)
    //         })
    // }, [])


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