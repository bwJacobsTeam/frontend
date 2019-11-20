import React, { useState, useEffect } from 'react';
import SupporterCard from '../SupporterComponents/SupporterCard';
import { data } from '../OrganizationComponents/data';
import SearchForm from './SearchForm';


const SupporterList = () => {
    //set initial state using fake data from 'data' file
    const [supporterData, setSupporterData] = useState(data);
    const [query, setQuery] = useState([]);

    // set useEffect-- > connect to API and for 'Search' filtering
    // useEffect(() => {
    //     const results = data.filter(item => item['organization_id'].toLowerCase().includes(query.toLowerCase()))
    //     setQuery(results);
    // }, [query])//Add 'query' to the dependency array to watch for that change/update



    return (
        <div>
            <h1>Displays all current campaigns to supporters</h1>
            <h3>All current campaigns you can donate money</h3>
            <SearchForm />
            {supporterData.map((support, index) => {
                return <SupporterCard key={index} support={support} />
            })}
        </div>
    )
}

export default SupporterList;