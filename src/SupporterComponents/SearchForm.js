import React from 'react';
import styled from 'styled-components';

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
//props --> pass down 'onHandleChange' to onChange and 'query' functionality to value
const SearchForm = () => {
    return (
        <div>
            <form>
                <TextInput
                    type='text'
                    name='search'
                    placeholder='Search by species, location, and issue??'
                // onChange={}
                // value={}
                />
            </form>
        </div>
    )
}

export default SearchForm;