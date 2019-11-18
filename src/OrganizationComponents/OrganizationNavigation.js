import React from 'react';
import { Link } from 'react-router-dom';


const OrganzationNavigation = () => {
    return (
        <div>
            <Link to='/CampaignList'>Current campaigns</Link>
            <Link to='/CreateCampaign' >Create campaign</Link>
        </div>
    )
}

export default OrganzationNavigation;