import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CampaignID from './CampaignID';


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


const Campaign = (props) => {
    //Setup 'useState' to set inital data and set the dynamic id
    const [campaignData, setCampaignData] = useState([]);
    const dataID = props.match.params.id
    //use render props to access history,match,location propertes --> specifically 'props.match.params' to capture DYNAMIC ID

    //Setup 'useEffect' for API call to get data and set the data
    //Add 'id' that's dynamic to the end of the API link using template literal `${id}`
    useEffect(() => {
        axios.get(`https://saveananimal.herokuapp.com/api/users/campaigns/${dataID}`)
            .then(response => {
                console.log(response.data)
                setCampaignData(response.data)
            })
            .catch(error => {
                console.log('No campaign data returned', error)
            })
    }, [dataID])
    console.log(campaignData)



    return (
        <CampaignWrapper>
            {campaignData.map(item => {
                return (
                    <CampaignID
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
            {/* <CampaignContainer>
                <h2>Individual campaign --> use dynamic ID's{campaignData.campaign_title}</h2>
                <h3>Description: {campaignData.description}</h3>
                <p>Species: {campaignData.species}</p>
                <p>Location:{campaignData.location}</p>
                <p>Urgency Level{campaignData.urgency}</p>
                <p>Donation goal:{campaignData.donation_goal}</p>
                <p>Campaign ends:{campaignData.campaign_end}</p>
                <p>Total raised:</p>
                <h2>Individual campaign --> use dynamic ID's</h2>
                <h3>Description:</h3>
                <p>Species:</p>
                <p>Location:</p>
                <p>Urgency Level</p>
                <p>Donation goal:</p>
                <p>Campaign ends:</p>
                <p>Total raised:</p>
                <ButtonWrapper>
                    <Button>Edit</Button>
                    <ButtonDelete>Delete</ButtonDelete>
                </ButtonWrapper>
            </CampaignContainer> */}
        </CampaignWrapper >
    )
}

export default Campaign;