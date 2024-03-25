import React from 'react';
import { Container } from 'reactstrap';
import MainDashboard from '../../components/dashboard/Dashboard';

export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <Container>
        <MainDashboard />
      </Container>
    </section>
  );
}
