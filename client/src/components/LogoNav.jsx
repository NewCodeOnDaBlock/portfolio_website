import React from 'react';
import './MainBody.css';
import './MediaQueries.css';
import logo from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/RM.png'



const LogoNav = (props) => {
    return (
        <div id="logoNav-container">
            <img src={(logo)} alt="" id="rm-logo"/>

        </div>
    )
}
export default LogoNav;