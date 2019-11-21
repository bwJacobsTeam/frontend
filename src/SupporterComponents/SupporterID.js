import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';

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
    console.log(props)
    const supporterID = props.supporterID
    const id = localStorage.getItem('id')
    //setup state to hold donation sum/total data --> useState
    const [donationsTotal, setDonationsTotal] = useState();
    const [postDonation, setPostDonation] = useState({
        supporter_id: id,
        campaign_id: supporterID,
        donation_amount: ''
    })
    // const donationID = props.match.params.id

    console.log(supporterID);
    //useEffect pull in the donation amount from API using DYNAMIC ID for each donation --> https://saveananimal.herokuapp.com/api/campaigns/:id/donations
    useEffect(() => {
        //get response for donations array-->
        axios.get(`https://saveananimal.herokuapp.com/api/campaigns/${supporterID}/donations`)
            .then(response => {
                console.log(response.data)
                //Use .map to just get the 'donation_amount' values
                const donationArray = response.data.map(donation => donation.donation_amount)
                console.log(donationArray)

                //use .reduce to sum all the values in 'donationArray' --> should equal (461,643)
                const totalArray = donationArray.reduce((accumulator, total) => {
                    return accumulator + total;
                }, 0)
                console.log(totalArray);

                //use number formatting to add ',' to number value --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
                const sumTotal = new Intl.NumberFormat().format(totalArray)
                console.log(sumTotal)

                setDonationsTotal(sumTotal);
            })
            .catch(error => {
                console.log('No donations data returned', error)
            })
    }, [supporterID])


    //setup onChangeHandler to watch donation amount
    const onChangeDonationHandler = (event) => {
        setPostDonation({ ...postDonation, [event.target.name]: event.target.value });
    }


    // setup an onSubmit on the 'form' to submit/post to donations api -->axios.get(`https://saveananimal.herokuapp.com/api/campaigns/${supporterID}/donations`)
    // {
    //           organization_id: 2,
    //           campaign_id: 4,
    //           donation_amount: 10.00
    //         },
    //         {
    //           supporter_id: 2,
    //           campaign_id: 4,
    //           donation_amount: 6985
    //         },

    const onSubmitDonation = (event) => {
        event.preventDefault()
        axios.post(`https://saveananimal.herokuapp.com/campaigns/${supporterID}/donations/`, postDonation)
            // console.log('this is the post', supporterID)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('No donations posted', error)
            })
    }


    const { campaign_title, description, location, donation_goal, campaign_end } = props;
    return (
        <DonationWrapper>
            <DonationContainer>
                <h2>Supports donate money here</h2>
                <h3>{campaign_title}</h3>
                <h4>{description}</h4>
                <p>Location: {location}</p>
                <p>Donation goal: ${donation_goal}</p>
                <p>Campaign ends: {campaign_end}</p>
                <p>Total raised:$ {donationsTotal}</p>
                <form onSubmit={onSubmitDonation}>
                    <label htmlFor='donation'>Donation amount:</label>
                    <TextInput
                        required
                        id='donation'
                        type='number'
                        min='0'
                        name='donation_amount'
                        placeholder='$0'
                        onChange={onChangeDonationHandler}
                    />
                    <ButtonView type='submit'>Complete donation</ButtonView>
                </form>
            </DonationContainer>
        </DonationWrapper>
    )
}

export default SupporterID;