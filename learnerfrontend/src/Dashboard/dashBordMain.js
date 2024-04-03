import React, {useState, useEffect } from 'react';
import './dashboardMain.css';
import {Link} from 'react-router-dom';
import { uniqueSubjects } from './dashboardutils';


const DashBoardMain = ({ handleToggle }) => {
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [checkedStates, setCheckedStates] = useState(Array(questions.length).fill(null));
    const [viewAll, setViewAll] = useState(false);
    const [allCourses, setAllCourses] = useState(false);
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/all-questions`);
                if (!response.ok) {
                    throw new Error('Error fetching questions');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error.message);
            }
        };
        fetchQuestions();
    }, []);

    const studentCountFunc = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/learners/v1/get-students');
        if (!response.ok) {
            console.log('Seyi did not do her job well')
        }
        const data = await response.json();
        if(data.totalStudents){
        setStudentCount(data.totalStudents);
        }
        return data.totalStudents;
        console.log(data);
    };

    studentCountFunc();
    
    const totalPages = Math.ceil(questions.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQuestions = Array.isArray(questions) ? questions.slice(indexOfFirstItem, indexOfLastItem) : [];

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

    
    const subjectsCount = uniqueSubjects(questions, true);
    const subjectsList = uniqueSubjects(questions);

    const dashBoardMainItems = [
        {id: 1, icons: <i class='bx bxs-graduation'></i>, CardName: "Available Courses", numbers: subjectsCount},
        {id: 2, icons: <i class='bx bx-library'></i>, CardName: "All Questions", numbers: questions.length},
        {id: 3, icons: <i class='bx bx-male-female'></i>, CardName: "Students", numbers: studentCount},
        {id: 4, icons: <i class='bx bx-code'></i>, CardName: "Trending", numbers: 1024},
    ];

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
                        <>
                        {currentQuestions.map((items, index) => {
                            const questionNumber = (currentPage - 1) * itemsPerPage + index + 1;
                            return (
                                <div className="recent" key={items.id}>
                                    {/* Render question details */}
                                    <span className="quest-num">Question {questionNumber}</span>
                                    <span><strong>Subject: </strong>{items.subject}</span>
                                    <span><strong>Header: </strong>{items.header}</span>
                                    {items.image && <img src={`http://localhost:5000/api/learners/v1/${items.image}`} alt={`img-${items.id}`} />}
                                    <p>{items.body}</p>
                                    {items.options.map((option, spanIndex) => (
                                        <span
                                            key={spanIndex}
                                            className="checks"
                                            onClick={() => handleCheck(index, spanIndex)}
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                            );
        })}
                            {/* Pagination controls */}
                            <div className="pagination">
                                <button className="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button key={index} className="key" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                ))}
                                <button className="current" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {Array.isArray(questions) && questions.length > 0 && questions.slice(0, 5).map((items, questionIndex) => (
                                <div className="recent" key={items.id}>
                                    {/* Render question details */}
                                    <span className="quest-num">Question {questionIndex + 1}</span>
                                    <span><strong>Subject: </strong>{items.subject}</span>
                                    <span><strong>Header: </strong>{items.header}</span>
                                    <p>{items.body}</p>
                                </div>
                            ))}
                        </>
)}

                    </div>
                </div>
            </div>
        </>
    );
}
export default DashBoardMain;