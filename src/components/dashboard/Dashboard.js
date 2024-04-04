import React from 'react';
import { Col, Row } from 'reactstrap';

// import icon from '../../assets/images/icon.png';
import HistoryTable from './HistoryTable';

const hist = [
  { date: '2024-03-10', amount: '500 PLT' },
  { date: '2024-03-11', amount: '750 PLT' },
];

function MainDashboard() {
  return (
    <>
      <div className="main-card">
        <Row>
          <Col className="mb-3" md="4" sm="12">
            <div className="points-card">
              <div className="label">
                <span>Presale</span>
              </div>
              <div className="amount">
                <span>15000</span>
              </div>
            </div>
          </Col>
          <Col className="mb-3" md="4" sm="12">
            <div className="points-card">
              <div className="label">
                <span>Airdrop</span>
              </div>
              <div className="amount">
                <span>10000</span>
              </div>
            </div>
          </Col>
          <Col className="mb-3" md="4" sm="12">
            <div className="points-card">
              <div className="label">
                <span>Available Balance</span>
              </div>
              <div className="amount">
                <span>1500</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className="history">
          <HistoryTable history={hist} />
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
