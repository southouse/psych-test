import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Question from './Question';
import Result from './Result';

const initialQuestions = [
  {
    question: '친구가 갑자기 "나 너무 힘들어"라고 말했을 때, 당신의 첫 반응은?',
    answers: [
      { text: '무슨 일이야? 자세히 말해봐. 내가 들어줄게.', type: 'egen' },
      { text: '힘든 일이 있구나. 내가 해결해줄 수 있는 일이야?', type: 'teto' },
    ],
    image: '/question/question_1.png'
  },
  {
    question: '연인과의 기념일, 무엇을 할 계획인가요?',
    answers: [
      { text: '연인이 평소에 갖고 싶어했던 선물을 준비하고, 함께 특별한 시간을 보낸다.', type: 'egen' },
      { text: '내가 주도해서 멋진 레스토랑을 예약하고, 최고의 하루를 만들어준다.', type: 'teto' },
    ],
    image: '/question/question_2.png'
  },
  {
    question: '팀 프로젝트에서 갈등이 생겼을 때, 당신의 대처 방식은?',
    answers: [
      { text: '팀원들의 의견을 모두 듣고, 중간에서 조율하여 합의점을 찾는다.', type: 'egen' },
      { text: '내 의견을 명확하게 제시하고, 팀원들을 설득하여 문제를 해결한다.', type: 'teto' },
    ],
    image: '/question/question_3.png'
  },
  {
    question: '길을 가다가 곤경에 처한 사람을 봤을 때, 당신의 행동은?',
    answers: [
      { text: '먼저 다가가서 괜찮은지 물어보고, 필요한 도움을 준다.', type: 'egen' },
      { text: '상황을 빠르게 파악하고, 가장 효율적인 해결책을 제시한다.', type: 'teto' },
    ],
    image: '/question/question_4.png'
  },
  {
    question: '당신이 생각하는 "사랑"이란?',
    answers: [
      { text: '서로를 이해하고, 감정을 공유하며, 함께 성장하는 것.', type: 'egen' },
      { text: '상대방을 지켜주고, 책임지며, 든든한 버팀목이 되어주는 것.', type: 'teto' },
    ],
    image: '/question/question_5.png'
  },
  {
    question: '새로운 기술을 배워야 할 때, 당신의 학습 스타일은?',
    answers: [
      { text: '차근차근 기초부터 공부하고, 동료들과 스터디 그룹을 만들어 함께 학습한다.', type: 'egen' },
      { text: '일단 부딪혀보면서 직접 코드를 짜보고, 필요한 부분만 찾아서 빠르게 습득한다.', type: 'teto' },
    ],
    image: '/question/question_6.png'
  },
  {
    question: '친구가 약속 시간에 늦었을 때, 당신의 반응은?',
    answers: [
      { text: '무슨 일 있었어? 괜찮아? 걱정했잖아.', type: 'egen' },
      { text: '다음부터는 늦지 않도록 미리 연락해줘.', type: 'teto' },
    ],
    image: '/question/question_7.png'
  },
  {
    question: '휴가를 계획할 때, 당신의 스타일은?',
    answers: [
      { text: '가고 싶은 곳, 하고 싶은 것을 중심으로 자유롭게 계획을 세운다.', type: 'egen' },
      { text: '항공, 숙소, 동선까지 꼼꼼하게 계획하여 완벽한 휴가를 만든다.', type: 'teto' },
    ],
    image: '/question/question_8.png'
  },
  {
    question: '힘들게 이룬 성공, 어떻게 자축하고 싶나요?',
    answers: [
      { text: '사랑하는 사람들과 함께 맛있는 음식을 먹으며 기쁨을 나눈다.', type: 'egen' },
      { text: '나 자신에게 멋진 선물을 하고, 다음 목표를 향해 나아간다.', type: 'teto' },
    ],
    image: '/question/question_9.png'
  },
  {
    question: '당신에게 "성공"이란 무엇인가요?',
    answers: [
      { text: '내가 사랑하는 사람들과 행복하게 사는 것.', type: 'egen' },
      { text: '사회적으로 인정받고, 높은 위치에 오는 것.', type: 'teto' },
    ],
    image: '/question/question_10.png'
  }
];

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuestions([...initialQuestions].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswer = (type) => {
    setAnswers([...answers, type]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setQuestions([...initialQuestions].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">"에겐남" vs "테토남" 심리테스트</Card.Title>
          {showResult ? (
            <Result answers={answers} restartTest={restartTest} />
          ) : (
            questions.length > 0 && (
              <Question
                question={questions[currentQuestion]}
                handleAnswer={handleAnswer}
              />
            )
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;