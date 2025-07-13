import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PrivacyPolicy({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>개인정보처리방침</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>1. 광고 서비스</strong></p>
        <p>본 사이트는 제3자 광고 서비스인 Google AdSense를 사용하고 있으며, 이로 인해 다음 정보가 처리될 수 있습니다.</p>
        <ul>
          <li>Google을 포함한 제3자 광고 공급업체는 쿠키(cookie)를 사용하여 사용자의 이 웹사이트 또는 다른 웹사이트 방문 기록을 기반으로 광고를 게재합니다.</li>
          <li>Google의 광고 쿠키를 사용하면 Google 및 Google 파트너는 사용자의 사이트 및/또는 다른 사이트 방문 기록을 기반으로 사용자에게 맞춤 광고를 게재할 수 있습니다.</li>
          <li>사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>을 방문하여 언제든지 맞춤 광고 게재를 비활성화할 수 있습니다. 또는 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>를 방문하여 다른 제3자 광고 공급업체의 맞춤 광고용 쿠키 사용을 선택 해제할 수 있습니다.</li>
        </ul>
        <p>본 사이트는 별도의 회원가입 절차를 두지 않으며, 개인을 식별할 수 있는 어떠한 정보도 직접 수집하거나 저장하지 않습니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrivacyPolicy;
