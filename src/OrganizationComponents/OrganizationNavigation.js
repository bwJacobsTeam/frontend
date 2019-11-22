import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2% 0;
    background: #F2F3F0;
`

const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
`

const OrganzationNavigation = () => {
    return (
        <NavigationWrapper>
            <NavLinkStyle to='/Organization'>Home</NavLinkStyle>
            <NavLinkStyle to='/CampaignList'>Current campaigns</NavLinkStyle>
            <NavLinkStyle to='/CreateCampaign' >Create campaign</NavLinkStyle>
        </NavigationWrapper>
    )
}

export default OrganzationNavigation;