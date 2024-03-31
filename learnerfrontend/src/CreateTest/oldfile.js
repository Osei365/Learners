const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting questions:", questions);
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/create-new/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ questions: questions, duration: testDuration })
        });
        if (!response.ok) {
            throw new Error("Creating question failed");
        }

        const data = await response.json();
        setQuizId(data.quiz_id);
        console.log(data);
        setNumQuestions(1);
        setQuestions([]);
        setShowForm(false);
    } catch (error) {
        console.log(error);
    }
};