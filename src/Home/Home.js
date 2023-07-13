import './Home.scss'
import { useState, useRef, useEffect } from 'react';
import ModelViewer from '../model';
import linkedInIcon from '../assets/linkedIn.svg'
import mailIcon from '../assets/mailIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'
import gitHubIcon from '../assets/github-icon.svg'
import logoIcon from '../assets/logo-icon-01.svg'
// Sounds
import ah from '../assets/Sounds/ah.mp3'
import aRandomSnare from '../assets/Sounds/a-random-snare.mp3'
import applause from '../assets/Sounds/applause.mp3'
import arcadeBleepSound from '../assets/Sounds/arcade-bleep-sound.mp3'
import blaster from '../assets/Sounds/blaster.mp3'
import bobbyTelevision from '../assets/Sounds/bobby-television.mp3'
import CatMeow2 from '../assets/Sounds/cat-meow-2.mp3'
import Chicken from '../assets/Sounds/chicken.mp3'
import crazyDistortedScreaming from '../assets/Sounds/crazy-distorted-screaming-sound.mp3'
import creeper from '../assets/Sounds/creeper.mp3'
import derp from '../assets/Sounds/derpa-derpa-derpa-derp.mp3'
import dice from '../assets/Sounds/dice.mp3'
import duckQuack from '../assets/Sounds/duck-quack.mp3'
import elephant from '../assets/Sounds/elephant.mp3'
import evilLaugh from '../assets/Sounds/evil-laugh.mp3'
import fart from '../assets/Sounds/fart.mp3'
import funnyMeow from '../assets/Sounds/funny-meow.mp3'
import granularAmbient from '../assets/Sounds/granular-ambient.mp3'
import healUp from '../assets/Sounds/heal-up.mp3'
import heeHee from '../assets/Sounds/hee-hee.mp3'
import heheh from '../assets/Sounds/heheh.mp3'
import thickestBook from '../assets/Sounds/id-like-your-thickest-book-please.mp3'
import kickAss from '../assets/Sounds/im-gonna-kick-your-ass.mp3'
import mouse from '../assets/Sounds/mouse.mp3'
import juicy from '../assets/Sounds/oh-my-god-its-so-juicy.mp3'
import owl from '../assets/Sounds/owl.mp3'
import plasmablaster from '../assets/Sounds/plasmablaster.mp3'
import pop from '../assets/Sounds/pop.mp3'
import randomDumbSound from '../assets/Sounds/random-dumb-sound.mp3'
import randomSound from '../assets/Sounds/random-sound.mp3'
import randomFX from '../assets/Sounds/randomfx.mp3'
import sciFi2 from '../assets/Sounds/sci-fi-2.mp3'
import sciFi from '../assets/Sounds/sci-fi.mp3'
import terminated from '../assets/Sounds/terminated.mp3'
import wellIWeird from '../assets/Sounds/well-i-weird-sound.mp3'
import yay from '../assets/Sounds/yay.mp3'
import yesMaster from '../assets/Sounds/yesmy-master.mp3'
import yipee from '../assets/Sounds/yipee.mp3'
import silenthill from '../assets/Sounds/silenthill.mp3'
import holyshit from '../assets/Sounds/holyshit.mp3'
import firedepartment from '../assets/Sounds/firedepartment.mp3'
import djsorrow from '../assets/Sounds/djsorrow.mp3'


function Home() {

  const currentYear = new Date().getFullYear();

  const [rotationAngle, setRotationAngle] = useState(0);
  const [chosenSound, setChosenSound] = useState(ah);
  const audioRef = useRef(null);

  let randomSounds = [ah, aRandomSnare, applause, arcadeBleepSound, blaster, bobbyTelevision, CatMeow2, Chicken, crazyDistortedScreaming, creeper, derp, dice, duckQuack, elephant, evilLaugh, fart,
    funnyMeow, granularAmbient, healUp, heeHee, heheh, thickestBook, kickAss, mouse, juicy, owl, plasmablaster, pop, randomDumbSound, randomSound, randomFX, sciFi2, sciFi, terminated, wellIWeird, yay, yesMaster, yipee,
    silenthill, holyshit, firedepartment, djsorrow
  ]

  const updateSong = (source) => {
    setChosenSound(source);
    console.log(chosenSound);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  const handleLogoClick = () => {
    setRotationAngle(prevAngle => prevAngle + 45); // Increment the rotation angle by 90 degrees
    const randomIndex = Math.floor(Math.random() * randomSounds.length);
    updateSong(randomSounds[randomIndex]);
    audioRef.current.play(); // Play the sound
  };

  // Adjusting volume

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;
    }
  }, []);

  return (
    <div className='home-wrapper'>
      <ModelViewer />
      {/* Rest of the component */}
      <audio ref={audioRef}>
        <source src={chosenSound} type="audio/mp3" />
      </audio>
      <div className='landing-wrapper'>
        <img alt='logo' style={{ transform: `rotate(${rotationAngle}deg)` }} onClick={handleLogoClick} className='logo-icon' src={logoIcon} />
        <h1 className='title-name'>Levi<br />Mastrud</h1>
        <div className='trade-wrapper'>
          <h3>Designer</h3>
          <h3>Developer</h3>
        </div>
        <div className="social-link-wrapper">
          <a className='social-link' target='_blank' href='https://www.linkedin.com/in/levimastrud/'>
            <img alt='linkedIn icon' src={linkedInIcon} />
          </a>
          <a className='social-link' href="mailto:levimastrud@gmail.com">
            <img alt='email icon' src={mailIcon} />
          </a>
          <a className='social-link' target='_blank' href='https://github.com/levimastrud'>
            <img alt='github icon' src={gitHubIcon} />
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