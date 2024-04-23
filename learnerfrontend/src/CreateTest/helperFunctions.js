export default async function getQuizByCourse(id) {
    let quiz = []

    try {
        const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/all-questions${id}`);
        if (!response.ok) {
            throw new Error('Error fetching questions');
        }
        quiz = await response.json();
        
    } catch (error) {
        console.error('Error fetching questions:', error.message);
    }
    const Subjects = []
    for (const key in quiz) {
        const arrayQuiz = quiz[key];
        for (const dict of arrayQuiz) {
            if (dict.subject && !Subjects.includes(dict.subject)) {
                Subjects.push(dict.subject);
            }
        }
      }
      return Subjects;
}