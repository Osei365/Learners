import React, {useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import AddNew from './AddNew';
import AddExisting from './AddExisting';
import './CreateTest.css';
import { get } from 'request';

const CreateTest = () => {
    const [toggle, setToggle ] = useState(false);
    const [createNew, setCreateNew] = useState(null);
    const [questions, setQuestion ] = useState(null);
    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
        };
        const handleCreateNew = () => {
            setCreateNew(true);
        }
        const handleCreateExisting = async () => {
            setCreateNew(false);

            const response = await fetch('http://127.0.0.1:5000/api/learners/v1/');
            if(!response.ok) {
                throw new Error('Error fetching questions');
            }
            const data = await response.json();
            
        }

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`mainC ${toggle ? 'activeC' : ''}`}>
            <div className="topbarC">
                <div className="toggleC" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="searchC">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i className='bx bx-search-alt-2'></i>
                    </label>
                </div>
                <div className="userC">
                    <i className='bx bxs-user-circle'></i>
                </div>
            </div>
            <div className="To-Do">
                <div to="/add-new" className="add-new" onClick={handleCreateNew}>
                        <span className="new">Create New Quiz</span>
                        <span className="icon-new"><i class='bx bx-plus'></i></span>
                </div>
                <div to="/add-existing" className="add-existing" onClick={handleCreateExisting}>
                    <span className="new">Add From pre existing question</span>
                    <span className="icon-new"><i class='bx bx-edit-alt'></i></span>
                </div>
            </div>
           {createNew !== null && (
                    <>
                        {createNew ? 
                            (<AddNew />) :
                            (<AddExisting />)
                        }
                    </>
                )}

        </div>
    </div>
  )
}

export default CreateTest