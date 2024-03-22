import React, {useState } from 'react';
import DashNavBar from './dash_navBar';
import DashBoardMain from './dashBordMain';
import './dashboard.css';


const Dashboard = () => {
  const [toggle, setToggle ] = useState(false);
  const handleToggle = () => {
    setToggle(prevState => !prevState);
    console.log(toggle);
    };

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`main ${toggle ? 'active' : ''}`}>
        <DashBoardMain handleToggle={handleToggle} />
        </div>
    </div>
  )
}

export default Dashboard