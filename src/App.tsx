import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Templates from './pages/Templates';
import Custom from './pages/Custom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;