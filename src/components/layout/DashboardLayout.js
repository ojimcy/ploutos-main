import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../dashboard/Sidebar';
import { Col, Row } from 'reactstrap';
import { AppContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const { currentAccountId, setCurrentAccountId } = useContext(AppContext);

  useEffect(() => {
    if (!currentAccountId || currentAccountId == 0) {
      const id = localStorage.getItem('ID');
      if (!id || id == 0) {
        navigate('/auth/login');
        return;
      }
      setCurrentAccountId(id);
    }
  }, [currentAccountId]);
  return (
    <>
      {currentAccountId && currentAccountId > 0 && (
        <div className="dashboard-content">
          <Row>
            <Col lg="12">
              <Sidebar />
            </Col>
            <Col lg="12">
              <main className="main-content mt-4">{children}</main>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
