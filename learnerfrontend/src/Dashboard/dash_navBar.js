import React, {useState} from 'react';
import 'boxicons/css/boxicons.min.css';
import './dash_navBar.css';
import { Link , useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext'; 


const dashBoardItems = [
    {id: 1, icon: <i class='bx bxl-apple'></i>, name: "Brand Name", link: "/brand"},
    {id: 2, icon: <i class='bx bx-home'></i>, name: "Dashboard", link: "/dashboard"},
    {id: 3, icon: <i class='bx bx-edit-alt'></i>, name: "Create Test", link: "/createTest"},
    {id: 4, icon: <i class='bx bx-group'></i>, name: "Students", link: "/students"},
    {id: 5, icon: <i class='bx bx-store'></i>, name: "View All Created", link: "/created"},
    {id: 6, icon: <i class='bx bx-objects-horizontal-left'></i>, name: "Activities", link: "/activities"},
    {id: 7,icon: <i class='bx bx-help-circle'></i>, name: "Help", link: "/help"},
    {id: 8, icon: <i class='bx bx-cog'></i>, name: "Settings", link: "/settings"},
    {id: 9, icon: <i class='bx bx-log-out'></i>, name: "Log out", link: "/logout"}
];

const DashNavBar = ({toggle}) => {
    const { logout } = useAuth();

    const [darkMode, setDarkMode] = useState(false);

    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();


    const handleMouseOver = (itemId) => {
        setActiveItem(itemId);
    };

    const handleMode = () => {
        setDarkMode(prevState => !prevState);
        document.body.classList.toggle('dark');
    }

    const handleLogout = () => {
        logout();
        navigate("/sign-in");
    };


   const DashboardItem = ({id, icon, name, link, handleLogout }) => {
        return (
            link === '/logout' ? (<li onMouseOver={() => handleMouseOver(id)}
            className={activeItem === id ? 'hovered' : ''} onClick={handleLogout}>
                <Link to={link}>
                    <span className="icon">{icon}</span>
                    <span className="title">{name}</span>
                </Link>
            </li>) : (
                <li onMouseOver={() => handleMouseOver(id)}
                className={activeItem === id ? 'hovered' : ''}>
                <Link to={link}>
                    <span className="icon">{icon}</span>
                    <span className="title">{name}</span>
                </Link>
            </li>
            )
            
        );
    };

  return (
        <div className={`navigation ${toggle ? 'active' : ''}`}>
            <ul>
            {dashBoardItems.map(item => (
                    <DashboardItem key={item.id}  id={item.id} icon={item.icon} name={item.name} link={item.link} handleLogout={handleLogout} />
                ))}
                <li className="mode">
                    <div className="mode-inner">
                        <div className="moon-sun">
                            <i class='bx bx-moon icon moon'></i>
                            <i class='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                        <div className="toggle-switch" onClick={handleMode}>
                            <span className="switch"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  )
}

export default DashNavBar