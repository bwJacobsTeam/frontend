import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CampaignWrapper = styled.div`
    border: 2px solid red;
    width: 50%;
    margin: 2% 0;
    display: flex;
    justify-content: center;
`
// const CampaignDisplay = styled.div`
//     border: solid 2px blue;
//     width: 100%;
//     display: flex;
//     justify-content: center;
// `

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

const CampaignCard = (props) => {

    const { id, campaign_title, description, species, location, donation_goal } = props.campaign;
    return (
        // <LinkStyle to='/Campaign/' >
        <LinkStyle to={`/Campaign/${props.campaign.id}`} >
            < CampaignWrapper >
                <CampaignContainer key={id}>
                    <h3>{campaign_title}</h3>
                    <h4>{description}</h4>
                    <p>Species:  {species}</p>
                    <p>Location:  {location}</p>
                    <p>Donation goal:  {donation_goal}</p>
                    <ButtonView>View campaign</ButtonView>
                </CampaignContainer>
            </ CampaignWrapper >
        </LinkStyle >
    )
}

export default CampaignCard;