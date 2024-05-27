import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// import icon from '../../assets/images/icon.png';
import HistoryTable from './HistoryTable';
import { Link } from 'react-router-dom';

const hist = [
  { date: '2024-03-10', amount: '500 PLT' },
  { date: '2024-03-11', amount: '750 PLT' },
];

function ClaimAirdrop() {
  return (
    <>
      <section className="main-dashboard">
        <div className="main-content-background" />
        <Container>
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
                    <span className="d-flex">1500</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="9">
                <p className='claim-intro'>
                  The initiative includes a supportive community where users can
                  share insights and strategies, fostering an environment that
                  supports financial stability and growth. With Ploutos, we are
                  committed to making financial freedom achievable, providing
                  users with control over their financial destinies and the
                  tools necessary to achieve a debt-free life...
                </p>
              </Col>
              <Col sm="3">
                <p className="ml-3">Claim airdrops below</p>
                <Link
                  className="dashboard-btn claim-btn"
                  target="_blank"
                  to="#"
                >
                  Claim
                </Link>
              </Col>
            </Row>

            <div className="history">
              <HistoryTable history={hist} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ClaimAirdrop;
