const uniqueSubjects = (questions, getCount = false) => {
    const allSubjects = [];
    for (let i = 0; i < questions.length; i++) {
        const subject = questions[i].subject;
        if (subject && !allSubjects.includes(subject)) {
            allSubjects.push(subject);
        }
    }
    if (getCount) {
        return allSubjects.length;
    } else {
        return allSubjects;
    }
};

export { uniqueSubjects };

/*const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};*/