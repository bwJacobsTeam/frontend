import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CampaignID from './CampaignID';


const CampaignWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
`

const Campaign = (props) => {
    //Setup 'useState' to set inital data and set the dynamic id
    const [campaignData, setCampaignData] = useState([]);
    const dataID = props.match.params.id
    //use render props to access history,match,location propertes --> specifically 'props.match.params' to capture DYNAMIC ID

    //Setup 'useEffect' for API call to get data and set the data
    //Add 'id' that's dynamic to the end of the API link using template literal `${id}`
    useEffect(() => {
        axios.get(`https://saveananimal.herokuapp.com/api/users/campaigns/${dataID}`)
            .then(response => {
                console.log(response.data)
                setCampaignData(response.data)
            })
            .catch(error => {
                console.log('No campaign data returned', error)
            })
    }, [dataID])
    console.log(campaignData)

    return (
        <CampaignWrapper>
            {campaignData.map(item => {
                return (
                    <CampaignID
                        key={item.id}
                        campaign_title={item.campaign_title}
                        description={item.description}
                        species={item.species}
                        location={item.location}
                        urgency={item.urgency}
                        donation_goal={item.donation_goal}
                        campaign_end={item.campaign_end}
                    />)
            })}
        </CampaignWrapper >
    )
}

export default Campaign;