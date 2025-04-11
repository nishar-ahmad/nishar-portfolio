import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './compoents/Home';
import Skills  from './compoents/Skills';
import Experience from './compoents/Experience';
import Projects from './compoents/Project';
import Certifications from './compoents/Certifications';
import Contact from './compoents/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
//import './App.css';

const App: React.FC = () => {
  return(
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand' href='/'>Nishar's Portfolio</a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarnav'
              //aria-controls='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarnav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='/skills'>Skills</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='/experience'>Experience</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='/projects'>Projects</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='/certifications'>Certifications</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='/contact'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <footer className="bg-light text-center py-3 mt-5">
        <p>&copy; 2025 Nisharahmad Contractor </p>
      </footer>
      </div>
    </Router>
  )
}

export default App;
