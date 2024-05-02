const submitName = async (userId, newName) => {

    let error = ''
    let first = ''
    let Last = ''

    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/update-name/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                newName: newName,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            [ Last, first ] = newName.split(' ');
        } else {
            if (response.status === 404) {
                error = 'UserName Taken';
            } else {
                error = 'Failed to update name';
            }
        }
    } catch (err) {
        console.error('Error:', err);
        error = 'No Server Response';
    }

    return { first, Last, error };

}


const submitPwd = async (userId, oldPwd, pwd) => {

    let error = ''
    let success = ''

    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/update-password/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                initialPassword: oldPwd,
                newPassword: pwd
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            success = data.status
        } else {
            if (response.status === 400) {
                error = 'Password Empty';
            } else {
                error = 'Incorrect Password';
            }
        }
    } catch (err) {
        console.error('Error:', err);
        error = 'No Server Response';
    }

    return { success, error };
}

const timeoutFunction = (variable, success, success2, setSuccess, setShowNamePop, setSuccess2, setShowPwdPop) => {
    setTimeout(() => {
        if (variable === 'pwd' && success2) {
            setSuccess2(false);
            setShowPwdPop(false);
        } else if(success) {
            setSuccess(false);
            setShowNamePop(false);
        }
    }, 2000);
};

const fetchData = async (userId, setImageExist, setFirstName, setLastName, setEmail) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/teacher-details/${userId}`);
        const data = await response.json();
        console.log('the given data: ',data);
        if(data.teacher_image) {
        setImageExist(data.teacher_image);
        }
        setFirstName(data.first_name);
        setLastName(data.last_name)
        setEmail(data.email)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const saveUpdateImage = async (userId, image) => {
    let imagePath = null;
    let success = '';
    let errors = ''
    const formData = new FormData();
    formData.append('image', image);
    
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/save-teacherimage/${userId}`, {
            method: 'PUT',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            imagePath = data.teacherImage;
            success = data.status_code;
        } else {
            if (response.status === 400) {
                const errorData = await response.json();
                const { description } = errorData;
                return description;
            } else {
                errors = 'Server Error';
            }
        }
    } catch(err) {
        console.error('Error:', err);
        errors = 'No Server Response';
    }

    return { imagePath, success, errors };
}

export { submitName, submitPwd, timeoutFunction, fetchData, saveUpdateImage }
