import React from 'react';

import {withRouter} from 'react-router-dom';

import Footer from '../common/Footer';
import MainNav from '../navs/MainNav';
import Header from '../common/Header';
import TopNav from '../navs/TopNav';
import {Helmet} from 'react-helmet';


const MainLayout = (props) => {
    const {pathname}= props.location;
    return (  

<React.Fragment>
   <Helmet>
       <title>تاپلرن</title>
   </Helmet>
        <div className="landing-layer">
        <div className="container">
           <TopNav/>
            {pathname === "/" ? <Header/> : null}
        </div>
    </div>

    
    <div className="main-menu">
        <div className="container">
           <MainNav/>
        </div>
    </div>
    

    
    <main id="home-page">
        <div className="container">
{props.children}
        </div>
              
    
    </main>
    
   <Footer/>

   </React.Fragment>
    );
}
 
export default withRouter(MainLayout);