import React from 'react';
import styled from 'styled-components';
import CampaignCard from './CampaignCard';

const CampaignWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
`
const CampaignContainer = styled.div`
    border: 2px solid lightgray;
    border-radius: 5px;
    width: 40%;
    margin: 7% 0;
    padding: 2% 0;
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const Button = styled.button`
    width: 40%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #4caf50;
    color: #FFF;  
    margin: 0 3%;
`
const ButtonDelete = styled(Button)`
    background: #f44336;
    color: #FFF; 
`

const ButtonWrapper = styled.div`
    /* display: flex;
    justify-content: center; */
    width: 80%;
`


const Campaign = () => {

    // const { campaign_title, description, location, donation_goal } = props.campaign;
    return (
        <CampaignWrapper>
            <CampaignContainer>
                <h2>Individual campaign --> use dynamic ID's</h2>
                <h3>Description:</h3>
                <p>Species</p>
                <p>Location:</p>
                <p>Urgency Level</p>
                <p>Donation goal:</p>
                <p>Campaign ends:</p>
                <p>Total raised:</p>
                <ButtonWrapper>
                    <Button>Edit</Button>
                    <ButtonDelete>Delete</ButtonDelete>
                </ButtonWrapper>
            </CampaignContainer>
        </CampaignWrapper>
    )
}

export default Campaign;