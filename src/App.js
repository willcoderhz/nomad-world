// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import JobBoard from './pages/JobBoard';
import LearningZone from './pages/LearningZone';
import Web3Zone from './pages/Web3Zone';
import PostJob from './pages/PostJob';
import PostResume from './pages/PostResume';
import PostTopic from './pages/PostTopic';
import './App.css'
import CommunityBoard from './pages/CommunityBoard';
import Footer from './components/Footer';
import DiscoveryZone from './pages/Discover';


function App() {
  return (
    <Router>
       <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/job-board" />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/learning-zone" element={<LearningZone />} />
        <Route path="/web3-zone" element={<Web3Zone />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/postresume" element={<PostResume />} />
        <Route path='/posttopic' element={<PostTopic />} />
        <Route path='/community-board' element={<CommunityBoard />} />
        <Route path='/discover' element={<DiscoveryZone />} />
        {/* 更多路由... */}
        <Route path="*" element={<Navigate replace to="/job-board" />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
