import React, {useState, useEffect, useRef} from 'react';
import 'boxicons/css/boxicons.min.css';
import './Settings.css';
import DashNavBar from '../Dashboard/dash_navBar';
import { useAuth } from '../AuthContext';
import {submitName, submitPwd, timeoutFunction, 
fetchData, saveUpdateImage } from './helperFunction';


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9\s-_]{1,38}[a-zA-Z0-9]$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Settings = () => {
    const { userId } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const [toggle, setToggle ] = useState(false);
    const [image, setImage] = useState(null);
    const [editImage, setEditImage] = useState(false);
    const [imageExist, setImageExist] = useState(null);
    const [saved, setSaveImage] = useState(false);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [settingsClickable, setSettingsClickable] = useState(null); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [imageSuccess, setImageSuccess] = useState('')
    let errorImage = ''

    const [newName, setNewName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [showNamePop, setShowNamePop]  = useState(false);
    const [showPwdPop, setShowPwdPop] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [success2, setSuccess2] = useState(false);
    const [errMsg2, setErrMsg2] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [oldPwd, setOldPwd] = useState('');

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    };

    useEffect(() => {
        fetchData(userId, setImageExist, setFirstName, setLastName, setEmail);
    }, [userId, setImageExist, setFirstName, setLastName, setEmail]);

    const handleChange = (e) => {
        console.log('I am in here');
        const file = e.target.files[0];
        setImage(file);
        console.log(image);
        setSaveImage(true);
    }

    const saveImage = async () => {
        setImageExist(null);
        setEditImage(false);
        setSaveImage(false);
        console.log(image);
        const { imagePath, success, errors} = await saveUpdateImage(userId, image);
        setUpdatedImage(imagePath); // Update image only if it's been changed
        setImageSuccess(success);
        errorImage = errors
    }

    useEffect(() => {
        const result = USER_REGEX.test(newName);
        console.log(result);
        console.log(newName);
        setValidName(result);
    }, [newName])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    
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
        setSettingsClickable(true); 
    }

    const handleNameChange = (e) => {
        setShowNamePop(prevState => !prevState);
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(newName);
        if (!v1) {
            setErrMsg("Invalid Entry");
            return;
        }
        const { Last, first, error } = await submitName(userId, newName);
        if(Last || first) {
            setFirstName(first)
            setLastName(Last)
            setSuccess(true)
        } else if(error) {
            setErrMsg(error)
            errRef.current.focus()
        }
    };

    const handleSubmitPwd = async (e) => {
        e.preventDefault();
        const v1 = PWD_REGEX.test(pwd);
        if (!v1 && !oldPwd) {
            setErrMsg("Invalid Entry");
            return;
        }

        const { error, success } = await submitPwd(userId, oldPwd, pwd);
        if(success){
            setSuccess2(true);
        } else if(error) {
            setErrMsg2(error)
            errRef.current.focus()
        }

    }

    timeoutFunction('pwd', success, success2, setSuccess, setShowNamePop, setSuccess2, setShowPwdPop);

    const handlePwdChange = () => {
        setShowPwdPop(prevState => !prevState)
    }

    setTimeout(() => {
        if (imageSuccess) {
            setImageSuccess('');
        } else if(errorImage) {
            errorImage = '';
        }
    }, 2000);

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`main1 ${toggle ? 'active1' : ''}`}>
            <div className="topbar1">
                <div className="toggle1" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="user1">
                    {imageExist !== null ? (
                        <img src={`http://localhost:5000/api/learners/v1/${imageExist}`} alt="profile-pics" />
                        ) : updatedImage !== null ? (
                        <img src={`http://localhost:5000/api/learners/v1/${updatedImage}`}alt="profile-pics" />
                        ) : (
                        <i className='bx bxs-user-circle'></i>
                    )}
                </div>
            </div>
            <div className="settings" onClick={settingsClickable ? null : handleDisableEdit}>
                <div className="editpics">
                    {imageSuccess ? (<h4 className="imageSuccess">{imageSuccess} <i class='bx bx-check-circle'></i></h4>) : (
                        <h4 className="imageError">{errorImage}</h4>
                    )}
                    <div className="picsEdit">
                        {imageExist !== null ? (
                            <img src={`http://localhost:5000/api/learners/v1/${imageExist}`} alt="profile-pics" />
                            ) : updatedImage !== null ? (
                            <img src={`http://localhost:5000/api/learners/v1/${updatedImage}`} alt="profile-pics" />
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
                    <span>{lastName} {firstName} </span>
                    <span onClick={handleNameChange} className="changes">Change Name</span>
                    {showNamePop && <div className="namePopUp" onClick={handleNameChange}>
                    {success ? (
                        <p className="success">Successfull <i class='bx bx-check-circle'></i></p>
                    ): (
                    <>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form className="PopUp" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                            <label htmlFor="username">
                                Username:&nbsp; 
                                <span className={validName ? "valid" : "hide"}>
                                    <i class='bx bx-check'></i> 
                                </span>
                                <span className={validName || !newName ? "hide" : "invalid"}>
                                    <i class='bx bx-x'></i>
                                </span>
                            </label>
                            <input
                            type="text"
                            id="username"
                            placeholder='Lastname Firstname'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setNewName(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            style={{ marginBottom: (userFocus && newName && !validName)  ? '0px' : '20px' }}
                            />
                            <p id="uidnote" className={userFocus && newName && !validName ? 'instructions' : "offscreen"}>
                                <i class='bx bx-info-circle'></i>&nbsp;
                                4 to 40 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                            <button disabled={!validName  ? true : false}>Save</button>
                        </form>
                        </>)}
                    </div>}
                </div>
                <div className="email">
                    <h4>Email</h4>
                    <span>{email}</span>
                </div>
                <div className="password">
                    <h4>Password</h4>
                    <span className="changes" onClick={handlePwdChange}>Change Passwords</span>
                    {showPwdPop && <div className="namePopUp2" onClick={handlePwdChange}>
                    {success2 ? (
                        <p className="success">Successfull <i class='bx bx-check-circle'></i></p>
                    ): (
                    <>
                    <p ref={errRef} className={errMsg2 ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg2}</p>
                    <form className="PopUp2" onSubmit={handleSubmitPwd} onClick={(e) => e.stopPropagation()}>
                        <label htmlFor="oldpwd">
                            Old password
                        </label>
                        <input 
                            type="password"
                            id="oldpwd"
                            onChange={(e) => setOldPwd(e.target.value)}
                            required
                            style={{ marginBottom:'20px' }}
                        />
                        <label htmlFor="password">
                            Password:&nbsp;
                            <span className={validPwd ? "valid" : "hide"}>
                                <i class='bx bx-check'></i> 
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <i class='bx bx-x'></i>
                            </span>
                        </label>
                        <input 
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            style={{ marginBottom: pwdFocus && !validPwd ? '0px' : '20px' }}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <i class='bx bx-info-circle'></i>&nbsp;
                                8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">! </span>
                            <span aria-label="at symbol">@ </span><span aria-label="hashtag"># </span>
                            <span aria-label="dollar sign">$ </span> <span aria-label="percent">% </span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:&nbsp;
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                <i class='bx bx-check'></i> 
                            </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                <i class='bx bx-x'></i>
                            </span>
                        </label>
                        <input 
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            style={{ marginBottom: matchFocus && !validMatch ? '0px' : '20px' }}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <i class='bx bx-info-circle'></i>&nbsp;
                            8 to 24 characters.<br />
                            Must match the first password input field.
                        </p>
                        <button disabled={!validPwd || !oldPwd || !validMatch ? true : false}>Save</button>
                        </form>
                    </>)}
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Settings