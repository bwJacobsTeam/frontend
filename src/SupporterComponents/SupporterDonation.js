import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SupporterID from './SupporterID';

const DonationWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
`

const SupporterDonation = (props) => {
    //Setup 'useState' to set inital data and set the dynamic id
    const [donationData, setDonationData] = useState([])
    const donationID = props.match.params.id  // 'props.match.params' to capture DYNAMIC ID from component??


    //Setup 'useEffect' for API call to get data and set the data
    //Add 'id' that's dynamic to the end of the API link using template literal `${id}`
    useEffect(() => {
        axios.get(`https://saveananimal.herokuapp.com/api/campaigns/${donationID}`)
            .then(response => {
                console.log(response.data)
                setDonationData(response.data)
            })
            .catch(error => {
                console.log('No donation data returned', error)
            })
    }, [donationID]);
    console.log(donationData)
    console.log(donationID)


    return (
        <DonationWrapper>
            {donationData.map(item => {
                return (
                    <SupporterID
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
        </DonationWrapper>
    )
}

export default SupporterDonation;