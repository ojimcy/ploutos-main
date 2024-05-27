import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardLayout from './components/layout/DashboardLayout';

import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import ClaimAirdrop from './components/dashboard/claim';

const App = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </Layout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path='claim' element={<ClaimAirdrop />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
