import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import UserRouter from './components/UserRouter';
import RegisterOrg from './components/RegisterOrg';
import RegisterSupporter from './components/RegisterSupporter';

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
        <Route path='/user-router' component={UserRouter} />
        <Route path='/register-org' component={RegisterOrg} />
        <Route path='/register-supp' component={RegisterSupporter} />
        <Route exact path='/Organization' component={Organization} />
        <Route exact path='/CampaignList' component={CampaignList} />
        <Route exact path='/CreateCampaign' component={CreateCampaign} />
        <Route exact path='/Supporter' component={SupporterList} />
      </div>
    </Router>

  );
}

export default App;
