import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    border: 2px solid red;
    display: flex;
`

const CreateCampaign = () => {
    return (
        <div>
            <h1>Create a new campaign</h1>
            <h3>Name your campaign and funding target</h3>
            <FormWrapper>
                <label htmlFor='campaign'>Campaign title</label>
                <input
                    id='campaign'
                    type='text'
                    name='campaign'
                    placeholder='Campaign title'
                />
                <label htmlFor='description'>Description</label>
                <input
                    id='description'
                    type='text'
                    name='description'
                    placeholder='Description'
                />
                <label htmlFor='location'>Location</label>
                <input
                    id='location'
                    type='text'
                    name='location'
                    placeholder='Location'
                />
                <label>Severity level</label>
                <select>
                    <option value='urgent'>Urgent</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
                <label htmlFor='donation' >Donation goal</label>
                <input
                    id='donation'
                    type='number'
                    name='donation'
                    placeholder='Donation goal'
                />
                <label htmlFor='calendar'>Campaign ends</label>
                <input
                    id='calendar'
                    type='text'
                    name='calendar'
                    placeholder='Calendar selector'
                />
                <button type='submit'>Save campaign</button>
            </FormWrapper>
        </div>
    )
}

export default CreateCampaign;