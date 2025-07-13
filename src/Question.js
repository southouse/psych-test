import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

function Question({ question, handleAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(question.answers.sort(() => Math.random() - 0.5));
  }, [question]);

  return (
    <div>
      <h4 className="mb-3">{question.question}</h4>
      <Image src={question.image} fluid className="mb-3" />
      {shuffledAnswers.map((answer, index) => (
        <Button
          key={index}
          variant="outline-primary"
          className="d-block mb-2 w-100"
          onClick={() => handleAnswer(answer.type)}
        >
          {answer.text}
        </Button>
      ))}
    </div>
  );
}

export default Question;
