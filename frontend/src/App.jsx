import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import './i18n';

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} title="Home &#9679 RatLocales" />
      </Routes>
    </div>
  );
}
