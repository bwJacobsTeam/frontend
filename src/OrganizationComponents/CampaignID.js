import React from 'react';
import styled from 'styled-components';

const CampaignWrapper = styled.div`
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    margin-top: 3%;
`

const CampaignContainer = styled.div`
    border: 2px solid lightgray;
    border-radius: 5px;
    /* width: 100%; */
    margin: 7% 0;
    padding: 2% 4%;
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

const CampaignID = (props) => {

    const { campaign_title, description, species, location, urgency, donation_goal, campaign_end } = props;
    return (
        <CampaignWrapper key={props.id}>
            <CampaignContainer>
                <h2>{campaign_title}</h2>
                <h3>Description: {description}</h3>
                <p>Species: {species}</p>
                <p>Location:{location}</p>
                <p>Urgency Level{urgency}</p>
                <p>Donation goal:{donation_goal}</p>
                <p>Campaign ends:{campaign_end}</p>
                <p>Total raised: </p>
                <ButtonWrapper>
                    <Button>Edit</Button>
                    <ButtonDelete>Delete</ButtonDelete>
                </ButtonWrapper>
            </CampaignContainer>
        </CampaignWrapper>
    )
}

export default CampaignID;