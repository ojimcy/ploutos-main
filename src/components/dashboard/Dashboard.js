import React from 'react';
import { Col, Row } from 'reactstrap';
import Tasks from './Tasks';

// import icon from '../../assets/images/icon.png';
import HistoryTable from './HistoryTable';
import { Link } from 'react-router-dom';

const hist = [
  { date: '2024-03-10', amount: '500 PLT' },
  { date: '2024-03-11', amount: '750 PLT' },
];

const tasks = [
  {
    reward: '1500',
    title: 'Referral tasks',
    info: 'Earn 50 PLT for each successfull referral!!',
    link: '#',
  },
  {
    reward: '200',
    title: 'Telegram tasks',
    info: 'Follow @Ploutos group',
    link: 'https://t.me/notcoin_bot?start=r_574113_11097614',
  },
];

function MainDashboard() {
  return (
    <>
      <div className="main-card">
        <Row>
          <Col className="mb-3" md="4" sm="12">
            <div className="points-card">
              <div className="label">
                <span>Total Staking</span>
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
                <span className='d-flex'>
                  1500
                  <Link
                    className="dashboard-btn claim-btn"
                    target="_blank"
                    to="#"
                  >
                    Claim
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Tasks tasks={tasks} />
        </Row>

        <div className="history">
          <HistoryTable history={hist} />
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
