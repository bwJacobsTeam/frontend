import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CampaignWrapper = styled.div`
    width: 50%;
    margin: 2% 0;
    display: flex;
    justify-content: center;
    margin: auto;
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
    background: #2196f3;
    color: #FFF;  
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: #000;
`

const SupporterCard = (props) => {

    const { id, campaign_title, description, species, location, urgency, donation_goal, campaign_end } = props.support;
    return (
        <LinkStyle to={`/Donation/${props.support.id}`} >
            < CampaignWrapper >
                <CampaignContainer key={id}>
                    <h3>{campaign_title}</h3>
                    <h4>{description}</h4>
                    <p>{species}</p>
                    <p>Location:  {location}</p>
                    <p>Urgency level: {urgency}</p>
                    <p>Donation goal:  {donation_goal}</p>
                    <p>Campaign ends: {campaign_end}</p>
                </CampaignContainer>
            </ CampaignWrapper >
        </LinkStyle >
    )
}

export default SupporterCard;