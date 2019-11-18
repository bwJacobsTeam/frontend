import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './OrganizationComponents/Organization';
import Organization from './OrganizationComponents/Organization';
import CreateCampaign from './OrganizationComponents/CreateCampaign'
import SupporterList from './SupporterComponents/SupporterList';
import CampaignList from './OrganizationComponents/CampaignList';
import OrganzationNavigation from './OrganizationComponents/OrganizationNavigation';

function App() {
  return (
    <div className="App">
      {/* Organization holds all the organzation components */}
      {/* SupporterList hold all supporter components */}
      {/* <Organization />
      <SupporterList /> */}
      <OrganzationNavigation />
      <Route exact path='/Organization' component={Organization} />
      <Route exact path='/CampaignList' component={CampaignList} />
      <Route exact path='/CreateCampaign' component={CreateCampaign} />
      <Route exact path='/Supporter' component={SupporterList} />
    </div>
  );
}

export default App;
