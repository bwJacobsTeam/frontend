import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createCampaign } from '../components/store/actions/index';

const FormWrapper = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 3% 0;
    margin: auto;
`

const FormContainer = styled.div`
    /* border: 2px solid blue; */
    margin: 2% 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`
const TextInput = styled.input`
    /* border: 1px solid red; */
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`
const SelectInput = styled.select`
    /* border: 1px solid red; */
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border: 2px solid lightgrey;
    font-size: 1rem;
    color: grey;
`
const Label = styled.label`
    /* border: 1px solid green; */
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
    const [campaign, setCampaign] = useState({ campaign_title: '', description: '', species: '', location: '', donation_goal: '', campaign_end: '' });

    const changeHandler = e => {
        setCampaign({ ...campaign, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log('currentCampaign', props.currentCampaign);
        setCampaign({ ...props.currentCampaign })
    }, [props.currentCampaign])

    const submitForm = e => {
        e.preventDefault();
        const newCampaign = {
            ...campaign,
            id: props.user.id
        };
        props.createCampaign(newCampaign);
        setCampaign({ campaign_title: '', description: '', species: '', location: '', donation_goal: '', campaign_end: '' })
    };

    return (
        <div>
            <h1>Create a new campaign</h1>
            <h3>Name your campaign and funding target</h3>
            <FormWrapper>
                <form onSubmit={submitForm}>
                    <FormContainer>
                        <Label htmlFor='campaign'>Campaign title</Label>
                        <TextInput
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
                            type='text'
                            name='location'
                            placeholder='Location'
                            value={campaign.location}
                            onChange={changeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <Label>Severity level</Label>
                        <SelectInput>
                            <option value='urgent'>Urgent</option>
                            <option value='medium'>Medium</option>
                            <option value='low'>Low</option>
                        </SelectInput>
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='donation'>Donation goal</Label>
                        <TextInput
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