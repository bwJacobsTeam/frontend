import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';
import './OrganizationComponents/Organization';
import Organization from './OrganizationComponents/Organization';
import CreateCampaign from './OrganizationComponents/CreateCampaign'
import SupporterList from './SupporterComponents/SupporterList';
import CampaignList from './OrganizationComponents/CampaignList';
import Campaign from './OrganizationComponents/Campaign';
import OrganzationNavigation from './OrganizationComponents/OrganizationNavigation';
import PrivateRoute from './components/routes/PrivateRoute';
import SupporterDonation from './SupporterComponents/SupporterDonation';

function App() {
  return (
    <Router>
      <div className="App">
        <OrganzationNavigation />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
      </div>
      <div>
        <Switch>
          <PrivateRoute exact path='/Organization' component={Organization} />
          <Route path='/CampaignList' component={CampaignList} />
          <Route path='/CreateCampaign' component={CreateCampaign} />
          <Route path='/Supporter' component={SupporterList} />
          <Route path='/Campaign' component={Campaign} />
          <Route path='/Donation' component={SupporterDonation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
