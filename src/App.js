import './App.css';
import { useState } from 'react';
// Assets
import personalLogo from './assets/levi-mas-trud-logo.svg'
import mailIcon from './assets/mail-icon.svg'
import arrowLeft from './assets/arrow.svg'
import arrowRight from './assets/arrow-right.svg'

// Scripts
import * as carousel from './CarouselLogic';

function App() {

  let [currentSlide, setCurrentSlide] = useState(0);

  function nextProject() {
    console.log(currentSlide);
    if (currentSlide >= carousel.projects.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide += 1);
    }
  }

  function previousProject() {
    console.log(currentSlide);
    if (currentSlide <= 0) {
      setCurrentSlide(carousel.projects.length - 1);
    } else {
      setCurrentSlide(currentSlide -= 1);
    }
  }

  return (
    <div className='page-container'>
      {/* Top */}
      <div className='grid-wrapper'>
        <div className='personal-logo-container'>
          <a href="/">
            <img className='personal-logo' src={personalLogo} alt="Personal Logo" />
          </a>
        </div>
        <nav className='main-nav'>
          <ul>
            <li><a className='nav-link' href="/">About</a></li>
            <li><a className='nav-link' href="/">Projects</a></li>
            <li><a className='nav-link' href="/">Blog</a></li>
          </ul>
        </nav>
        <div className='email-container'>
          <a className='nav-link' href="/">
            <img className='email-icon' src={mailIcon} alt='email-icon' />
          </a>
        </div>
        {/* Middle */}
        <div className='project-image-container'>
          {carousel.projects.map((project, index) => (
            <img
              key={index}
              className={`project-image ${currentSlide === index ? 'active' : ''}`}
              src={project.image}
              alt={`project ${index + 1}`}
            />
          ))}
        </div>
        <div className='project-description-container'>
          <h3 className='project-description'>{carousel.projects[currentSlide].description}</h3>
        </div>
        {/* Bottom */}
        <div className='project-title-container'>
          <h1 className='project-title'>{carousel.projects[currentSlide].title}</h1>
        </div>
        <div className='controls-container'>
          <button className='left-button'>
            <img src={arrowLeft} alt='left' onClick={previousProject} />
          </button>
          <button className='right-button'>
            <img src={arrowRight} alt='left' onClick={nextProject} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
