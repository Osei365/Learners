import React, {useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import './Created.css';
import { useAuth } from '../AuthContext';

const Created = () => {
    const [toggle, setToggle ] = useState(false);
    const [views,  setViews ] = useState(null);
    const { userId } = useAuth();
    const [ quiz, setQuiz ] = useState();

    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
        };

        const handleAllQuiz = async () => {
            setViews(true);

            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1//teacher-quiz/${userId}`);
            if(!response.ok) {
                throw new Error('failed to get all quiz');
            }
            const data = await response.json();
            console.log(data);

        }
        const handleCourses = () => {
            setViews(false);
        }

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
                <div className="box1 box0" onClick={handleAllQuiz}>
                    <span class="textspan">All Created Quiz</span>
                    <span className="icn-bx"><i class='bx bx-podcast'></i></span>    
                </div>
                <div className="box1 box3" onClick={handleCourses}>
                    <span class="textspan">Courses Taken</span>
                    <span className="icn-bx"><i class='bx bx-folder'></i></span> 
                </div>
            </div>
            <div className="created-quiz">
            {views !== null && (
                    <>
                        {views ? 
                            (<div className="all-quiz">My girl
                                <div className="quiz-box">

                                </div>
                            </div>) :
                            (<div className="all-courses">My boy</div>)
                        }
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Created