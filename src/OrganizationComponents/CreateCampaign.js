import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    padding: 3% 0;
    margin: auto;
`

const FormContainer = styled.div`
    border: 2px solid blue;
    margin: 5% 0;
    padding: 0 10%;
`
const TextInput = styled.input`
    border: 1px solid red;
`
const SelectInput = styled.select`
    border: 1px solid red;
`

const CreateCampaign = () => {
    return (
        <div>
            <h1>Create a new campaign</h1>
            <h3>Name your campaign and funding target</h3>
            <FormWrapper>
                <FormContainer>
                    <label htmlFor='campaign'>Campaign title</label>
                    <TextInput
                        id='campaign'
                        type='text'
                        name='campaign'
                        placeholder='Campaign title'
                    />
                </FormContainer>
                <FormContainer>
                    <label htmlFor='description'>Description</label>
                    <TextInput
                        id='description'
                        type='text'
                        name='description'
                        placeholder='Description'
                    />
                </FormContainer>
                <FormContainer>
                    <label htmlFor='location'>Location</label>
                    <TextInput
                        id='location'
                        type='text'
                        name='location'
                        placeholder='Location'
                    />
                </FormContainer>
                <FormContainer>
                    <label>Severity level</label>
                    <SelectInput>
                        <option value='urgent'>Urgent</option>
                        <option value='medium'>Medium</option>
                        <option value='low'>Low</option>
                    </SelectInput>
                </FormContainer>
                <FormContainer>
                    <label htmlFor='donation'>Donation goal</label>
                    <TextInput
                        id='donation'
                        type='number'
                        name='donation'
                        placeholder='Donation goal'
                    />
                </FormContainer>
                <FormContainer>
                    <label htmlFor='calendar'>Campaign ends</label>
                    <TextInput
                        id='calendar'
                        type='text'
                        name='calendar'
                        placeholder='Calendar selector'
                    />
                </FormContainer>
                <FormContainer>
                    <button type='submit'>Save campaign</button>
                </FormContainer>
            </FormWrapper>
        </div >
    )
}

export default CreateCampaign;