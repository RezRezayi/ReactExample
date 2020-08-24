import React from 'react';


import {Switch,Route} from 'react-router-dom';

import MainLayout from '../component/layouts/MainLayout'
import Course from '../component/courses/Course';
import Login from '../component/login/Login';
import Register from '../component/login/Register';
import Archive from '../component/courses/Archive';
import Acount from '../component/login/Acount';
import SingleCourse from "../component/courses/SingleCourse";


const Toplearn = (props) => {
    return ( 
 
        <MainLayout>
            <Switch>
            <Route path="/singlecourse"  component = {SingleCourse}/>
            <Route path="/archive"  component = {Archive}/>
            <Route path="/acount"  component = {Acount}/>
            <Route path="/register" exact component = {Register}/>
            <Route path="/login" exact component = {Login}/>
           <Route path="/" exact component = {Course}/>
           </Switch>
           </MainLayout>
           


     );
}
 
export default Toplearn;