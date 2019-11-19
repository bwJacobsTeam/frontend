import React from 'react';
import styled from 'styled-components';

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
    margin: 5% 0;
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
    background: dodgerblue;
    color: #FFF;
`

const CreateCampaign = () => {
    return (
        <div>
            <h1>Create a new campaign</h1>
            <h3>Name your campaign and funding target</h3>
            <FormWrapper>
                <FormContainer>
                    <Label htmlFor='campaign'>Campaign title</Label>
                    <TextInput
                        id='campaign'
                        type='text'
                        name='campaign'
                        placeholder='Campaign title'
                    />
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='description'>Description</Label>
                    <TextInput
                        id='description'
                        type='text'
                        name='description'
                        placeholder='Description'
                    />
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='location'>Location</Label>
                    <TextInput
                        id='location'
                        type='text'
                        name='location'
                        placeholder='Location'
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
                        id='donation'
                        type='number'
                        name='donation'
                        placeholder='Donation goal'
                    />
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='calendar'>Campaign ends</Label>
                    <TextInput
                        id='calendar'
                        type='date'
                        name='calendar'
                        placeholder='Calendar selector'
                    />
                </FormContainer>
                <FormContainer>
                    <CreateButton type='submit'>Save campaign</CreateButton>
                </FormContainer>
            </FormWrapper>
        </div >
    )
}

export default CreateCampaign;