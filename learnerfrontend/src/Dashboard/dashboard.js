import React, { useState } from 'react';
import './dashboard.css';
import 'boxicons/css/boxicons.min.css';

const Dashboard = () => {
    const [closeBar, setCloseBar] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleSideBar = () => {
            setCloseBar(prevState => !prevState)
            console.log(closeBar);
    }
    const handleMode = () => {
        setDarkMode(prevState => !prevState);
        document.body.classList.toggle('dark');
    }
  return (
    <nav className={`sidebar ${closeBar ? 'close' : ''}`}>
            <header>
                <div className="image-text">
                    <span className="image" style={{color: darkMode ? 'rebeccapurple' : 'black'}}>
                        Learners
                    </span>
                    <div className="text header-text">
                        <span className="name">Question Hub</span>
                    </div>
                </div> 
                <i onClick={handleSideBar} class='bx bx-chevron-right toggle'></i>           
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                            <i class='bx bx-search icon' onClick={handleSideBar} ></i>
                            <input type="search" placeholder="Search.." />
                    </li>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="/dashbaord">
                                <i class='bx bx-analyse icon'></i>
                                <span className="text nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="/setQuestion">
                            <i class='bx bx-edit-alt icon'></i>
                                <span className="text nav-text">Create Exams or Test</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="/test">
                            <i class='bx bx-notepad icon'></i>
                                <span className="text nav-text">View Created Test</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="/seller_uploads">
                            <i class='bx bx-group icon'></i>
                                <span className="text nav-text">Students</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="/seller_uploads">
                                <i class='bx bx-objects-horizontal-left icon'></i>
                                <span className="text nav-text">Activities</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bottom-content">
                    <li className="">
                        <a href="/Tutor_logout">
                            <i class='bx bx-log-out icon'></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li class="mode">
                        <div className="moon-sun">
                            <i class='bx bx-moon icon moon'></i>
                            <i class='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                        <div className="toggle-switch" onClick={handleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
  )
}

export default Dashboard