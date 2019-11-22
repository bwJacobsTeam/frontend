import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CampaignID from './CampaignID';


const CampaignWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Campaign = (props) => {
    //Setup 'useState' to set inital data and set the dynamic id
    console.log(props);
    const dataID = props.match.params.id
    const [campaign, editCampaign] = useState({ id: `${dataID}`, campaign_title: '', description: '', species: '', location: '', urgency: '', donation_goal: '', campaign_end: '' })
    const [campaignData, setCampaignData] = useState([]);
    console.log('dataID', dataID);
    //use render props to access history,match,location propertes --> specifically 'props.match.params' to capture DYNAMIC ID

    //Setup 'useEffect' for API call to get data and set the data
    //Add 'id' that's dynamic to the end of the API link using template literal `${id}`
    useEffect(() => {
        axios.get(`https://saveananimal.herokuapp.com/api/campaigns/${dataID}`)
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
                console.log(item.id);
                return (
                    <CampaignID
                        id={item.id}
                        campaign_title={item.campaign_title}
                        description={item.description}
                        species={item.species}
                        location={item.location}
                        urgency={item.urgency}
                        donation_goal={item.donation_goal}
                        campaign_end={item.campaign_end}

                        donorID={item.id}

                        editCampaign={editCampaign}

                    />)
            })}
        </CampaignWrapper >
    )
}

export default Campaign;