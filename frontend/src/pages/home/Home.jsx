import React from 'react';
import './home.styles.scss';
import Navbar from '../../components/navbar/navbar.component';
import Projects from '../../components/projects/projects.component';

/**
 * Home page
 * @return {JSX.Element}
 * @constructor
 */
export default function Home() {
  document.title = 'Home ● RatLocales';
  return (
    <>
      <Navbar />
      <Projects />
    </>
  );
}
