import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SupporterDonation from '../SupporterComponents/SupporterDonation';

const CampaignWrapper = styled.div`
    border: 2px solid red;
    width: 50%;
    margin: 2% 0;
    display: flex;
    justify-content: center;
`
const CampaignContainer = styled.div`
    border: 2px solid lightgray;
    border-radius: 5px;
    width: 80%;
    margin: 7% 0;
    padding: 2% 0;
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`


const ButtonView = styled.button`
    width: 30%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: dodgerblue;
    color: #FFF;  
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: #000;
`

// {
//     campaign_title: 'Save the Florida Bonneted Bat',
//     description: 'saving the endangered bonneted bat',
//     species: 'bat',
//     location: 'Southern Florida',
//     urgency: 'medium',
//     donation_goal: 10000,
//     organization_id: 1,
// },

const SupporterCard = (props) => {

    const { organization_id, campaign_title, description, location, donation_goal } = props.support;
    return (
        <LinkStyle to={'/Donation'} >
            < CampaignWrapper >
                <CampaignContainer>
                    <h2>Supporter Cards list</h2>
                    <h2>Campaign id: {organization_id}</h2>
                    <h3>Supporter{campaign_title}</h3>
                    <h4>Supporter {description}</h4>
                    <p>Supporter Location:  {location}</p>
                    <p>Supporter Donation goal:  {donation_goal}</p>
                    <ButtonView>View campaign</ButtonView>
                </CampaignContainer>
            </ CampaignWrapper >
        </LinkStyle >
    )
}

export default SupporterCard;