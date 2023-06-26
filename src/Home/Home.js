import './Home.css'
import ModelViewer from '../model';
import linkedInIcon from '../assets/linkedIn.svg'
import mailIcon from '../assets/mailIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'



function Home() {
  return (
    <div className='home-wrapper'>
      <ModelViewer />
      <div className='landing-wrapper'>
        {/* <h3 className='introduction'>Hey, I'm</h3> */}
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
      </div>
    </div>
  )
};

export default Home;