import React, {useEffect, useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import './Created.css';
import { useAuth } from '../AuthContext';
import getQuizByCourse from './helperFunctions';

const Created = () => {
    const [toggle, setToggle ] = useState(false);
    const [views,  setViews ] = useState(null);
    const { userId } = useAuth();
    const [ quiz, setQuiz ] = useState({});
    const [selectedKey, setSelectedKey] = useState(null);

    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
        };
        const handleKeyClick = (key) => {
            setSelectedKey(key); // Set the clicked key
            console.log(selectedKey);
          };

          const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text)
                .then(() => alert("Link copied"))
                .catch((error) => console.error("Failed to copy link: ", error));
        };
        const handleAllQuiz = async () => {
            setViews(true);

            /*const response = await fetch(`http://127.0.0.1:5000/api/learners/v1//teacher-quiz/${userId}`);
            if(!response.ok) {
                throw new Error('failed to get all quiz');
            }
            const data = await response.json();
            console.log(data);
            setQuiz(data);
            console.log('show me quiz and dont be silly', quiz);*/

        }

        useEffect(() => {
            const makeRequest = async() => {
            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1//teacher-quiz/${userId}`);
            if(!response.ok) {
                throw new Error('failed to get all quiz');
            }
            const data = await response.json();
            console.log(data);
            setQuiz(data);
            console.log('show me quiz and dont be silly', quiz);
        }
        makeRequest();
        }, []);

        const CoursesList = getQuizByCourse(quiz);

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
                        {views ? (
                           <div className="all-quiz">
                           {/* Rendering keys */}
                           {Object.keys(quiz).map((key, index) => (
                             <span className="quizName" key={index} onClick={() => handleKeyClick(key)}>
                               Quiz {index + 1}
                             </span>
                           ))}
                           {selectedKey && (
                            <div className="quiz0">
                                <span className="linkQuiz">Link To Quiz: api/learners/v1/take-quiz/${selectedKey} <i className='bx bx-copy' onClick={() => copyToClipboard(`api/learners/v1/take-quiz/${selectedKey}`)}></i></span>
                                {quiz[selectedKey].map((val, index) => (
                                    <div  className="Quiz1" key={index}>
                                        <h3>Question {index + 1}</h3>
                                        <span className="Quiz1h"><strong>Header:</strong> {val.header}</span>
                                        <span className="quiz1B"> {val.body}</span>
                                    </div>
                                ))}
                            </div>
                            )}
                         </div>
                       ) : (
                        <>
                         {CoursesList.map((val,index) => (
                            <div className="all-courses">
                                <h4>{val}</h4>
                            </div>
                         ))}
                         </>
                       )}
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Created