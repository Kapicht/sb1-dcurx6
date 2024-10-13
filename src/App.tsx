import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EnergyReports from './pages/EnergyReports';
import Recommendations from './pages/Recommendations';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/energy-reports" element={<EnergyReports />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;