<<<<<<< HEAD
import './Zenn.scss';
=======
import './Zenn.css';
>>>>>>> parent of 7589843 (nearly wrapped up with zenn)
import wave1 from '../assets/Zenn/wave1-01.svg'
import wave2 from '../assets/Zenn/wave2-01.svg'
import zennArrow from '../assets/Zenn/zenn-button.svg'
import phoneIcon from '../assets/Zenn/phone-icon.svg'
import returnsIcon from '../assets/Zenn/returns-icon.svg'
import shippingIcon from '../assets/Zenn/shipping-icon.svg'

function Zenn() {

    return (
        <div className='zenn-wrapper'>
            <div className='zenn-landing-wrapper'>
                <h1 className='zenn-title'>ZENN</h1>
                <h4 className='zenn-tagline'>Reconnect with Restful Nights</h4>
                <img className='zenn-landing-image' src='https://www.insight.com/content/dam/insight-web/en_US/store/apple/apple-watch-family-fall22.png' />
                <div className='zenn-button-wrapper'>
                    <a className='zenn-shop-now' href='#zenn-product-block'>Shop Now</a>
                    <a href='#zenn-information-block'>Learn More</a>
                </div>
            </div>
            <img alt='wave' className='zenn-wave' id='wave1' src={wave1} />
            <div className='zenn-information-wrapper'>
                <div className='zenn-information-block' id='zenn-information-block'>
                    <div className='block sleep-smarter'>
                        <h4 className='zenn-gradient-text'>Sleep<br />Smarter.</h4>
                        <img className='information-image' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLV3ref_VW_PF+watch-44-alum-starlight-nc-se_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713' />
                        <img className='zenn-arrow' src={zennArrow} />
                    </div>
                    <div className='block sleep-secrets'>
                        <img className='zenn-arrow' src={zennArrow} />
                    </div>
                    <div className='block wake-up-naturally'>
                        <h4>Wake Up<br /><span className='zenn-gradient-text'>Naturally</span></h4>
                        <img className='zenn-arrow' src={zennArrow} />
                    </div>
                </div>
            </div>
            <img alt='wave' className='zenn-wave' id='wave2' src={wave2} />
            <div className='zenn-product-block' id='zenn-product-block'>
                <div className='product-block-header'>
                    <h3>Discover<br /> your ZENN</h3>
                    <button>Browse all Zenn Products</button>
                </div>
                <div className='zenn-product-wrapper'>
                    <div className='zenn-product'>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLV3ref_VW_PF+watch-44-alum-starlight-nc-se_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713' />
                        <h5>ZENN Lite</h5>
                        <p>Tried and true</p>
                        <h5>$399</h5>
                        <button>Buy</button>
                    </div>
                    <div className='zenn-product'>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLV3ref_VW_PF+watch-44-alum-starlight-nc-se_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713' />
                        <h5>ZENN Lite</h5>
                        <p>Tried and true</p>
                        <h5>$399</h5>
                        <button>Buy</button>
                    </div>
                    <div className='zenn-product'>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLV3ref_VW_PF+watch-44-alum-starlight-nc-se_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713' />
                        <h5>ZENN Lite</h5>
                        <p>Tried and true</p>
                        <h5>$399</h5>
                        <button>Buy</button>
                    </div>
                </div>
                <div className='zenn-charity-block'>
                    <h2>Rest Assured, <br /> Rest Restored</h2>
                    <h6>Every ZENN Purchase Provides Bedding for the Homeless</h6>
                    <img src='' />
                </div>
                <div className='zenn-perks-block'>
                    <div className='zenn-perk'>
                        <h4>Fast Shipping</h4>
                        <img src={shippingIcon} />
                        <p>lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                    <div className='zenn-perk'>
                        <h4>Free Returns</h4>
                        <img src={returnsIcon} />
                        <p>lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                    <div className='zenn-perk'>
                        <h4>24/7 Support</h4>
                        <img src={phoneIcon} />
                        <p>lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zenn;