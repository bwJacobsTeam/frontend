import React, { useState, useEffect } from 'react';
import SupporterCard from '../SupporterComponents/SupporterCard';
import SearchForm from '../SupporterComponents/SearchForm';
import { data } from '../OrganizationComponents/data';


const SupporterList = () => {
    //set initial state using fake data from 'data' file
    const [supporterData, setSupporterData] = useState(data);
    const [query, setQuery] = useState([]);

    // set useEffect-- > connect to API and for 'Search' filtering
    // useEffect(() => {
    //     const results = data.filter(item => item['organization_id'].toLowerCase().includes(query.toLowerCase()))
    //     setQuery(results);
    // }, [query])//Add 'query' to the dependency array to watch for that change/update

    //The handlechange method takes the event object as the argument and sets the current value of the form to the 'query' state using 'setQuery'
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <h1>Displays all current campaigns to supporters</h1>
            <h3>All current campaigns you can donate money</h3>
            {/* SearchForm --> Need to export 'handleChangeInput' and 'query' */}
            <SearchForm handleInputChange={handleInputChange} query={query} />
            {supporterData.map((support, index) => {
                return <SupporterCard key={index} support={support} />
            })}
        </div>
    )
}

export default SupporterList;