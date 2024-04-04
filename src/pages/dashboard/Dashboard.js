import React from 'react';
import { Container } from 'reactstrap';
import MainDashboard from '../../components/dashboard/Dashboard';

export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <div className="main-content-background" />
      <Container>
        <MainDashboard />
      </Container>
    </section>
  );
}
