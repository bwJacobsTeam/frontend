import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SupporterDonation from '../SupporterComponents/SupporterDonation';

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
            < div >
                <h2>Supporter Cards list</h2>
                <h2>Campaign id: {organization_id}</h2>
                <h3>Supporter{campaign_title}</h3>
                <h4>Supporter {description}</h4>
                <p>Supporter Location:  {location}</p>
                <p>Supporter Donation goal:  {donation_goal}</p>
                <ButtonView>View campaign</ButtonView>
            </div >
        </LinkStyle >
    )
}

export default SupporterCard;