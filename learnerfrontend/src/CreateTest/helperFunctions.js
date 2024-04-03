export default function getQuizByCourse(quiz) {
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