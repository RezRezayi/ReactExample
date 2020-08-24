import React from 'react';

import {NavLink} from 'react-router-dom';

const TopNav = () => {
    return (  

        <nav>
        <div className="row">
            <div className="col-sm-6 col-xs-12">
                <ul>
                    <li>
                        <NavLink to="/" exact activeStyle={{color : "Lime"}}>  صفحه اصلی </NavLink>
                        <NavLink to=""> درباره ما </NavLink>
                        <NavLink to=""> تماس با ما </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-xs-12">
                <div className="clientarea">
                    <div className="loggein  hidden">
                         <i className="zmdi zmdi-account"></i><NavLink to=""> ایمان مدائنی ، خوش آمدی </NavLink>
                    </div>
                    <div className="signin">
                        <i className="zmdi zmdi-account"></i>
                        <NavLink to="/login" activeStyle={{color : "Lime"}}> ورود </NavLink> /
                        <NavLink to="/register"  activeStyle={{color : "Lime"}}> عضویت </NavLink>
                    </div>
                </div>  
            </div>
        </div>
    </nav>


    );
}
 
export default TopNav;