import { Fragment } from "react";
import {Router, Route } from 'react-router-dom';
import Sidebar from "../../Components/SideBar/Sidebar.jsx";
import styles from './Doctordash.module.css';
import Community from "../../Components/community/Communitypage/Community.jsx";
const Doctordash = () => {
    const doctor = [
        {
          title: 'Dashboard',
          icon: ''
        },
        {
          title: 'Appointments',
          icon: ''
        },
        {
          title: 'Patients',
          icon: ''
        },
        {
            title: 'Community',
            icon: ''
          },
          {
            title: 'Settings',
            icon: ''
          },
          {
            title: 'Logout',
            icon: ''
          }
      ]
    return ( 
        <Fragment>
          <Router>
            <Sidebar props={doctor} />
            <Route path="/doctordash/community" component={Community} />
          </Router>
        </Fragment>
     );
}
 
export default Doctordash;