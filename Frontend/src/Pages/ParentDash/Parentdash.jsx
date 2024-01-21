import { Fragment,useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar.jsx";
import { Route, Router } from "react-router-dom";
import style from './Parentdash.module.css';
import Community from "../../Components/community/Communitypage/Community.jsx";
const Parentdash = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
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
            icon: '',
            component: <Community />
        },
        {
            title: 'Settings',
            icon: ''
        }
      ]

      const handleClick = (title) => {
        setActiveComponent(title);
    };
    return ( 
      <Fragment>
        <div className={style.main}>
            <Sidebar props={parent} onClick={handleClick} />
            {parent.find(item => item.title === activeComponent).component}
            </div>
      </Fragment> 
     );
}
 
export default Parentdash;