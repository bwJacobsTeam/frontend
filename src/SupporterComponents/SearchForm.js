import React from 'react';
import styled from 'styled-components';
import { tsPropertySignature } from '@babel/types';

const TextInput = styled.input`
    /* border: 1px solid red; */
    margin: 0 3%;
    height: 40px;
    width: 25%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;

`

//Build 'SearchForm' seperate from SupporterList
//props --> pass down 'handleInputChange' to onChange and 'query' functionality to value
const SearchForm = (props) => {
    return (
        <div>
            <form>
                <TextInput
                    type='text'
                    name='search'
                    placeholder='Search by species, location, and issue??'
                    onChange={props.handleInputChange}
                    value={props.query}
                />
            </form>
        </div>
    )
}

export default SearchForm;