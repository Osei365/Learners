import React, {useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import './Created.css';
/*import questions from '../Dashboard/questions';*/

const Created = () => {
    const [toggle, setToggle ] = useState(false);
    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
        };

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`mainD ${toggle ? 'activeD' : ''}`}>
            <div className="topbarD">
                <div className="toggleD" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="searchD">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i className='bx bx-search-alt-2'></i>
                    </label>
                </div>
                <div className="userD">
                    <i className='bx bxs-user-circle'></i>
                </div>
            </div>
            <div className="boxes">
                <div className="box1 box0">
                    <span class="textspan">All Created Quiz</span>
                    <span className="icn-bx"><i class='bx bx-podcast'></i></span>    
                </div>
                <div className="box1 box2">
                <span class="textspan">All Students</span>
                    <span className="icn-bx"><i class='bx bx-child'></i></span> 
                </div>
                <div className="box1 box3">
                    <span class="textspan">Courses Taken</span>
                    <span className="icn-bx"><i class='bx bx-folder'></i></span> 
                </div>
            </div>
            <div className="created-quiz">
                <h2>Click on Any course to see Quizzes Created By you</h2>
                <div className="courseBox">
                    <div className="Cbx" >Python</div>
                    <div className="Cbx" >C</div>
                    <div className="Cbx" >php</div>
                    <div className="Cbx" >Java</div>
                    <div className="Cbx" >C++</div>
                    <div className="Cbx" >c#</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Created