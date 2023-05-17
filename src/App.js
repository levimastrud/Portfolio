import './App.css';
import personalLogo from './assets/levi-mas-trud-logo.svg'
import mailIcon from './assets/mail-icon.svg'
import arrowLeft from './assets/arrow.svg'
import arrowRight from './assets/arrow-right.svg'
import codeBuddy from './assets/codebuddy-extended.png'

function App() {
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
          <img className='project-image' src={codeBuddy} alt='project 1' />
        </div>
        <div className='project-description-container'>
          <h3 className='project-description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</h3>
        </div>
        {/* Bottom */}
        <div className='project-title-container'>
          <h1 className='project-title'>CodeBuddy</h1>
        </div>
        <div className='controls-container'>
          <button className='left-button'>
            <img src={arrowLeft} alt='left' onClick={() => console.log('click')}/>
          </button>
          <button className='right-button'>
            <img src={arrowRight} alt='left' onClick={() => console.log('click')}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
