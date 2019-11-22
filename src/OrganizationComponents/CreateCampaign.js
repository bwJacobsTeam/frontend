import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createCampaign } from '../components/store/actions/index';
import * as yup from 'yup';

const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 3% 0;
    margin: auto;
`

const FormContainer = styled.div`
    margin: 2% 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`
const TextInput = styled.input`
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`
const SelectInput = styled.select`
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border: 2px solid lightgrey;
    font-size: 1rem;
    color: grey;
`
const Label = styled.label`
    width: 27%;
    display: flex;
`

const CreateButton = styled.button`
    width: 80%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #2196f3;
    color: #FFF;
`

//IMPORTANT --> still need to add 'value' properties for each (leaving off for now)
const CreateCampaign = props => {
    const [campaign, setCampaign] = useState({ campaign_title: '', description: '', species: '', location: '', urgency: '', donation_goal: '', campaign_end: '' });

    const idVar = localStorage.getItem('id');

    console.log(props);
    const changeHandler = e => {
        setCampaign({ ...campaign, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log('currentCampaign', props.currentCampaign);
        setCampaign({ ...props.currentCampaign })
    }, [props.currentCampaign])

    //can apply form validation inside 'submitForm'
    const submitForm = e => {
        e.preventDefault();
        //add the validation schema to check if campaign or state 'valid'
        createCampaignSchema.isValid(campaign)
            .then(valid => {
                if (valid) {
                    const newCampaign = {
                        ...campaign,
                        user_id: idVar
                    };
                    props.createCampaign(newCampaign);
                    setCampaign({ user_id: idVar, campaign_title: '', description: '', species: '', location: '', urgency: '', donation_goal: '', campaign_end: '' })
                } else {
                    alert('Please fill out all fields')
                }
            })


    };
    //Eric's current working code just commented out to try to get validation working
    // const submitForm = e => {
    //     e.preventDefault();
    //     const newCampaign = {
    //         ...campaign,
    //         user_id: idVar
    //     };
    //     props.createCampaign(newCampaign);
    //     setCampaign({ user_id: idVar, campaign_title: '', description: '', species: '', location: '', urgency: '', donation_goal: '', campaign_end: '' })
    // };

    //YUP --> https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e
    //1. Build validation schema
    const createCampaignSchema = yup.object().shape({
        campaign_title: yup
            .string()
            .required('Please name your campaign title- max 40 characters')
            .max(40),
        description: yup
            .string()
            .required('Describe your campaign and why you need donations')
            .max(280),
        species: yup
            .string()
            .required('What type of animal are you rasing donations for?'),
        location: yup
            .string()
            .required('What city or country is your campaign located?'),
        urgency: yup
            .string()
            .required('Enter an urgency level for your donation'),
        donation_goal: yup
            .number()
            .required('How much money do you want to raise?')
            .positive()
            .integer()
            .min(0),
        campaign_end: yup
            .date()
            .required('When will your campaign end?')
        // .default(() => (new Date())
        // )
    })

    //.2 Validate objects with createCampaignSchema
    createCampaignSchema.validate(campaign)
        .catch((error) => {
            console.log('Yup errors not working', error)
            // alert(error.message);
        })


    return (
        <div>
            <h1>Create a new campaign</h1>
            <h3>Name your campaign and funding target</h3>
            <FormWrapper>
                <form onSubmit={submitForm}>
                    <FormContainer>
                        <Label htmlFor='campaign'>Campaign title</Label>
                        <TextInput
                            required
                            type='text'
                            name='campaign_title'
                            placeholder='Campaign title'
                            value={campaign.campaign_title}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='description'>Description</Label>
                        <TextInput
                            required
                            type='textarea'
                            name='description'
                            placeholder='Description'
                            value={campaign.description}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='species'>Species</Label>
                        <TextInput
                            required
                            type='text'
                            name='species'
                            placeholder='Species'
                            value={campaign.species}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='location'>Location</Label>
                        <TextInput
                            required
                            type='text'
                            name='location'
                            placeholder='Location'
                            value={campaign.location}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='urgency'>Severity level</Label>
                        <TextInput
                            required
                            type='text'
                            name='urgency'
                            placeholder='Urgent, Medium, or Low'
                            value={campaign.urgency}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='donation'>Donation goal</Label>
                        <TextInput
                            required
                            type='number'
                            name='donation_goal'
                            placeholder='Donation goal'
                            value={campaign.donation_goal}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='calendar'>Campaign ends</Label>
                        <TextInput
                            required
                            type='date'
                            name='campaign_end'
                            placeholder='Calendar selector'
                            value={campaign.campaign_end}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <CreateButton type='submit'>Save campaign</CreateButton>
                    </FormContainer>
                </form>
            </FormWrapper>
        </div >
    );
};

const mapStateToProps = state => {
    console.log('form state', state);
    return {
        user: state.currentUser,
        currentCampaign: state.currentCampaign
    }
}

export default connect(
    mapStateToProps,
    { createCampaign }
)(CreateCampaign);