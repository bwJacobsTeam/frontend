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
            <h1>Organization home</h1>
        </div>
    )
}

export default Organization;