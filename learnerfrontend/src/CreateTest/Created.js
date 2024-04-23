import React, {useEffect, useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import './Created.css';
import { useAuth } from '../AuthContext';
import getQuizByCourse from './helperFunctions';
import { Link } from 'react-router-dom';

const Created = () => {
    const [toggle, setToggle ] = useState(false);
    const [views,  setViews ] = useState(null);
    const { userId } = useAuth();
    const [ quizids, setQuizid ] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const [showPopup, setShowPopup] = useState({});
    const [filename, setFilename] = useState('');
    const [score, setScore] = useState('');
    const [quizView, setQuizView] = useState({});
    let coursesList = []

    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
        };
        const handleKeyClick = (key) => {
            console.log('it entered here');
            console.log(key);
            setSelectedKey(key);
            console.log(selectedKey);
            setShowPopup(prevState => ({
                ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => [k, k === key])),
                [key]: !prevState[key]
            }));
            const Request = async() => {
                const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/quiz-details/${key}`);
                if(!response.ok) {
                    throw new Error('failed to get all quiz');
                }
                const dict = await response.json();
                console.log(dict);
                setQuiz(dict.questions);
                setFilename(dict.docFile);
                if(dict.excelScoreFile) {
                    setScore(dict.excelScoreFile)
                }
            }
            Request();
            setQuizView(false);
            };

        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text)
                .then(() => alert("Link copied"))
                .catch((error) => console.error("Failed to copy link: ", error));
        };
        const handleAllQuiz = async () => {
            setViews(true);
        }

        useEffect(() => {
            const makeRequest = async() => {
            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/teacher-quiz/${userId}`);
            if(!response.ok) {
                throw new Error('failed to get all quiz');
            }
            const data = await response.json();
            setQuizid(data);
            console.log(data);
            console.log('show me quiz and dont be silly', quizids);
        }
        makeRequest();
        }, [userId]);

        const handleCourses = async () => {
            setViews(false);
            coursesList = getQuizByCourse(userId);
        }

        const handleViews = (key) =>  {
            console.log('the quiz: ', quiz);
            setQuizView(prevState => ({
                ...prevState,
                [key]: !prevState[key]
            }));
            console.log(quizView)
                setShowPopup(prevState => ({
                    ...prevState,
                    [key]: false
                }));
            
        }

        const handleClickBack = (key) => {
            setQuizView(prevState => ({
                ...prevState,
                [key]: false
            }));
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
                            {quizids.map((key, index) => (
                                <div className="popup" key={index}>
                                <span onClick={() => handleKeyClick(key)}>Quiz {index + 1} </span>
                                    <div className={`popuptext ${showPopup[key] ? 'show' : ''}`}>
                                        <div className="pop">
                                            <Link className="link-Quiz" to={`http://127.0.0.1:5000/api/learners/v1/${filename}`}>
                                                <i class='bx bxs-file-doc'></i> Download Quiz
                                            </Link>
                                            <span className="link-Quiz"  onClick={(e) => { e.stopPropagation(); handleViews(key) }}>
                                                <i class='bx bxs-edit-alt'></i>View Quiz
                                            </span>
                                            <Link className="link-Quiz"  to={`http://127.0.0.1:5000/api/learners/v1/${score}`}>
                                                <i class='bx bxs-door-open'></i> View Score In Excel
                                            </Link>
                                            <span className="link-Quiz">
                                                <i className='bx bx-copy' onClick={() => copyToClipboard(`api/learners/v1/take-quiz/${selectedKey}`)}></i> Copy Link
                                            </span>
                                        </div>
                                    </div>
                                    {showPopup[key] === false && quizView[key] === true &&(
                                    <div className="questionaire">
                                        <span className="back" onClick={() => handleClickBack(key)}><i class='bx bx-left-arrow-alt'></i> Back</span>
                                        <p className="sub">{quiz[0].subject}</p>
                                        {quiz.map((items, index) => (
                                            <div className="real" key={index}>
                                                <span>Question {index  + 1}</span>
                                                <span className="head-er"><strong>Header: </strong>{items.header}</span>
                                                {items.image && <img src={`http://localhost:5000/api/learners/v1/${items.image}`} alt={`img-${items.id}`} />}
                                                <p>{items.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                    )}
                                </div>
                            ))}
                            </div>
                        ) : (
                        <>
                         {coursesList.map((val,index) => (
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