import React from 'react';
import { Route } from 'react-router-dom';
import CampaignList from './CampaignList';
import CreateCampaign from './CreateCampaign';
import OrganzationNavigation from './OrganizationNavigation'

const Organization = () => {
    return (
        <div>
            <OrganzationNavigation />
            <Route exact path='/CampaignList' component={CampaignList} />
            <Route exact path='/CreateCampaign' component={CreateCampaign} />
            <h1>Current campaigns</h1>
            <h3>Create campaigns to help raise funding</h3>
            <img src='https://images.unsplash.com/photo-1553112761-4f7500432c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='dolphins swimming' />
        </div>
    );
}

export default Organization;