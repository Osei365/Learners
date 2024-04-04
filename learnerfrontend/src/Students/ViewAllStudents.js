import React, { useState, useEffect} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import './ViewAllStudent.css';
import 'boxicons/css/boxicons.min.css';
import MyTable from './StudentTable';
import { useAuth } from '../AuthContext';


const ViewAllStudents = () => {
  const [toggle, setToggle ] = useState(false);
  const { userId } = useAuth();
 const [ tableData, setTableData] = useState([]);

  const handleToggle = () => {
    setToggle(prevState => !prevState);
    console.log(toggle);
    };

    useEffect(() => {
      const showStudents = async () => {
        try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/get-students/${userId}`);
        if(!response.ok) {
          console.log('failed to fetch student');
        }
        const Data = await response.json();
        console.log(Data);
        setTableData(Data);
      }catch(error) {
        console.log(error);
      }
    }
    showStudents();
    }, [userId])

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
              <h1>Students</h1>
                <MyTable data={tableData} />
              </div>
        </div>
    </div>
  )
}

export default ViewAllStudents