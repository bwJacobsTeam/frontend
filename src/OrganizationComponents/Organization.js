import React from 'react';
import { Route } from 'react-router-dom';
import CampaignList from './CampaignList';
import CreateCampaign from './CreateCampaign';
// import OrganzationNavigation from './OrganizationNavigation'

const Organization = () => {
    return (
        <div>
            {/* <OrganzationNavigation /> */}
            <Route exact path='/CampaignList' component={CampaignList} />
            <Route exact path='/CreateCampaign' component={CreateCampaign} />
            <h1>Current campaigns</h1>
            <h3>Create campaigns to help raise funding</h3>
        </div>
    )
}

export default Organization;