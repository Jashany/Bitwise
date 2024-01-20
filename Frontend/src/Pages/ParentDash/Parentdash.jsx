import { Fragment } from "react";
import Sidebar from "../../Components/SideBar/Sidebar.jsx";
const Parentdash = () => {
    const parent = [
        {
          title: 'Dashboard',
          icon: ''
        },
        {
          title: 'Appointments',
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
            <Sidebar props={parent} />  
     );
}
 
export default Parentdash;