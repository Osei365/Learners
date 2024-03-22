import React from 'react'

const AllQuestions = () => {

    const [checkedStates, setCheckedStates] = useState(Array(question.length).fill(null));

    const handleCheck = (questionIndex, spanIndex) => {
        const updatedStates = [...checkedStates];
        updatedStates[questionIndex] = spanIndex;
        setCheckedStates(updatedStates);
    };
  return (
    <div class="recent-container">
        {question.slice(0, 5).map((items, questionIndex )=> (
        <div class="recent" key={items.id}>
            <span class="quest-num">Question {items.id}</span>
            <span><strong>Subject: </strong>{items.subject}</span>
            <span><strong>Header: </strong>{items.header}</span>
            {items.image && <img src={items.image} alt={`img-${items.id}`}/> }
            <p>{items.Body}</p>
            {Array.from({ length: 5 }).map((_, spanIndex) => (
                    <span
                        key={spanIndex}
                        className={`checks ${checkedStates[questionIndex] === spanIndex ? 'checked' : ''}`}
                        onClick={() => handleCheck(questionIndex, spanIndex)}
                    >
                        {spanIndex === 0 ? items.right_answer : items[`wrong_answer${spanIndex}`]}
                    </span>
                ))}
            </div>
        ))}
    </div>
  )
}

export default AllQuestions