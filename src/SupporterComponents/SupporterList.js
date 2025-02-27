import React, { useState, useEffect } from 'react';
import SupporterCard from '../SupporterComponents/SupporterCard';
import axios from 'axios';
import SearchForm from './SearchForm';

//This is the main page or container that holds everything
const SupporterList = () => {
    //set initial state using fake data from 'data'file
    // const [supporterData, setSupporterData] = useState([])

    // // set useEffect-- > connect to API
    // useEffect(() => {
    //     axios.get('https://saveananimal.herokuapp.com/api/campaigns')
    //         .then(response => {
    //             console.log(response.data)
    //             setSupporterData(response.data)
    //         })
    //         .catch(error => {
    //             console.log('No campaign data returned', error)
    //         })
    // }, [])

    // console.log(supporterData)
    return (
        <div>
            <h1>Current conservation campaigns</h1>
            <h3>Please donate to your favourite cause</h3>
            <SearchForm />
            {/* {supporterData.map((support, id) => {
                return <SupporterCard key={id} support={support} />;
            })} */}
        </div>
    )
}

export default SupporterList;