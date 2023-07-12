import './Zenn.scss';
import { useState, useEffect } from 'react';
import wave1 from '../assets/Zenn/wave1-01.svg'
import wave2 from '../assets/Zenn/wave2-01.svg'
import zennArrow from '../assets/Zenn/zenn-button.svg'
import phoneIcon from '../assets/Zenn/phone-icon.svg'
import returnsIcon from '../assets/Zenn/returns-icon.svg'
import shippingIcon from '../assets/Zenn/shipping-icon.svg'
import downArrow from '../assets/Zenn/down-arrow-01.svg'
import man from '../assets/Zenn/man.png'
import personSleeping from '../assets/Zenn/personsleeping.png'
// Product Photos
import zennBig from '../assets/Zenn/zenn-big.png'
import zennBasic from '../assets/Zenn/zenn-p1.png'
import zennP5 from '../assets/Zenn/zenn-p5.png'
import zennP6 from '../assets/Zenn/zenn-p6.png'
import zennP7 from '../assets/Zenn/zenn-p7.png'
// Other Pages
import Footer from '../Footer';
import ZennLogo from '../assets/Zenn/zennLogo.svg'

function Zenn() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [slideOutSmarter, setslideOutSmarter] = useState(false);
    const [slideOutSecret, setslideOutSecret] = useState(false);
    const [slideOutNaturally, setslideOutNaturally] = useState(false);

    const learnMore = () => {
        console.log('hi')
    };

    return (
        <>
            <div className='zenn-wrapper'>
                <div className='zenn-landing-wrapper'>
                    {/* <h1 className='zenn-title'>ZENN</h1> */}
                    <img className='zenn-title' src={ZennLogo}/>
                    <h4 className='zenn-tagline'>Reconnect with Restful Nights</h4>
                    <img className='zenn-landing-image' src={zennBig} />
                    <div className='zenn-button-wrapper'>
                        <a className='zenn-shop-now' href='#zenn-product-block'>Shop Now</a>
                        <a className='zenn-learn-more' href='#zenn-information-block'>Learn More <img className='down-arrow' src={downArrow} /></a>
                    </div>
                </div>
                <img alt='wave' className='zenn-wave' id='wave1' src={wave1} />
                <div className='zenn-information-wrapper'>
                    <div className='zenn-information-block' id='zenn-information-block'>
                        <div className='block sleep-smarter'>
                            <h4 className='zenn-gradient-text'>Sleep<br />Smarter.</h4>
                            <img className='information-image' src={zennP6} />
                            <div className={`reveal-slide ${slideOutSmarter ? 'slide-out' : ''}`}>
                                <h3>lorem lorem lorem</h3>
                            </div>
                            <img onClick={() => learnMore()} className='zenn-arrow' src={zennArrow} />
                        </div>
                        <div className='block sleep-secrets'>
                            <h4 className='unlock'>Unlock your</h4>
                            <h4 className='sleep-secret-title'><span className='zenn-gradient-text'><span className='sleep'>Sleep</span><br />Secrets</span></h4>
                            <img className='sleeping-man' src={personSleeping} />
                            <div className={`reveal-slide ${slideOutSecret ? 'slide-out' : ''}`}>
                                <h3>lorem lorem lorem</h3>
                            </div>
                            <img onClick={() => learnMore()} className='zenn-arrow' src={zennArrow} />
                        </div>
                        <div className='block wake-up-naturally'>
                            <h4>Wake up<br /><span className='zenn-gradient-text'>Naturally</span></h4>
                            <div className={`reveal-slide ${slideOutNaturally ? 'slide-out' : ''}`}>
                                <h3>lorem lorem lorem</h3>
                            </div>
                            <img onClick={() => learnMore()} className='zenn-arrow' src={zennArrow} />
                        </div>
                    </div>
                </div>
                <img alt='wave' className='zenn-wave' id='wave2' src={wave2} />
                <div className='zenn-product-block' id='zenn-product-block'>
                    <div className='product-block-header'>
                        <h3>Discover<br /> your <span className='zenn-gradient-text'>ZENN</span></h3>
                        <button>Browse all Zenn Products</button>
                    </div>
                    <div className='zenn-product-wrapper'>
                        <div className='zenn-product'>
                            <img src={zennBasic} />
                            <h5 className='product-name'>ZENN Mini</h5>
                            <p className='product-description'>Compact and Portable Solution</p>
                            <h5 className='product-price'>$149</h5>
                            <button className='zenn-buy-button'>Buy</button>
                        </div>
                        <div className='zenn-product'>
                            <img src={zennP5} />
                            <h5 className='product-name'>ZENN Lite</h5>
                            <p className='product-description'>Essential Features at Great Value</p>
                            <h5 className='product-price'>$199</h5>
                            <button className='zenn-buy-button'>Buy</button>
                        </div>
                        <div className='zenn-product'>
                            <img src={zennP6} />
                            <h5 className='product-name'>ZENN Standard</h5>
                            <p className='product-description'>Versatile Performance for Everyday</p>
                            <h5 className='product-price'>$299</h5>
                            <button className='zenn-buy-button'>Buy</button>
                        </div>
                        <div className='zenn-product'>
                            <img src={zennP7} />
                            <h5 className='product-name'>ZENN Pro</h5>
                            <p className='product-description'>Advanced Features for Professionals</p>
                            <h5 className='product-price'>$399</h5>
                            <button className='zenn-buy-button'>Buy</button>
                        </div>
                    </div>
                    <div className='zenn-charity-block'>
                        <div>
                            <h2>Rest Assured, <br /> Rest Restored</h2>
                            <h6>Every ZENN Purchase Provides Bedding for the Homeless</h6>
                        </div>
                        <img className='charity-man' src={man} />
                    </div>
                    <div className='zenn-perks-block'>
                        <div className='zenn-perk'>
                            <h4>Fast Shipping</h4>
                            <img src={shippingIcon} />
                            <p>We understand the importance of receiving your package promptly, so we prioritize efficient shipping to ensure you get your ZENN in no time.</p>
                        </div>
                        <div className='zenn-perk'>
                            <h4>Free Returns</h4>
                            <img src={returnsIcon} />
                            <p>We want you to be completely satisfied with your ZENN. That's why we offer hassle-free returns, free of charge.</p>
                        </div>
                        <div className='zenn-perk'>
                            <h4>24/7 Support</h4>
                            <img src={phoneIcon} />
                            <p>Our dedicated support team is available 24/7 to guide you along your sleep journey or answer any technical questions you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Zenn;