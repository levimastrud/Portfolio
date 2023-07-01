import './Home.css'
import ModelViewer from '../model';
import linkedInIcon from '../assets/linkedIn.svg'
import mailIcon from '../assets/mailIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'



function Home() {

    const currentYear = new Date().getFullYear();

  return (
    <div className='home-wrapper'>
      <ModelViewer />
      <div className='landing-wrapper'>
        <h1 className='title-name'>Levi<br />Mastrud</h1>
        <div className='trade-wrapper'>
          <h3>Designer</h3>
          <h3>Developer</h3>
        </div>
        <div className="social-link-wrapper">
          <a className='social-link' target='_blank' href='/https://www.linkedin.com/in/levimastrud/'>
            <img src={linkedInIcon} />
          </a>
          <a className='social-link' href='/'>
            <img src={mailIcon} />
          </a>
          <a className='social-link' target='_blank' href='/https://twitter.com/levimas_'>
            <img src={twitterIcon} />
          </a>
        </div>
        <footer className='copyright'>
          <p>©{currentYear} levimastrud.com</p>
        </footer>
      </div>
    </div>
  )
};

export default Home;