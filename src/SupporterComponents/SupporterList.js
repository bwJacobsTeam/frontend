import React, { useState, useEffect } from 'react';
import SupporterCard from '../SupporterComponents/SupporterCard';
import SearchForm from '../SupporterComponents/SearchForm';
import { data } from '../OrganizationComponents/data';


const SupporterList = () => {
    //set initial state using fake data from 'data' file
    const [supporterData, setSupporterData] = useState(data);

    //set useEffect --> connect to API

    return (
        <div>
            <h1>Displays all current campaigns to supporters</h1>
            <h3>All current campaigns you can donate money</h3>
            {/* SearchForm --> Need to export 'handleChangeInput' and 'query' */}
            <SearchForm />
            {supporterData.map((support, index) => {
                return <SupporterCard key={index} support={support} />
            })}
        </div>
    )
}

export default SupporterList;