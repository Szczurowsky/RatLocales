import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './i18n';
import Home from './pages/home/Home';
import Project from './pages/project/Project';

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/project/:id/file/:name" element={<Project />} />
      </Routes>
    </div>
  );
}
