import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterOrg from './components/RegisterOrg';

import './App.css';
import './OrganizationComponents/Organization';
import Organization from './OrganizationComponents/Organization';
import CreateCampaign from './OrganizationComponents/CreateCampaign'
import SupporterList from './SupporterComponents/SupporterList';
import CampaignList from './OrganizationComponents/CampaignList';
import OrganzationNavigation from './OrganizationComponents/OrganizationNavigation';

function App() {
  return (
    <Router>
      <div className="App">
        <OrganzationNavigation />
        <Route exact path='/' component={Login} />
        <Route path='/register-form' component={RegisterOrg} />
        <Route exact path='/Organization' component={Organization} />
        <Route exact path='/CampaignList' component={CampaignList} />
        <Route exact path='/CreateCampaign' component={CreateCampaign} />
        <Route exact path='/Supporter' component={SupporterList} />
      </div>
    </Router>

  );
}

export default App;
