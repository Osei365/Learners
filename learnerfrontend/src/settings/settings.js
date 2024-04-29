import React, {useState} from 'react';
import 'boxicons/css/boxicons.min.css';
import './Settings.css';
import DashNavBar from '../Dashboard/dash_navBar';

const Settings = () => {

    const [toggle, setToggle ] = useState(false);
    const [image, setImage] = useState(null);
    const [editImage, setEditImage] = useState(false);
    const [imageExist, setImageExist] = useState(null);
    const [saved, setSaveImage] = useState(false);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [settingsClickable, setSettingsClickable] = useState(null); 

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    };

    const handleChange = (e) => {
        console.log('I am in here');
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setSaveImage(true);
    }

    const saveImage = () => {
        setEditImage(false);
        setSaveImage(false);
            setUpdatedImage(image); // Update image only if it's been changed
    }

    
    const handleEdit = () => {
        setEditImage(prevState => !prevState);
        setSettingsClickable(false);
    }
    const handleDisableEdit = () => {
        console.log(settingsClickable)
        if(editImage){
        setEditImage(false); 
        }
        setSaveImage(false);
    }
    const handleUploadBtnClick = (e) => {
        console.log('i am here');
        e.stopPropagation(); 
        setSettingsClickable(true); // Enable settings clickable when upload button is clicked
    }

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`main1 ${toggle ? 'active1' : ''}`}>
            <div className="topbar1">
                <div className="toggle1" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="user1">
                    {updatedImage ? 
                    <img src={updatedImage} alt="profile" /> :
                    <i className='bx bxs-user-circle'></i>
                    }
                </div>
            </div>
            <div className="settings" onClick={settingsClickable ? null : handleDisableEdit}>
                <div className="editpics">
                    <div className="picsEdit">
                       {imageExist !== null ? (
                            <img src={imageExist} alt="profile-pics" />
                            ) : updatedImage !== null ? (
                            <img src={updatedImage} alt="profile-pics" />
                            ) : (
                            <i className='bx bxs-user-circle'></i>
                        )}
                        <span onClick={handleEdit}>Edit <i class='bx bx-edit-alt'></i></span>
                        <div className="fn">
                        {editImage &&
                        <div className="labelWrapper">
                            <label onClick={handleUploadBtnClick} for="uploadBtn"><i class='bx bx-upload'></i> Upload pics</label>
                            <input className="uploadBtn" id="uploadBtn" type="file" name="image" accept="image/*" onChange={handleChange}  />
                        </div>
                        }
                        {image && editImage && saved &&
                        <span 
                        onClick={saveImage}>Save</span>
                        }
                        </div>
                    </div>
                </div>

                <div className="userName">
                    <h4>Name</h4>
                    <span>oluwaseyi</span>
                    <span className="changes">Change Name</span>
                </div>
                <div className="email">
                    <h4>Email</h4>
                    <span>fasugbeoluwaseyi@gmail.com</span>
                </div>
                <div className="password">
                    <h4>Password</h4>
                    <span className="changes">Change Password</span>
                </div>
                <div className="forgotPassword">
                    <h4>Forgot Password?</h4>
                    <span className="changes">Update Password</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings