import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import PrivacyPolicy from './PrivacyPolicy';

function Result({ answers, restartTest }) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const egenCount = answers.filter((answer) => answer === 'egen').length;
  const tetoCount = answers.filter((answer) => answer === 'teto').length;

  const totalCount = answers.length;
  const egenPercentage = Math.round((egenCount / totalCount) * 100);
  const tetoPercentage = Math.round((tetoCount / totalCount) * 100);

  let resultType = '';
  let resultDescription = '';

  if (egenCount > tetoCount) {
    resultType = '에겐남';
    resultDescription = '당신은 다정다감하고, 상대방의 감정을 먼저 생각하는 "에겐남" 성향이 강하군요! 섬세하고 부드러운 매력으로 주변 사람들을 편안하게 만들어주는 타입입니다.';
  } else if (tetoCount > egenCount) {
    resultType = '테토남';
    resultDescription = '당신은 자신감 넘치고, 리더십 있는 "테토남" 성향이 강하군요! 목표 지향적이고, 든든한 모습으로 상대방에게 신뢰를 주는 타입입니다.';
  } else {
    resultType = '균형잡힌 타입';
    resultDescription = '당신은 "에겐남"과 "테토남"의 매력을 모두 갖춘 균형잡힌 타입이군요! 상황에 따라 부드러움과 카리스마를 모두 보여줄 수 있는 매력적인 사람입니다.';
  }

  return (
    <>
      <div className="text-center">
        <h4>테스트 결과</h4>
        <Alert variant="success" className="mt-4">
          <h5>당신은 {resultType}입니다!</h5>
          <p className="mb-0">
            {resultDescription}
          </p>
          <hr />
          <p className="mb-0">
            에겐남 성향: {egenPercentage}%
          </p>
          <p className="mb-0">
            테토남 성향: {tetoPercentage}%
          </p>
        </Alert>
        <Button onClick={restartTest} className="mt-3">다시 시작하기</Button>
        <div className="mt-3">
          <Button variant="link" size="sm" onClick={() => setShowPrivacy(true)}>
            개인정보처리방침
          </Button>
        </div>
      </div>
      <PrivacyPolicy show={showPrivacy} handleClose={() => setShowPrivacy(false)} />
    </>
  );
}

export default Result;
