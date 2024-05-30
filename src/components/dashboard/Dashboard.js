import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import History from './HistoryTable';

const hist = [
  { date: '2024-03-10', amount: '500 PLT' },
  { date: '2024-03-11', amount: '750 PLT' },
];

function MainDashboard() {
  return (
    <>
      <div className="main-card">
        <Row>
          <Col md="6" sm="12" className="mt-4">
            <Form className="allocation-form">
              <FormGroup>
                <Label for="walletAddress">Wallet Address</Label>
 
                <Input type="text" id="walletAddress" required />
              </FormGroup>
              <FormGroup>
                <Label for="allocationAmount">Amount</Label>
                <Input type="number" id="allocationAmount" required />
              </FormGroup>
              <Button type="submit" color="primary">
                Allocate Tokens
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
        <div className="history">
          <History history={hist} />
        </div>
        </Row>
      </div>
    </>
  );
}

export default MainDashboard;
