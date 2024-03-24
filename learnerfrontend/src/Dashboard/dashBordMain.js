import React, {useState} from 'react';
import './dashboardMain.css';
import {Link} from 'react-router-dom';
import questions from './questions';
import { uniqueSubjects } from './daashboardutils';


const subjectsCount = uniqueSubjects(questions, true);
const subjectsList = uniqueSubjects(questions);


const dashBoardMainItems = [
    {id: 1, icons: <i class='bx bxs-graduation'></i>, CardName: "Available Courses", numbers: subjectsCount},
    {id: 2, icons: <i class='bx bx-library'></i>, CardName: "All Questions", numbers: questions.length},
    {id: 3, icons: <i class='bx bx-male-female'></i>, CardName: "Students", numbers: 1024},
    {id: 4, icons: <i class='bx bx-code'></i>, CardName: "Trending", numbers: 1024},
];


const DashBoardMain = ({ handleToggle }) => {

    const [checkedStates, setCheckedStates] = useState(Array(questions.length).fill(null));
    const [viewAll, setViewAll] = useState(false);
    const [allCourses, setAllCourses] = useState(false);

    const handleCheck = (questionIndex, spanIndex) => {
        const updatedStates = [...checkedStates];
        updatedStates[questionIndex] = spanIndex;
        setCheckedStates(updatedStates);
    };

    const handleViewAll = () => {
        setViewAll(prevState => !prevState);
    }
    const handleAvailableCourses = () => {
        setAllCourses(prevState => !prevState);
    }

    const handleCardClick = (id) => {
        // Perform actions based on the id of the clicked card
        switch (id) {
            case 1:
                console.log("Card 1 clicked");
                handleAvailableCourses();
                break;
            case 2:
                // Function for card with id 2
                console.log("Card 2 clicked");
                handleViewAll();
                break;
            default:
                // Default action
                console.log("Unknown card clicked");
                break;
        }
    };

    return (
        <>
            <div className="topbar">
                <div className="toggle" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i className='bx bx-search-alt-2'></i>
                    </label>
                </div>
                <div className="user">
                    <i className='bx bxs-user-circle'></i>
                </div>
            </div>
            <div className="CardBox">
                {dashBoardMainItems.map(item => (
                    <div className="Cards" key={item.id} id={item.id} onClick={() => handleCardClick(item.id)}>
                        <div>
                            <div className="Numbers">{item.numbers}</div>
                            <div className="CardName">{item.CardName}</div>
                        </div>
                        <div className="iconBx">
                            {item.icons}
                        </div>
                    </div>
                ))}
            </div>
            {allCourses && (
                <div className="courses">
                    {subjectsList.map((course, index) => (
                        <span key={index} className="course">{course}</span>
                    ))}
                </div>
            )}
            <div className="Details">
                <div className="recentQuestions">
                    <div className="cardHeader">
                        <h2>Recent Questions</h2>
                        <Link to="#" className="btnd" onClick={handleViewAll}>{viewAll ? "View Less" : "View All"}</Link>
                    </div>
                    <div className="recent-container">
                        {viewAll ? (
                            questions.map((items, questionIndex) => (
                                <div className="recent" key={items.id}>
                                    <span className="quest-num">Question {items.id}</span>
                                    <span><strong>Subject: </strong>{items.subject}</span>
                                    <span><strong>Header: </strong>{items.header}</span>
                                    {items.image && <img src={items.image} alt={`img-${items.id}`} />}
                                    <p>{items.Body}</p>
                                    {Array.from({ length: 5 }).map((_, spanIndex) => (
                                        <span
                                            key={spanIndex}
                                            className={`checks ${checkedStates[questionIndex] === spanIndex ? 'checked' : ''}`}
                                            onClick={() => handleCheck(questionIndex, spanIndex)}
                                        >
                                            {spanIndex === 0 ? items.right_answer : items[`wrong_answer${spanIndex}`]}
                                        </span>
                                    ))}
                                </div>
                            ))
                        ) : (
                            questions.slice(0, 5).map((items, questionIndex) => (
                                <div className="recent" key={items.id}>
                                    <span className="quest-num">Question {items.id}</span>
                                    <span><strong>Subject: </strong>{items.subject}</span>
                                    <span><strong>Header: </strong>{items.header}</span>
                                    <p>{items.Body}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashBoardMain;
