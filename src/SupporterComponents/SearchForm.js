import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SupporterCard from '../SupporterComponents/SupporterCard';

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
const SearchForm = () => {
    const [supporterData, setSupporterData] = useState([])
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get('https://saveananimal.herokuapp.com/api/campaigns')
            .then(response => {
                console.log(response.data)
                const donationData = response.data;
                console.log(donationData)

                const result = donationData.filter(data => {
                    return (
                        data.location.toLowerCase().includes(query.toLowerCase()) ||
                        data.species.toLowerCase().includes(query.toLowerCase()) ||
                        data.urgency.toLowerCase().includes(query.toLowerCase())
                    )
                })
                console.log(result)
                setSupporterData(result);
            })
            .catch(error => {
                console.log('No search filter data returned', error)
            })
    }, [query])


    //The handlechange method takes the event object as the argument and sets the current value of the form to the 'query' state using 'setQuery'
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    return (
        <div>
            <form>
                <TextInput
                    type='text'
                    name='search'
                    placeholder='Search by species, location, and issue??'
                    onChange={handleInputChange}
                    value={query}
                />
            </form>
            {supporterData.map((support, id) => {
                return <SupporterCard key={id} support={support} />;
            })}
        </div>
    )
}

export default SearchForm;