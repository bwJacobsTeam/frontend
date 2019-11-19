import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Campaign from './Campaign';


const ButtonView = styled.button`
    width: 15%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: dodgerblue;
    color: #FFF;  
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

const CampaignCard = (props) => {

    const { campaign_title, description, location, donation_goal } = props.campaign;
    return (
        <Link to={'/Campaign'} >
            < div >
                <h3>{campaign_title}</h3>
                <h4>{description}</h4>
                <p>Location:  {location}</p>
                <p>Donation goal:  {donation_goal}</p>
                <ButtonView>View campaign</ButtonView>
            </div >
        </Link >
    )
}

export default CampaignCard;