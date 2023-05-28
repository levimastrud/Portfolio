import './Home.css'
import ModelViewer from '../model';



function Home() {
  return (
    <>
    <ModelViewer/>
      <div className='landing-wrapper'>
        <h1 className='title-name'>Levi<br />Mastrud</h1>
        <div className='trade-wrapper'>
          <h3>Designer</h3>
          <h3>Developer</h3>
        </div>
        <div className="social-link-wrapper">
          <div className='social-link'></div>
          <div className='social-link'></div>
          <div className='social-link'></div>
        </div>
      </div>
    </>
  )
};

export default Home;