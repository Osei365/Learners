import React, {useState} from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import 'boxicons/css/boxicons.min.css';
import AddNew from './AddNew';
import AddExisting from './AddExisting';
import './CreateTest.css';

const CreateTest = () => {
    const [toggle, setToggle ] = useState(false);
    const [createNew, setCreateNew] = useState(null);
    const [questions, setQuestions ] = useState([]);
    const [quizId, setQuizId] = useState('');
    const [code, setCode ] = useState();
    const [showForm, setShowForm] = useState(false); // Initially, don't show the form
    const [question, setQuestion] = useState([]);
    const [showQuestion, setShowQuestion] = useState(true);
    const [testDuration, setDuration] = useState(30);
    

    const handleToggle = () => {
        setToggle(prevState => !prevState);
        console.log(toggle);
    };

        const handleCreateNew = () => {
            setCreateNew(true);
            setQuestions([]);
            setQuizId('');
            setCode('');
            setShowForm(false);
        }
        const handleCreateExisting = async () => {
            setShowQuestion(true);
            setDuration(30);
            
            const response = await fetch('http://127.0.0.1:5000/api/learners/v1/all-questions');
            if(!response.ok) {
                throw new Error('Error fetching questions');
            }
            const data = await response.json();
            console.log(data);
            setQuestion(data);
            // for (let n = 0; n < data.length; n++) {
            //     question.push(data[n]);
            // }
            console.log(question);
            setCreateNew(false);
        }

  return (
    <div className="container">
        <DashNavBar toggle={toggle} />
        <div className={`mainC ${toggle ? 'activeC' : ''}`}>
            <div className="topbarC">
                <div className="toggleC" onClick={handleToggle}><i className='bx bx-menu'></i></div>
                <div className="searchC">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i className='bx bx-search-alt-2'></i>
                    </label>
                </div>
                <div className="userC">
                    <i className='bx bxs-user-circle'></i>
                </div>
            </div>
            <div className="To-Do">
                <div className="add-new" onClick={handleCreateNew}>
                        <span className="new">Create New Quiz</span>
                        <span className="icon-new"><i class='bx bx-plus'></i></span>
                </div>
                <div className="add-existing" onClick={handleCreateExisting}>
                    <span className="new">Add From pre existing question</span>
                    <span className="icon-new"><i class='bx bx-edit-alt'></i></span>
                </div>
            </div>
           {createNew !== null && (
                    <>
                        {createNew ? 
                            (<AddNew setQuestions={setQuestions} setShowForm={setShowForm} setQuizId={setQuizId} setCode={setCode} questions={questions} showForm={showForm} code={code} quizId={quizId}/>) :
                            (<AddExisting  question={question} setShowQuestion={setShowQuestion} setDuration={setDuration} testDuration={testDuration} showQuestion={showQuestion} />)
                        }
                    </>
                )}

        </div>
    </div>
  )
}

export default CreateTest