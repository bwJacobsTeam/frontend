import React from 'react';
import styled from 'styled-components';

const ButtonEdit = styled.button`
    width: 15%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #4caf50;
    color: #FFF;  
`
const ButtonDelete = styled.button`
    width: 15%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #f44336;
    color: #FFF; 
`
const ButtonBack = styled.button`
    width: 15%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    border: 2px solid lightgray;
    font-size: 1rem;
    font-weight: bold;
    color: lightgray;  
`



const Campaign = () => {

    // const { campaign_title, description, location, donation_goal } = props.campaign;
    return (
        <div>
            <ButtonBack>Back</ButtonBack>
            <h1>Individual campaign details --> use dynamic ID's</h1>
            <h3>Description:</h3>
            <p>Species</p>
            <p>Location:</p>
            <p>Urgency Level</p>
            <p>Donation goal:</p>
            <p>Campaign ends:</p>
            <p>Total raised:</p>
            <ButtonEdit>Edit</ButtonEdit>
            <ButtonDelete>Delete</ButtonDelete>
        </div>
    )
}

export default Campaign;