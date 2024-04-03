import React, { useState } from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import './ViewAllStudent.css';
import 'boxicons/css/boxicons.min.css';


const ViewAllStudents = () => {
  const [toggle, setToggle ] = useState(false);
  const handleToggle = () => {
    setToggle(prevState => !prevState);
    console.log(toggle);
    };

  return (
    <div className="container">
        <DashNavBar  toggle={toggle} />
        <div className={`mainS ${toggle ? 'activeS' : ''}`}>
          <div className="topbarS">
                <div className="toggleS" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="searchS">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i className='bx bx-search-alt-2'></i>
                    </label>
                </div>
                <div className="userS">
                    <i className='bx bxs-user-circle'></i>
                </div>
            </div>
            <div className="studentTable">
              
            </div>
        </div>
    </div>
  )
}

export default ViewAllStudents