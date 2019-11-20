import React from 'react';
import styled from 'styled-components';

const DonationWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
    width:100%;
`

const DonationContainer = styled.div`
    border: 2px solid lightgray;
    border-radius: 5px;
    width: 30%;
    margin: 7% 0;
    padding: 2% 10%;
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const ButtonView = styled.button`
    width: 80%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #36AB80;
    color: #FFF;  
`

const TextInput = styled.input`
    /* border: 1px solid red; */
    margin: 0 3%;
    height: 40px;
    width: 35%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
    margin-bottom: 3%;
`

const SupporterID = (props) => {
    const { campaign_title, description, location, donation_goal, campaign_end } = props;
    return (
        <DonationWrapper>
            <DonationContainer>
                <h2>Supports donate money here</h2>
                <h3>{campaign_title}</h3>
                <h4>{description}</h4>
                <p>Location: {location}</p>
                <p>Donation goal: {donation_goal}</p>
                <p>Campaign ends: {campaign_end}</p>
                <p>Total raised:</p>
                <form>
                    <label htmlFor='donation'>Donation amount:</label>
                    <TextInput
                        id='donation'
                        type='text'
                        name='donation'
                        placeholder='$0.00'
                    />
                </form>
                <ButtonView>Complete donation</ButtonView>
            </DonationContainer>
        </DonationWrapper>
    )
}

export default SupporterID;