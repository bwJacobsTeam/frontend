import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';
import './OrganizationComponents/Organization';
import Organization from './OrganizationComponents/Organization';
import CreateCampaign from './OrganizationComponents/CreateCampaign'
import SupporterList from './SupporterComponents/SupporterList';
import CampaignList from './OrganizationComponents/CampaignList';
import Campaign from './OrganizationComponents/Campaign';
import PrivateRoute from './components/routes/PrivateRoute';
import SupporterDonation from './SupporterComponents/SupporterDonation';
import EditCampaign from './OrganizationComponents/EditCampaign';

function App() {
  // const [campaign, editCampaign] = useState({ id: '', campaign_title: '', description: '', species: '', location: '', urgency: '', donation_goal: '', campaign_end: '' })


  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path='/Organization' component={Organization} />
        <PrivateRoute exact path='/Supporter' component={SupporterList} />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/CampaignList' component={CampaignList} />
        <Route exact path='/CreateCampaign' component={CreateCampaign} />
        <Route exact path='/EditCampaign/:id' component={EditCampaign} />
        <Route exact path='/Campaign/:id' component={Campaign} />
        <Route exact path='/Donation/:id' component={SupporterDonation} />
      </div>
    </Router>
  );
}
// render={() => <EditCampaign campaign={campaign} />}
const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {})(App);
