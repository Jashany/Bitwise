import { Fragment } from "react";
import Sidebar from "../../Components/SideBar/Sidebar.jsx";
import styles from './Doctordash.module.css';
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
            <Sidebar props={doctor} />
        </Fragment>
     );
}
 
export default Doctordash;